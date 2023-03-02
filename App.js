import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Screenwrapper from './components/commonfolder/screenwrapper';
import AppNavigator from './navigation/app-navigator';
import { store } from './redux/store';
import { Provider } from 'react-redux';
import FlatTest from './flattest';

export default function App() {
  return (
    <Provider store={store}>
    <NavigationContainer>
    <Screenwrapper>
      <AppNavigator/>   
    </Screenwrapper>
    </NavigationContainer>
    </Provider>
    
  );
}

const styles = StyleSheet.create({
  

});
