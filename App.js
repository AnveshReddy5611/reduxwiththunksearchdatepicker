import { DateTimePickerAndroid } from '@react-native-community/datetimepicker';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Provider } from 'react-redux';
import DatePickerTest from './DatePickerTest';
import DateTimepicker1 from './DateTimepicker1';
import Home from './searchBar1.js/Home';
import SearchBar from './searchBar1.js/SearchBar';
import { store } from './store';
export default function App() {
  return (
    <View style={styles.container}>
     {/* <Provider store={store}>
    <Home />


  </Provider> */}
  {/* <DatePickerTest/> */}
  {/* <DateTimepicker1/> */}
  {/* <SearchBar/> */}<Home/>
      </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

// import React from 'react';
// import ReactDOM from 'react-dom';
// import { Provider } from 'react-redux';
// import Home from './Home';
// import { store } from './store';



// ReactDOM.render(
//   <Provider store={store}>
//     <Home />
//   </Provider>,
//   document.getElementById('root')
// );
