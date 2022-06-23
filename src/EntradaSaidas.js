import React from 'react';
import{View, Text, TextInput, TouchableOpacity} from 'react-native';

const EntradaSaida = ({navigation}) =>{
    return(
        <View style={{backgroundColor:'#ced4da'}}>
            <Text style={{fontStyle:'#ffffff'}}>ENTRADAS E SAÍDAS</Text>

                <View>
                    {
                        //completar com as infos a serem visualizadas
                    }
                </View>

            <View style={{backgroundColor:'#15aabf'}}>
                <TouchableOpacity type="submit" onPress={() => {
                    navigation.navigate("NovoCadastro");
                }}>
                    <Text>Imagem</Text>
                </TouchableOpacity>
            </View>

        </View>

    )

}

export default EntradaSaida;