import React from 'react';
import{View, Text, TextInput, TouchableOpacity} from 'react-native';

const NovoR = ({navigation}) =>{
    return(
        <View style={{backgroundColor:'#ced4da'}}>
            <Text style={{fontStyle:'#ffffff'}}>NOVO REGISTRO</Text>

                <View>
                    {
                        //Inputs para cadastrar novo Registro.
                    }
                </View>

            <View style={{backgroundColor:'#15aabf'}}>
                <TouchableOpacity type="submit" onPress={() => {
                    navigation.navigate("EntradaSaida");
                }}>
                    <Text>SALVAR</Text>
                </TouchableOpacity>
            </View>

        </View>
    )
}

export default NovoR;