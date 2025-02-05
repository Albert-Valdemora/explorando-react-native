import { View, Text, StyleSheet, TextInput, Button } from 'react-native'
import React, { useState } from 'react'
import numeroALetras from "@/utils/numeroALetras";

export default function traductor() {

  const [numero, setNumero] = useState("");
  const [letras, setLetras] = useState("");

  const traducir = () => setLetras(numeroALetras(parseInt(numero)));

  return (
    <View style={styles.container}>
    <TextInput style={styles.input} keyboardType="numeric" placeholder="Ingrese un número" onChangeText={setNumero} />
    <Button title="Traducir" onPress={traducir} />
    {letras && <Text style={styles.result}>{letras}</Text>}
  </View>
  )
}


const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", alignItems: "center" },
  input: { width: 200, padding: 10, margin: 10, borderWidth: 1, textAlign: "center" },
  result: { fontSize: 20, marginTop: 10, fontWeight: 600},
  error: { color: 'red', marginTop: 10 }
});
