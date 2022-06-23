import React from 'react';
import{View, Text, TextInput, TouchableOpacity} from 'react-native';

const NovoL = ({navigation}) =>{
    return(
        <View style={{backgroundColor:'#ced4da'}}>
            <Text style={{fontStyle:'#ffffff'}}>NOVO LEMBRETE</Text>

                <View>
                    {
                        //Inputs para cadastrar novo lembrete.
                    }
                </View>

            <View style={{backgroundColor:'#15aabf'}}>
                <TouchableOpacity type="submit" onPress={() => {
                    navigation.navigate("Lembretes");
                }}>
                    <Text>SALVAR</Text>
                </TouchableOpacity>
            </View>

        </View>
    )
}

export default NovoL;