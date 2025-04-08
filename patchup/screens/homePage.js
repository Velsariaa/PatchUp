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
import Header from "../components/header";

const screenWidth = Dimensions.get("window").width;

const HomePage = ({ navigation }) => {
  const [activeTab, setActiveTab] = useState('Home'); 

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#fff" }}>
      <KeyboardAvoidingView
        style={{ flex: 1 }}
        behavior={Platform.OS === "ios" ? "padding" : undefined}
        keyboardVerticalOffset={Platform.OS === "ios" ? 0 : 20}
      >
        <Header />
        <View style={styles.container}>
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
          </View>
        </View>
      </KeyboardAvoidingView>

    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#fff", padding: 20 },

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
    marginTop: 5,
  },
  optionBox: {
    alignItems: "center",
    justifyContent: "center",
    padding: 15,
    borderRadius: 10,
    width: screenWidth / 3.7,
    marginBottom: 15,
    borderWidth: 1,
    borderColor: "#023126",
  },
  optionText: { fontSize: 14, color: "#4CAF50", marginTop: 10 },
});

export default HomePage;
