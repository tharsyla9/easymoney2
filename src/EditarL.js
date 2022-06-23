import React from 'react';
import{View, Text, TextInput, TouchableOpacity} from 'react-native';


const EditarL = ({navigation}) =>{
    return(
        <View>
            <Text>EDITAR LEMBRETE</Text>

                <View>
                    {
                        //Inputs para editar lembrete.
                    }
                </View>

            <View>
                <TouchableOpacity type="submit" onPress={() => {
                    navigation.navigate("Lembretes");
                }}>
                    <Text>SALVAR</Text>
                </TouchableOpacity>
            </View>

        </View>
    )
}

export default EditarL;