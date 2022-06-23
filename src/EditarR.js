import React from 'react';
import{View, Text, TextInput, TouchableOpacity} from 'react-native';

const EditarR = ({navigation}) =>{
    return(
        <View style={{backgroundColor:'#ced4da'}}>
            <Text style={{fontStyle:'#ffffff'}}>EDITAR REGISTRO</Text>

                <View>
                    {
                        //Inputs para editar Registro.
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

export default EditarR;