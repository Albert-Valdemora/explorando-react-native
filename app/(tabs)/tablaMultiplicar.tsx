import { View, Text, TextInput, Button, StyleSheet } from "react-native";
import React, { useState } from 'react';

export default function tablaMultiplicar() {

  const [numero, setNumero] = useState("");
  const [tabla, setTabla] = useState([]);
  

  const generarTabla = () => {

    const num = parseInt(numero);
    
    if (!isNaN(num)) {
      let tablaMultiplicar = [];
      for (let i = 1; i <= 13; i++) {
        const resultado = num * i;
        tablaMultiplicar.push(`${num} x ${i} = ${resultado}`);
      }
      
   
      setTabla(tablaMultiplicar);
    }
  };
  return (
    <View style={styles.container}>
         <TextInput
           style={styles.input}
           keyboardType="numeric"
           placeholder="Número 1"
           value={numero}
           onChangeText={setNumero}
         />
       
       <Button title="Generar Tabla" onPress={generarTabla} />

       {
        tabla.map((linea, i) => (
          <Text key={i} style={styles.result}>{linea}</Text>
        ))
       }
       </View>
  )
}


const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", alignItems: "center" },
  input: { width: 200, padding: 10, margin: 10, borderWidth: 1, textAlign: "center" },
  result: { fontSize: 20, marginTop: 10, fontWeight: 600},
  error: { color: 'red', marginTop: 10 }
});
