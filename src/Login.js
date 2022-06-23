import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigation} from '@react-navigation/stack';
import{View, Text, text, number, TouchableOpacity, TextInput} from 'react-native';
import axios from './axios';

const Login = ({navigation}) =>{
    return(
        <View>
            <Text>Cadastro</Text>

            <View>

                <TextInput placeholder='USUARIO' value={text}/>

                <TextInput placeholder='SENHA' value={number}/>
                
            </View>

            <View>
                <TouchableOpacity type="submit" onPress={() => {
                    navigation.navigate("Senha");
                }}>
                    <Text>Esqueci minha senha.</Text>
                </TouchableOpacity>
            </View>

            <View>
                <TouchableOpacity type="submit" onPress={() => {
                    navigation.navigate("Inicio");
                }}>
                    <Text>ENTRAR</Text>
                </TouchableOpacity>
            </View>
            <View>
                <TouchableOpacity type="submit" onPress={() => {
                    //  axios.post("API", { 
                    //     usuario: usuario,
                    //     senha: senha
                    // }).then(response => {
                    //     console.log(response.data);
                    // }).catch(error => {
                    //     console.log(error);
                    // })
                    navigation.navigate("Cadastro");
                }}>
                    <Text>CADASTRAR</Text>
                </TouchableOpacity>
            </View>

        </View>

    )

    const styles = StyleSheet.create({
        container:{
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center',
            backgrounColor: '#121212'
        },
        title:{
            color: '#7fffd4',
            alignItems: 'center',
            fontSize: 28
        },
        campos:{
    
        }
    })

}

export default Login;