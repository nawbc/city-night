import { StyleSheet } from "@react-pdf/renderer";

const styles = StyleSheet.create({
  viewer: {
    padding: 0
  },

  page: {
    margin: 0,
    flexDirection: "row",
    backgroundColor: "#ffffff"
  },
  title: {
    fontSize: 30,
    marginBottom: 30
  },
  section: {
    margin: 10,
    padding: 10,
    flexGrow: 1
  }
});

export default styles;
