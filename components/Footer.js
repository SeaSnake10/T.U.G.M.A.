import * as React from 'react';
import {
  Text,
  View,
  StyleSheet,
  Image,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
import firebase from 'firebase';

export default class Footer extends React.Component {
  constructor() {
    super();
    this.state = {
      itemName: '',
      inStock: 'in stock',
    };
  }

  async randomfunction (){
    this.addItems();
    this.loadItems();
  }

  async addItems() {
    let itemData = {
      item: this.state.itemName,
      status: this.state.inStock
    };
    await firebase.database().ref("/Items/").push(itemData);
    
  }

  async loadItems(){
    firebase
      .database()
      .ref('/Items/')
      .on('value', (data) => {
        let itemData = [];
         this.setState({ item: itemData });
      });
  }

  render() {
    return (
      <View style={styles.footerContainer}>
        <TextInput
          style={styles.textinputstyle}
          onChangeText={(item) => {
            this.setState({ itemName:item });
          }}
        />

        <TouchableOpacity
          style={styles.addButton}
          onPress={() => this.randomfunction()}>
          <Text style={styles.buttonText}>+</Text>
        </TouchableOpacity>
      </View>
    );
  }
}



const styles = StyleSheet.create({
  footerContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    backgroundColor: '#00564d',
    marginBottom: RFValue(10),

    borderRadius: 10,
    width: RFValue(300),
  },
  textinputstyle: {
    color: 'white',
    width: RFValue(200),
    height: RFValue(35),
    borderWidth: RFValue(2),
    marginTop: RFValue(10),
    fontSize: RFValue(20),
    borderColor: '#282828',
  },
  addButton: {
    backgroundColor: '#66BB6A',
    width: RFValue(44),
    height: RFValue(44),
    borderWidth: 1.5,
    marginLeft: RFValue(20),
    margin: RFValue(5),
    borderRadius: RFValue(30),
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: '#282828',
  },
  buttonText: {
    fontSize: RFValue(35),
    marginBottom: RFValue(5),
    color: '#363636',
  },
});
