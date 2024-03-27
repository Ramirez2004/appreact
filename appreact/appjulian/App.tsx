import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { HomeScreen } from './src/views/home/Home';
import { RegisterScreen } from './src/views/register/Register'


export type RootStackParamList ={
  HomeScreen: undefined,
  RegisterScreen: undefined,
}

const Stack = createNativeStackNavigator<RootStackParamList>();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{
        headerShown:true
      }}>

        <Stack.Screen
          name="HomeScreen"
          component={HomeScreen}
          options={{title: '                       Inicio - Ferrari'}}
        />

        <Stack.Screen
        name="RegisterScreen"
        component={RegisterScreen}
        options={{
          headerShown: true,
          title: 'Página de Registro'
        }}   />

      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;