import React from 'react';
import {NavigationContainer} from '@react-navigation/native'
import {createNativeStackNavigator} from '@react-navigation/native-stack'
import {StatusBar, View} from 'react-native';



import Cadastro from '../src/Cadastro'
import Login from '../src/Login'
import Lembretes from '../src/Lembretes'
import Inicio from '../src/Inicio'
import EditarL from '../src/EditarL'
import EditarR from '../src/EditarR'
import EntradaSaidas from '../src/EntradaSaidas'
import NovoL from '../src/NovoL'
import NovoR from '../src/NovoR'
import Perfil from '../src/Perfil'
import Senha from '../src/Senha'

const Stack = createNativeStackNavigator()

const Rotas = () => {
  return (
    <NavigationContainer>
        <Stack.Navigator initialRouteName="Rotas">
          <Stack.Screen name= "Login" component={Login}/>
          <Stack.Screen name= "Cadastro" component={Cadastro}/>
          <Stack.Screen name="EditarL" component={EditarL}/>
          <Stack.Screen name="EditarR" component={EditarR}/>
          <Stack.Screen name="EntradaSaida" component={EntradaSaidas}/>
          <Stack.Screen name="Inicio" component={Inicio}/>
          <Stack.Screen name="Lembretes" component={Lembretes}/>
          <Stack.Screen name="NovoL" component={NovoL}/>
          <Stack.Screen name="NovoR" component={NovoR}/>
          <Stack.Screen name="Perfil" component={Perfil}/>
          <Stack.Screen name="Senha" component={Senha}/>
        </Stack.Navigator>
    </NavigationContainer>
 
  )
};


export default Rotas;