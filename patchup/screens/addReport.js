import React, { useState, useEffect, useRef } from "react";
import { View, Text, SafeAreaView, StyleSheet, TouchableOpacity, Image } from "react-native";
import { Camera } from "expo-camera";


const AddReport = () => {
  const [hasPermission, setHasPermission] = useState(null);  // Camera permission state
  const cameraType = Camera.Constants?.Type?.back || 'back';  // Default to 'back' if undefined
const [type, setType] = useState(cameraType);  // Use the fallback type

  const [photo, setPhoto] = useState(null);  // Photo state
  const cameraRef = useRef(null);  // Ref for camera

  useEffect(() => {
    // Log Camera.Constants to inspect the object
    console.log(Camera.Constants);
    
    // Request camera permission
    (async () => {
      const { status } = await Camera.requestCameraPermissionsAsync();
      setHasPermission(status === "granted");
    })();
  }, []);
  

  if (hasPermission === null) {
    return <Text>Requesting camera permission...</Text>;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }

  const takePhoto = async () => {
    if (cameraRef.current) {
      const photo = await cameraRef.current.takePictureAsync();
      setPhoto(photo.uri);  // Set the photo URI
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.sectionTitle}>Take a photo</Text>
      {/* Temporarily remove Camera for debugging */}
      {/* <Camera style={styles.camera} type={type} ref={cameraRef}> */}
      {/*   <View style={styles.cameraButtonContainer}>
            <TouchableOpacity style={styles.cameraButton} onPress={takePhoto}>
              <Text style={styles.cameraButtonText}>Take Photo</Text>
            </TouchableOpacity>
          </View>
        </Camera> */}
      {photo && (
        <View style={styles.photoPreview}>
          <Image source={{ uri: photo }} style={styles.photo} />
        </View>
      )}
    </SafeAreaView>
  );
  
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: "#fff" },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 20,
  },
  camera: {
    flex: 1,
    width: "100%",
    justifyContent: "flex-end",
  },
  cameraButtonContainer: {
    flex: 0,
    flexDirection: "row",
    justifyContent: "center",
    marginBottom: 20,
  },
  cameraButton: {
    backgroundColor: "#00BFE5",
    padding: 15,
    borderRadius: 50,
  },
  cameraButtonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
  photoPreview: {
    alignItems: "center",
    marginTop: 20,
  },
  photo: {
    width: 300,
    height: 300,
    borderRadius: 10,
    resizeMode: "cover",
  },
});

export default AddReport;
