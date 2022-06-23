import React from 'react';
import{View, Text, TextInput, TouchableOpacity} from 'react-native';

const Lembretes = ({navigation}) =>{
    return(
        <View style={{backgroundColor:'#ced4da'}}>
            <Text style={{fontStyle:'#ffffff'}}>LEMBRETES</Text>

            <View>
                {
                    //visualização dos lembretes
                }
            </View>

            <View style={{backgroundColor:'#15aabf'}}>
                <TouchableOpacity type="submit" onPress={() => {
                    navigation.navigate("NovoL");
                }}>
                    <Text>Imagem</Text>
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

export default Lembretes;