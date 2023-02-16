import React, {Component} from "react";
import { 
  Text,
  View, 
  StyleSheet,
  TextInput,
  StatusBar } from "react-native";

class App extends Component{

  constructor(props){
    super(props);
    this.state = {
      nome: '',
    };

    this.pegaNome = this.pegaNome.bind(this);
  }

  pegaNome(texto){
    if(texto.legth > 0){
      this.setState({nome: ''})
    }else{
      this.setState({nome: 'Bem vindo: ' + texto})
    }

  }

  render(){
    return(
      <View style={styles.container}>
        <Text>Informe seu nome</Text>
        <TextInput
        style={styles.input}
        onChangeText={this.pegaNome}
        />
        <Text>{this.state.nome}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#ABB2B9'
  },
  input:{
    height: 70,
    width: '100%',
    borderWidth: 2,
    borderColor: '#FDFEFE',
    margin: 10,
    fontSize: 25,
    padding: 20,
    borderRadius: 30,
    textAlign: 'center' ,
  }

});

export default App;