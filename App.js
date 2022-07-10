import React from 'react';
import {
  Text,
  View,
  StyleSheet,
  Image,
  TextInput,
  TouchableOpacity,
  SafeAreaView,
  Switch,
} from 'react-native';
import AppHeader from './components/Header';
import Footer from './components/Footer';
import Feed from './components/Feed'
import { RFValue } from 'react-native-responsive-fontsize';

import firebase from 'firebase';
import { firebaseConfig } from './config';

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
} else {
  firebase.app();
}

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <SafeAreaView style={styles.headerContainer}>
          <AppHeader />
        </SafeAreaView>
        <View style={styles.cContainer}>
          <Feed />
        </View>
        <View style={styles.footerConatiner}>
          <Footer/>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: RFValue(1),
    backgroundColor: '#363636',
    alignItems:'center'
  },
  headerContainer: {
    flex: RFValue(0.1),
    width:'100%'
  },
  footerConatiner: {
    flex: RFValue(0.1),
    alignItems: 'center',
  },
  cContainer: {
    flex: RFValue(0.5),
    alignItems: 'center',
    marginTop:40,
    width:RFValue(400),
   //backgroundColor:'white',
  },
});
