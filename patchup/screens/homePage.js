import React, { useState, useEffect, useRef } from "react";
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  Dimensions,
  SafeAreaView,
  KeyboardAvoidingView,
  Platform,
  TouchableOpacity,
  Image,
  renderTransaction,

} from "react-native";
import Header from "../components/header";

import BottomNavBar from "../components/bottomNavbar";

const screenWidth = Dimensions.get("window").width;

const HomePage = ({ navigation }) => {
  const [activeTab, setActiveTab] = useState('Home'); // initial active tab

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
            {/* Top Row (3 options) */}
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

      <BottomNavBar activeTab={activeTab} setActiveTab={setActiveTab} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#fff", padding: 20 },

  card: {
    width: screenWidth - 40,
    padding: 20,
    borderRadius: 10,
    alignItems: "center",
    marginRight: 10,
    height: 200, // Fixed height
    marginBottom: 260,
  },
  cardRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
  },
  cardTitle: { color: "#fff", fontSize: 14, marginBottom: 20 },
  cardBalance: {
    fontSize: 32,
    fontWeight: "bold",
    color: "#fff",
    marginVertical: 10,
  },
  bankName: { fontSize: 16, color: "#fff", marginVertical: 10 },
  cardUserName: {
    fontSize: 18,
    color: "#fff",
    marginVertical: 5,
    justifyContent: "flex-start",
    textAlign: "left",
    marginVertical: 10,
  },

  accountInfo: { fontSize: 14, color: "#fff" },
  expiryDate: { fontSize: 14, color: "#fff" },

  transactionsList: { marginTop: 10 },
  transactionItem: {
    flexDirection: "row",
    alignItems: "center",
    padding: 10,
    borderBottomWidth: 1,
    borderColor: "#ddd",
  },
  transactionText: { flex: 1, marginLeft: 10 },
  transactionType: { fontSize: 16 },
  transactionTime: { fontSize: 12, color: "gray" },
  transactionAmount: { fontSize: 16, fontWeight: "bold" },

  transactionListHead: {
    fontSize: 16,
    marginTop: 5,
  },

  dotContainer: {
    flexDirection: "row",
    justifyContent: "center",
    marginVertical: 0,
    marginTop: 5,
  },
  dot: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: "#ccc",
    margin: 5,
  },
  activeDot: {
    backgroundColor: "#4CAF50",
  },

  optionIcon: {
    width: 25,
    height: 25,
    resizeMode: "contain",
    marginBottom: 5,
  },
  centeredRow: {
    flexDirection: "row",
    justifyContent: "center",
    width: "100%",
    gap: 20, // optional spacing between the two
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
    width: screenWidth / 3.7, // Smaller box
    marginBottom: 15,
    borderWidth: 1,
    borderColor: "#023126",
  },
  
  optionText: { fontSize: 14, color: "#4CAF50", marginTop: 10 },
});

export default HomePage;
