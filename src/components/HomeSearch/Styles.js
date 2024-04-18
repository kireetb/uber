import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  inputBox: {
    backgroundColor: "#e7e7e7",
    margin: 5,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 10,
    borderRadius: 10,
  },
  inputText: { fontSize: 20, fontWeight: "600", color: "#6e6e6e" },
  timeContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: 100,
    backgroundColor: "#ffff",
    padding: 10,
    borderRadius: 10,
  },
  lastSearch: {
    flexDirection: "row",
    alignItems: "center",
    margin: 5,
    backgroundColor: "#ffffff",
    height: 50,
    borderRadius: 10,
    borderBottomWidth: 1,
    borderLeftWidth: 1,
    borderRightWidth: 1,
    borderColor: "#b3b3b3"
  },
  iconContainer: {
    backgroundColor: "#b3b3b3",
    padding: 10,
    borderRadius: 25,
    marginLeft: 5
  },
  searchName:{
    marginLeft: 15
  }
});

export default styles;
