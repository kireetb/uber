import { StyleSheet, TextInput } from "react-native";

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 10,
  },
  image: { height: 50, width: 50, resizeMode: "contain" },
  middleContainer: { flex: 1, padding: 10 },
  rightContainer: { width: 70, justifyContent: "flex-end", flexDirection: "row"},
  type: { fontSize: 16, fontWeight: "bold" },
  time: {fontSize: 12},
  price: { fontSize: 14 },
});

export default styles;
