import React from 'react';
import{View, Text, TouchableOpacity} from 'react-native';


const Inicio = ({navigation}) =>{
    return (
        <View style={{backgroundColor:'#ced4da'}}>
            <Text style={{fontStyle:'#ffffff'}}>INICIO</Text>
            <View style={{backgroundColor:'#15aabf'}}>
                <TouchableOpacity type="submit" onPress={() => {
                    navigation.navigate("EntradaSaidas");
                }}>
                    <Text>Entradas e Saidas</Text>
                </TouchableOpacity>
            </View>
            <View style={{backgroundColor:'#15aabf'}}>
                <TouchableOpacity type="submit" onPress={() => {
                    navigation.navigate('Lembretes');
                }}>
                    <Text>Lembretes</Text>
                </TouchableOpacity>
            </View>
            <Text style={{fontStyle:'#ffffff'}}>PRÓXIMOS VENCIMENTOS</Text>

                <View>

                    {//tabela apresentando as informações dos lembretes
                    }
                    
                </View>


            <View style={{backgroundColor:'#15aabf'}}>
                <TouchableOpacity type="submit" onPress={() => {
                    navigation.navigate('Perfil');
                }}>
                    <Text>Perfil</Text>
                </TouchableOpacity>
            </View>
            <View style={{backgroundColor:'#15aabf'}}>
                <TouchableOpacity type="submit" onPress={() => {
                    navigation.navigate('Login');
                }}>
                    <Text>Sair</Text>
                </TouchableOpacity>
            </View>
        </View>
    )

}

export default Inicio;