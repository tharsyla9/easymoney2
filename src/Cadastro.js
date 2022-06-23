import React, {useState, useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigation} from '@react-navigation/stack';
import{View, Text, TouchableOpacity, TextInput, StyleSheet} from 'react-native';
import axios from './axios';

const Cadastro = ({navigation}) =>{

    const [values, setValues] = useState();
    const [listaCadastro, setListaCadatro] = useState([]);
    const [nome, setNome] = useState();
    const [senha, setSenha] = useState();
    const [email, setEmail] = useState(); 
    const [usuario, setUsuario] = useState();

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



    const handleCadastrar = () => {
        axios.post("http://localhost:3000", {
            nome: values.nome,
            usuario: values.usuario,
            email: values.email,
            senha: values.senha
        }).then(() => {
            axios.post("http://localhost:3000/lista", {
                nome: values.nome,
                usuario: values.usuario,
                email: values.email,
                senha: values.senha
            }).then((response) => {
                setListaCadatro([listaCadastro, {
                    id: response.data[0].id,
                    nome: values.nome,
                    usuario: values.usuario,
                    email: values.usuario,
                    senha: values.senha
                }])
            })
        })
    }

    useEffect(() => {
        axios.get("http://localhost:3000/getLista").then((response) => {
            setListaCadatro(response.data);
        })
    }, []);

    return(
        <View style={styles.container}>
            <Text style={styles.title}>Cadastro</Text>

            <View>
                <TextInput value={nome} onChangeText={setNome} placeholder='NOME'/>
                <TextInput value={usuario} onChangeText={setUsuario} placeholder='USUARIO'/>
                <TextInput value={email} onChangeText={setEmail} placeholder='E-MAIL'/>
                <TextInput value={senha} onChangeText={setSenha} placeholder='SENHA'/> 
                
            </View>

            <View>
                <TouchableOpacity type="submit" onPress={() => {
                    handleCadastrar()
                    // axios.post("http://localhost:3000/createUser", {
                    //     nome: nome,
                    //     usuario: usuario,
                    //     email: email,
                    //     senha: senha
                    // }).then(response => {
                    //     console.log(response.data);
                    // }).catch(error => {
                    //     console.log(error);
                    // })
                    navigation.navigate("Login");
                }}>
                    <Text>SALVAR</Text>
                </TouchableOpacity>
            </View>

        </View>

    )



}

export default Cadastro;