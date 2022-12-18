// import { View, Text, StyleSheet, Pressable } from "react-native";

// function MovieGridTile({ title, genre, onPress }) {
//   /*
//     ! What I will show for a single movie:
//     1. Title
//     2. Genre
//     3.Overview?
//     4. Image?
//     */
//   return (
//     <View style={styles.gridItem}>
//       <Pressable android_ripple={{ color: "#ccc" }} onPress={onPress}>
//         <View style={styles.innerContainer}>
//           <Text style={styles.title}>{title}</Text>
//           {/* <Text style={styles.title}>{genre}</Text> */}
//         </View>
//       </Pressable>
//     </View>
//   );
// }

// export default MovieGridTile;

// const styles = StyleSheet.create({
//   gridItem: {
//     flex: 1,
//     margin: 16,
//     height: 150,
//     borderRadius: 8,
//     elevation: 4,
//     backgroundColor: "white",
//     shadowColor: "black",
//     shadowOpacity: 0.25,
//     shadowOffset: { width: 0, height: 2 },
//     shadowRadius: 8,
//     overflow: Platform.OS === "android" ? "hidden" : "",
//   },
//   button: {
//     flex: 1,
//   },
//   innerContainer: {
//     flex: 1,
//     padding: 16,
//     justifyContent: "center",
//     alignItems: "center",
//     borderRadius: 8,
//   },
//   title: {
//     fontWeight: "bold",
//     fontSize: 14,
//     // color: "black",
//   },
//   buttonPressed: {
//     opacity: 0.5,
//   },
// });

import {
  Pressable,
  View,
  Text,
  StyleSheet,
  Platform,
  Image,
} from "react-native";

function CategoryGridTile({ title, genres, onPress, image }) {
  // ! every tile has a title and a color, these are the props I want to show
  return (
    <View style={styles.gridItem}>
      <Pressable
        android_ripple={{ color: "#ccc" }}
        // style={({ pressed }) => [
        //   styles.button,
        //   pressed ? styles.buttonPressed : null,
        // ]}
        style={styles.button}
        onPress={onPress}
      >
        <View style={styles.innerContainer}>
          {/* // * Category title */}
          <Text style={styles.title}>{title}</Text>
          <Image style={styles.image} source={image} />
          {/* <Text style={styles.genres}>{genres}</Text> */}
        </View>
      </Pressable>
    </View>
  );
}

export default CategoryGridTile;

const styles = StyleSheet.create({
  gridItem: {
    flex: 1,
    flexDirection: "row",
    margin: 16,
    height: 150,
    borderRadius: 8,
    elevation: 4,
    backgroundColor: "white",
    shadowColor: "black",
    shadowOpacity: 0.25,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 8,
    overflow: Platform.OS === "android" ? "hidden" : "",
  },
  button: {
    flex: 1,
  },
  innerContainer: {
    flex: 1,
    padding: 16,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 8,
  },
  title: {
    fontWeight: "bold",
    fontSize: 18,
  },
  buttonPressed: {
    opacity: 0.5,
  },
  image: {
    width: "50%",
    height: 50,

    // flex: 1,
  },
});
