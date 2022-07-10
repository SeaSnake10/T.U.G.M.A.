import React, { Component } from 'react';
import { View, Text, StyleSheet, Switch } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
import firebase from 'firebase';

export default class ItemCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      item_data: this.props.item.value,
      inStock: true,
      isEnabled: false,
      item_id: this.props.item.key,
    };
  }

  toggleSwitch() {
    const previous_state = this.state.isEnabled;
    const stock = !this.state.isEnabled ? 'out of stock' : 'in stock';
    var stocks={}
    stocks[
      "/Items/" + this.state.item_id + "/status"
    ] = stock;
    firebase
      .database()
      .ref()
      .update(stocks)
    this.setState({ isEnabled: !previous_state, inStock: previous_state });
  }

  render() {
    let items = this.state.item_data;
    return (
      <View style={styles.cardContainer}>
        <Text style={styles.itemTitleText}> {items.item} </Text>
        <View style={styles.itemSwicthView}>
          <Switch
            style={styles.itemSwitch}
            trackColor={{
              false: '#66BB6A',
              true: '#66BB6A',
            }}
            thumbColor={'#f4f3f4'}
            ios_backgroundColor="#3e3e3e"
            onValueChange={() => this.toggleSwitch()}
            value={this.state.isEnabled}
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  cardContainer: {
    flexDirection: 'row',
    margin: RFValue(13),
    backgroundColor: '#00564d',
    borderRadius: RFValue(20),
    width: RFValue(200),
    height: RFValue(35),
  },
  itemTitleText: {
    fontSize: RFValue(25),
    color: '#969696',
    marginLeft: RFValue(10),
  },
  itemSwitch: {
    marginTop: RFValue(5),
    transform: [{ scaleX: 1 }, { scaleY: 1 }],
  },
  itemSwicthView: {
    marginLeft: RFValue(10),
  },
});
