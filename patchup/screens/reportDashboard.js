import React, { useState } from "react";
import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
  FlatList,
  Image,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import Header from "../components/header";
// import BottomNavBar from "../components/bottomNavbar";

// Utility function to return the correct icon based on report type
const getReportIcon = (type) => {
  switch (type.toLowerCase()) {
    case "traffic hazard":
      return require("../assets/traffic.png");
    case "waste problem":
      return require("../assets/waste.png");
    case "electrical hazard":
      return require("../assets/default.png");
    default:
      return require("../assets/default.png"); // fallback icon
  }
};

// Dummy data
const reports = [
  {
    id: "1",
    type: "Traffic Hazard",
    status: "Submitted",
    statusColor: "#00BFE5",
    location: "Rizal Avenue, Caloocan",
    dateReported: "April 5, 2025",
  },
  {
    id: "2",
    type: "Waste Problem",
    status: "Pending",
    statusColor: "#F9B233",
    location: "5th Ave., Caloocan",
    dateReported: "April 4, 2025",
  },
  {
    id: "3",
    type: "Electrical Hazard",
    status: "Resolved",
    statusColor: "#68C061",
    location: "UE Caloocan Campus",
    dateReported: "April 1, 2025",
  },
];

const ReportDashboard = ({ navigation }) => {
  const [activeTab, setActiveTab] = useState("Reports");

  const renderReport = ({ item }) => (
    <View style={styles.reportItem}>
      <View style={styles.reportLeft}>
        <View style={styles.iconBox}>
          <Image source={getReportIcon(item.type)} style={styles.iconImage} />
        </View>
        <View>
          <Text style={styles.reportTitle}>{item.type}</Text>
          <Text style={styles.reportLocation}>{item.location}</Text>
          <Text style={styles.reportDate}>{item.dateReported}</Text>
        </View>
      </View>
      <Text style={[styles.reportStatus, { color: item.statusColor }]}>
        {item.status}
      </Text>
    </View>
  );
  

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#fff" }}>
      <KeyboardAvoidingView
        style={{ flex: 1 }}
        behavior={Platform.OS === "ios" ? "padding" : undefined}
        keyboardVerticalOffset={Platform.OS === "ios" ? 0 : 20}
      >
        <Header />
        <View style={styles.container}>
          <Text style={styles.sectionTitle}>My Reports</Text>

          <FlatList
            data={reports}
            keyExtractor={(item) => item.id}
            renderItem={renderReport}
            contentContainerStyle={{ paddingBottom: 20 }}
          />

          <TouchableOpacity
            style={styles.addReportButton}
            onPress={() => navigation.navigate("AddReport")}
          >
            <Text style={styles.addReportText}>+ Add Report</Text>
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>

      {/* <BottomNavBar activeTab={activeTab} setActiveTab={setActiveTab} /> */}
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

  reportItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-start",
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderColor: "#ddd",
  },

  reportLeft: {
    flexDirection: "row",
    alignItems: "flex-start",
    gap: 10,
  },

  reportIcon: {
    width: 50,
    height: 50,
    resizeMode: "contain",
    marginRight: 10,
    marginTop: 5,
  },

  reportTitle: {
    fontSize: 16,
    fontWeight: "600",
    marginBottom: 3,
  },

  reportLocation: {
    fontSize: 12,
    color: "gray",
    marginBottom: 3,
  },

  reportDate: {
    fontSize: 12,
    color: "gray",
  },

  reportStatus: {
    fontSize: 14,
    fontWeight: "600",
    marginTop: 5,
  },

  addReportButton: {
    backgroundColor: "#00BFE5",
    paddingVertical: 15,
    alignItems: "center",
    borderRadius: 10,
    marginTop: 20,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 2,
    elevation: 4,
    marginBottom: 10,
  },

  addReportText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
  iconBox: {
    width: 50,
    height: 50,
    backgroundColor: "#01B3D7", // light cyan background
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "center",
    marginRight: 10,
    marginTop: 5,
  },
  
  iconImage: {
    width: 25,
    height: 25,
    resizeMode: "contain",
  },
  
});

export default ReportDashboard;
