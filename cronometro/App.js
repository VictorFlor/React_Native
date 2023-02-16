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
      img: require('./src/cronometro.png'),
      time: 0,
      txtOn: 'Iniciar',
      lastTime: null,
    };

    this.timeON = null;


    this.cronometroON = this.cronometroON.bind(this);
    this.cronometroReset = this.cronometroReset.bind(this);
  }

  cronometroON(){
    
    if(this.timeON != null){
      clearInterval(this.timeON);
      this.timeON = null;
      this.setState({txtOn: 'Continuar'});
    }else{

        this.timeON = setInterval( () => {
          this.setState({time: this.state.time + 0.1})
        },100);
        this.setState({txtOn: 'Parar',});
    } 
  }

  cronometroReset(){
    if(this.timeON != null){
      clearInterval(this.timeON);
      this.timeON = null;
    }
    this.setState({
      txtOn: 'Iniciar',
      lastTime: this.state.time,
      time: 0,
    })

  }



  render(){
    return(
      <View style={styles.container}>

        <Image style={styles.img} source={(this.state.img)}></Image>
        <Text style={styles.txtcronometro}> 
          {this.state.minutos} {this.state.time.toFixed(1)} 
        </Text>

        <View style={styles.btnArea}>

            <TouchableOpacity style={styles.btn} onPress={this.cronometroON}>
              <Text style={styles.btnTxt}>{this.state.txtOn}</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.btn} onPress={this.cronometroReset}>
              <Text style={styles.btnTxt}>Reiniciar</Text>
            </TouchableOpacity>

        </View>

        <View style={styles.btnArea}>
          <Text style={styles.txtLastTime}> 
            {this.state.lastTime > 0 ? 'Ultimo tempo: ' + this.state.lastTime.toFixed(1) : ''}
          </Text>
        </View>

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
  img: {
    height: 250,
    width: 200,
  },
  txtcronometro: {
    color: '#fff',
    fontSize: 50,
    marginTop: -140,
  },
  btnArea:{
    flexDirection: 'row',
    marginTop: 90,
    height: 40,
  },
  btn:{
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 3,
    borderColor: '#fff',
    borderRadius: 30,
    backgroundColor: '#fff',
  },
  btnTxt: {
    fontSize: 20,
    textAlign: 'center'
  },
  txtLastTime:{
    color: '#fff',
    fontSize: 20,
    fontStyle: "italic",
  },
});

export default App;