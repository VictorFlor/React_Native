import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function Header(){
    return(
        <Text style={estilos.txt1}>MENU</Text>
    )
}

const estilos = StyleSheet.create({
    txt1:{
        minWidth: '100%',
        height: '20%',
        marginTop: 0,
        backgroundColor: '#212F3D',
        color: '#f27',
        fontSize: 20,
    }
});