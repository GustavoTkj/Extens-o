import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

export default function App() {
  const [altura, setAltura] = useState('');
  const [peso, setPeso] = useState('');
  const [imc, setImc] = useState(null);
  const [imcCategory, setImcCategory] = useState('');

  const calcularImc = () => {
    if (!altura || !peso) return;
    const imcCalculado = (peso / (altura * altura)).toFixed(2);
    setImc(imcCalculado);

    if (imcCalculado < 18.5) {
      setImcCategory('Abaixo do peso');
    } else if (imcCalculado >= 18.5 && imcCalculado < 25) {
      setImcCategory('Peso normal');
    } else if (imcCalculado >= 25 && imcCalculado < 30) {
      setImcCategory('Sobrepeso');
    } else if (imcCalculado >= 30 && imcCalculado < 35) {
      setImcCategory('Obesidade grau I');
    } else if (imcCalculado >= 35 && imcCalculado < 40) {
      setImcCategory('Obesidade grau II');
    } else {
      setImcCategory('Obesidade grau III');
    }
  };

  const limparCampos = () => {
    setAltura('');
    setPeso('');
    setImc(null);
    setImcCategory('');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>BIOFITNESS</Text>
      <TextInput
        style={styles.input}
        keyboardType="numeric"
        placeholder="Altura (Ex: 1.70m)"
        onChangeText={setAltura}
        value={altura}
      />
      <TextInput
        style={styles.input}
        keyboardType="numeric"
        placeholder="Peso (Ex: 80kg)"
        onChangeText={setPeso}
        value={peso}
      />
      <Button title="CALCULAR IMC" onPress={calcularImc} style={styles.button} />
      <Button title="NOVO CÁLCULO" onPress={limparCampos} style={styles.button} />
      {imc && (
        <View>
          <Text style={styles.result}>O seu IMC: {imc} Kg/m2</Text>
          <Text style={styles.result}>Classificação: {imcCategory}</Text>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 35,
    fontWeight: 'bold',
    color: 'yellow',
    marginBottom: 120,
  },
  input: {
    backgroundColor: 'white',
    width: 200,
    padding: 10,
    marginBottom: 20,
  },
  button: {
    backgroundColor: 'yellow',
    width: 350,
    height: "auto",
    borderRadius: 80,
    padding: 30,
    borderRadius: 40,

  },
  result: {
    fontSize: 20,
    color: 'white',
    marginTop: 20,
    alignItems: 'center',
  },
});
