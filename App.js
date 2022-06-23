import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Rotas from './navegacao/rotas';



const Stack = createNativeStackNavigator()

const App = () => {
  return (
    <Rotas/> 

  )
};


export default App;