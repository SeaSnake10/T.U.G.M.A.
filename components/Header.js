import * as React from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';
import { Header } from 'react-native-elements';
import { RFValue } from "react-native-responsive-fontsize";

export default class AppHeader extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Image source={require("../assets/logo.png")} style={styles.logo}/>
        <Text style={styles.text}> 
          T.U.G.M.A. 
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: RFValue(0.1),
    backgroundColor:"#00564d",
    justifyContent:'center',
    flexDirection:'row',
  },
  logo:{
    width:RFValue(50),
    height:RFValue(50),
    marginTop:RFValue(5),
    marginRight:RFValue(15)
  },
  text:{
    fontSize:RFValue(40),
    color:'#969696',
    marginTop:RFValue(10),
  },
});
