import { View, Text, TextInput, Button, StyleSheet } from "react-native";
import React, { useState } from 'react';

export default function Sumadora() {
  const [num1, setNum1] = useState("");
  const [num2, setNum2] = useState("");
  const [resultado, setResultado] = useState(null);

  const sumaNumero = (num1: string, num2: string) => {
   
    const numero1 = parseFloat(num1);
    const numero2 = parseFloat(num2);

    if (!isNaN(numero1) && !isNaN(numero2)) {
      setResultado(numero1 + numero2);
    } else {
      setResultado(null); 
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        keyboardType="numeric"
        placeholder="Número 1"
        value={num1}
        onChangeText={setNum1}
      />
      <TextInput
        style={styles.input}
        keyboardType="numeric"
        placeholder="Número 2"
        value={num2}
        onChangeText={setNum2}
      />
      <Button title="Sumar" onPress={() => sumaNumero(num1, num2)} />
      {resultado !== null && <Text style={styles.result}>Resultado: {resultado}</Text>}
      {resultado === null && num1 && num2 && (
        <Text style={styles.error}>Por favor, ingrese números válidos</Text>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", alignItems: "center" },
  input: { width: 200, padding: 10, margin: 10, borderWidth: 1, textAlign: "center" },
  result: { fontSize: 20, marginTop: 10, fontWeight: 600},
  error: { color: 'red', marginTop: 10 }
});
