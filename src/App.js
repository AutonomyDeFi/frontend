import './App.css';
import MainScreen from './MainScreen';
import CustomToolScreen from './CustomToolScreen';
import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import RunModelScreen from './RunModelScreen';


const App = () => {

  return (
        <MainScreen/>

  );
}

export default App;
