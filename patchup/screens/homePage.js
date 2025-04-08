import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  SafeAreaView,
  KeyboardAvoidingView,
  Platform,
  TouchableOpacity,
  Image,
} from "react-native";
import Header from "../components/headerhome";

const screenWidth = Dimensions.get("window").width;

const HomePage = ({ navigation }) => {
  const [activeTab, setActiveTab] = useState('Home');

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#01B3D7" }}>
      <KeyboardAvoidingView
        style={{ flex: 1 }}
        behavior={Platform.OS === "ios" ? "padding" : undefined}
        keyboardVerticalOffset={Platform.OS === "ios" ? 0 : 20}
      >
        <Header />
        <View style={styles.container}>
          <Text style={styles.reporttxt}>Got something to report?</Text>
          <TouchableOpacity style={styles.reportbtn}>
            <Text style={styles.buttonText}>Report Now!</Text>
          </TouchableOpacity>
          <View style={styles.optionsContainer}>
            <TouchableOpacity style={styles.optionBox} onPress={() => navigation.navigate("ReceiveMoney")}>
              <Image source={require("../assets/receive.png")} style={styles.optionIcon} />
              <Text style={styles.optionText}>Receive</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.optionBox} onPress={() => navigation.navigate("SaveMoney")}>
              <Image source={require("../assets/save.png")} style={styles.optionIcon} />
              <Text style={styles.optionText}>Save</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.optionBox} onPress={() => navigation.navigate("BudgetMoney")}>
              <Image source={require("../assets/budget.png")} style={styles.optionIcon} />
              <Text style={styles.optionText}>Budget</Text>
            </TouchableOpacity>
            <Text style={styles.latest}>Latest Community Reports</Text>
            <View style={styles.cardsContainer}>
              {[1, 2, 3].map((item, index) => (
                <View key={index} style={styles.card}>
                  <Image source={require("../assets/pothole.jpg")} style={styles.cardImage} />
                  <View style={styles.cardContent}>
                    <View style={styles.cardTopRow}>
                      <Text style={styles.cardTitle}>Pothole</Text>
                      <Text style={styles.cardDate}>08/04/2025</Text>
                    </View>
                    <View style={styles.cardLocationRow}>
                      <Text style={styles.cardLocation}>Sangandaan, Caloocan</Text>
                    </View>
                    <Text style={styles.cardStatus}>Pending</Text>
                  </View>
                </View>
              ))}
            </View>
            <Text style={styles.latest}>Upcoming Volunteer Events</Text>


          </View>
        </View>
      </KeyboardAvoidingView>

    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#01B3D7" },

  optionIcon: {
    width: 25,
    height: 25,
    resizeMode: "contain",
    marginBottom: 5,
  },
  optionsContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    margin: 0,
    backgroundColor: "#fff",
    padding: 20,
    borderRadius: 15,
    width: screenWidth,
  },
  optionBox: {
    marginTop: 10,
    alignItems: "center",
    justifyContent: "center",
    padding: 15,
    borderRadius: 10,
    width: screenWidth / 3.7,
    marginBottom: 15,
    borderWidth: 1,
    borderColor: "#01B3D7",
  },
  reporttxt: {
    paddingLeft: 40,
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "left",
    marginBottom: 10,
    color: "#fff",
  },
  optionText: { fontSize: 14, color: "#black", marginTop: 10 },
  reportbtn: {
    backgroundColor: '#CAF1F8',
    paddingVertical: 12,
    paddingHorizontal: 77,
    borderRadius: 10,
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    marginBottom: 20,
    width: screenWidth / 1.2,
    alignSelf: "center",
  },
  buttonText: {
    color: '#01B3D7',
    fontSize: 16,
    fontWeight: '600',
    alignSelf: "center",
    textAlign: "center",
    fontWeight: "800",
  },
  latest: {
    paddingLeft: 10,
    fontSize: 20,
    fontWeight: "600",
    textAlign: "left",
    marginBottom: 10,
    color: "#black",
    marginTop: 5,
  },
  cardsContainer: {
    marginTop: 10,
    paddingHorizontal: 10,
  },
  card: {
    flexDirection: "row",
    alignItems: "flex-start",
    backgroundColor: "#fff",
    borderRadius: 10,
    padding: 10,
    marginBottom: 15,
    width: screenWidth / 1.2,
    alignSelf: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  cardImage: {
    width: 80,
    height: 80,
    borderRadius: 8,
    marginRight: 10,
  },
  cardContent: {
    flex: 1,
  },
  cardTopRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 5,
  },
  cardTitle: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#333",
  },
  cardDate: {
    fontSize: 12,
    color: "#777",
  },
  cardLocationRow: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 5,
  },
  cardPinIcon: {
    width: 14,
    height: 14,
    resizeMode: "contain",
    marginRight: 5,
  },
  cardLocation: {
    fontSize: 14,
    color: "#555",
  },
  cardStatus: {
    fontSize: 14,
    fontWeight: "600",
    color: "#fff",
    backgroundColor: "#FBBC05",
    paddingHorizontal: 10,
    paddingVertical: 4,
    alignSelf: "flex-start",
    borderRadius: 6,
  },
  

});

export default HomePage;
