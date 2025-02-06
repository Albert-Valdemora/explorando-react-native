import { View, StyleSheet } from "react-native";
import { WebView } from "react-native-webview";
import React from 'react'

export default function experiencia() {
  return (
    <View style={styles.container}>
    <WebView source={{ uri: "https://www.youtube.com/watch?v=oMmHOE2CuKM" }} style={{ flex: 1 }} />
  </View>
  )
}

const styles = StyleSheet.create({
  container: { flex: 1 },
});