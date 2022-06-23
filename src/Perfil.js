import React from 'react';
import{View, Text, TouchableOpacity} from 'react-native';

const Perfil = ({navigation}) =>{
    return(
        <View style={{backgroundColor:'#ced4da'}}>
            <Text style={{fontStyle:'#ffffff'}}>PERFIL</Text>

            <View>
                {
                    //Visualizar as informações de perfil.
                }
            </View>

            <View style={{backgroundColor:'#15aabf'}}>
                <TouchableOpacity type="submit" onPress={() => {
                    navigation.navigate("Cadastro");
                }}>
                    <Text>EDITAR</Text>
                </TouchableOpacity>
            </View>

            <View style={{backgroundColor:'#15aabf'}}>
                <TouchableOpacity type="submit" onPress={() => {
                    navigation.navigate("Inicio");
                }}>
                    <Text>VOLTAR</Text>
                </TouchableOpacity>
            </View>

        </View>

    )
}

export default Perfil;