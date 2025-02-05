import { View, Text, Image, StyleSheet } from "react-native";

export default function HomeScreen() {
  return(
    <View style={styles.container}>
      <Image source={require("@/assets/my.jpg")} style={styles.image} resizeMode="contain" />
      <Text style={styles.textName}> Albert Daniel Valdemora Suarez</Text>
      <Text style={styles.textCorreo}>albertvaldemorat@gmail.com</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: { 
    flex: 1,
    justifyContent: "center", 
    alignItems: "center", 
    backgroundColor: 'rgb(98,119,199)',
  },
  image: { 
    width: '100%', 
    height: 300, 
    borderRadius: 10, 
    marginBottom: 10,
    resizeMode: "contain",
  },
  textName: { 
    fontSize: 20,
    fontWeight: 600 
  },
textCorreo: { 
  fontSize: 20,
  fontWeight: 300,
  textDecorationLine: 'underline', 
  color: 'blue'
},
});
