import { StatusBar } from 'expo-status-bar';
import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';

import Button from './components/Button'
import Display from './components/Display'

export default class App extends Component {

  //Manipula o valor do display
  state = {
    displayValue: '100'
  }

  //Função para adicionar valores e digitos ao display, tbm limpa
  addDigito = n => {
    this.setState({ displayValue: n })
  }
  clearMemory = () => {
    this.setState({ displayValue: '0' })
  }
  setOperation = operation =>{
    this.setState({ displayValue: operation })
  }

  render() {
    return (
      <View style={styles.container}>
        <Display value={this.state.displayValue}/>
        <View style={styles.buttons}>
          <Button nomeBtn='AC' triple onClick={this.clearMemory}/>
          <Button nomeBtn='/'  operation onClick={this.setOperation}/>
          
          <Button nomeBtn='7' onClick={this.addDigito}/>
          <Button nomeBtn='8' onClick={this.addDigito}/>
          <Button nomeBtn='9' onClick={this.addDigito}/>

          <Button nomeBtn='*' operation onClick={this.setOperation}/>
          
          <Button nomeBtn='4' onClick={this.addDigito}/>
          <Button nomeBtn='5' onClick={this.addDigito}/>
          <Button nomeBtn='6' onClick={this.addDigito}/>
          
          <Button nomeBtn='-' operation onClick={this.setOperation}/>

          <Button nomeBtn='1' onClick={this.addDigito}/>
          <Button nomeBtn='2' onClick={this.addDigito}/>
          <Button nomeBtn='3' onClick={this.addDigito}/>
          
          <Button nomeBtn='+' operation onClick={this.setOperation}/>
          
          <Button nomeBtn='0' onClick={this.addDigito}/>
          
          <Button nomeBtn='.' double onClick={this.setOperation}/>
          <Button nomeBtn='=' operation />
        </View>  
      </View>
    );
  }
}



const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  buttons: {
    flexDirection: 'row',
    flexWrap: 'wrap'
  }
});

/**
 *  Componente Botão passará um nome, possivelmente uma
 *  personalização diferente de css que definirá seu tamanho,
 *  e uma função para manipular o o estado do valor que será
 *  exibido no componente Display.  
 * 
 *  Componente Display apenas receberá o valor atualizado do
 *  estado que é manipulado pelas funções dos botoes
 */
