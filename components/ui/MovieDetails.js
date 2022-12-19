import { View, Text, StyleSheet } from "react-native";

function MovieDetails({ title, overView, style }) {
  return (
    <View style={[styles.details, style]}>
      <Text style={styles.detailItem}>{title}</Text>
      <Text style={styles.detailItem}>{overView}</Text>
    </View>
  );
}

export default MovieDetails;

const styles = StyleSheet.create({
  details: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    padding: 8,
  },
  detailItem: {
    marginHorizontal: 4,
    fontSize: 12,
  },
});
