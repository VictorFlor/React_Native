import React, {Component} from "react";
import { 
  Text,
  View, 
  StyleSheet,
  TextInput,
  StatusBar,
  Image,
  TouchableOpacity } from "react-native";

class App extends Component{

  constructor(props){
    super(props);
    this.state = {
      frase: '',
      botao: 'Aperte para quebrar o biscoito',
      img: require('./src/biscoito.png'),
    };

    this.frases = [
      'frase 1',
      'frase 2',
      'frase 3',
      'frase 4',
    ];

    this.quebrabiscoito = this.quebrabiscoito.bind(this);
  }

  quebrabiscoito(){
    let randomNumber = Math.floor(Math.random() * this.frases.length);
      this.setState({
        frase: '"' + this.frases[randomNumber] + '"',
        img: require('./src/biscoitoaberto.png'),
        botao: 'Aperte para uma nova messagem',
      })
    
  }

  render(){
    return(
      <View style={styles.container}>
        <StatusBar/>
        <Image
          style={styles.img}
          source={this.state.img}
        />
        <Text style={styles.texto}> {this.state.frase} </Text>

         <TouchableOpacity style={styles.botao} onPress={this.quebrabiscoito}>
          <View>
            <Text style={styles.texto}> {this.state.botao} </Text>
          </View>
        </TouchableOpacity>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#212F3D'
  },
  img:{
    height:250,
    width: 250,
    marginBottom: 20,
  },
  texto:{
    color: 'orange',
    fontSize: 20,
    textAlign: 'center',
  },
  textobtn:{
    color: 'orange',
    fontSize: 20,
    textAlign: 'center',
  },
  botao:{
    borderWidth:2,
    borderColor: 'orange',
    borderRadius: 30,
    height: 30,
    width: '60%',
    marginTop: 20,
  },

});

export default App;