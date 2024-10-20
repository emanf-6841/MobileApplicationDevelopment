import React from 'react';
import { StatusBar, StyleSheet, View } from 'react-native'; 
import Searchfield from './node_modules/component/Searchfield';
import DoctorBox2 from './node_modules/component/DoctorBox2';
import DoctorBox4 from './node_modules/component/DoctorBox4';
const App = () => {
  return ( 
    <View style={styles.container}> 
      <Searchfield/>
      <DoctorBox2/>
      <DoctorBox4/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',  // You can adjust to 'row' if needed
    justifyContent: 'flex-start',
    alignItems: 'center',  // Center the items vertically
    backgroundColor: '#F0F0FF',
  },
});

export default App;
