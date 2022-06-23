import React from 'react';
import{View, Text, TextInput, TouchableOpacity} from 'react-native';

const Senha = ({navigation}) =>{
    return(
        <View style={{backgroundColor:'#ced4da'}}>
            <Text style={{fontStyle:'#ffffff'}}>REDEFINIR SENHA</Text>
            
            <View>
                <TextInput type='text' placeholder='Usuário'/>

                <TextInput type='text' placeholder='Nova Senha'/>

                <TextInput type='text' placeholder='Confirmar Senha'/>
            </View>

            <View style={{backgroundColor:'#15aabf'}}>
                <TouchableOpacity type="submit" onPress={() => {
                    navigation.navigate("Login");
                }}>
                    <Text>SALVAR</Text>
                </TouchableOpacity>
            </View>

        </View>
    )



}

export default Senha;