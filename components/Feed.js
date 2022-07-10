import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
import ItemCard from './ItemCard';
import { FlatList } from 'react-native-gesture-handler';
import firebase from 'firebase';

export default class Feed extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
    };
  }

  componentDidMount() {
    this.fetchGroceries();
  }

  fetchGroceries = () => {
    firebase
      .database()
      .ref('/Items/')
      .on('value', (snapshot) => {
        let stuffs = [];
        if (snapshot.val()) {
          Object.keys(snapshot.val()).forEach(function (key) {
            stuffs.push({
              key: key,
              value: snapshot.val()[key],
            });
          });
        }
        this.setState({ items: stuffs });
      });
  };

  renderItem = ({ item: item }) => {
    return <ItemCard item={item} />;
  };

  render() {
    return (
      <View style={styles.container}>
        {!this.state.items[0] ? (
          <View style={styles.noItems}>
            <Text style={styles.noItemsText}>No Items Added</Text>
          </View>
        ) : (
          <View style={styles.cardContainer}>
            <FlatList
              keyExtractor={(item, index) => index.toString()}
              data={this.state.items}
              renderItem={this.renderItem}
            />
          </View>
        )}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 0.9,
    width: RFValue(400),
    alignItems: 'center',
  },
  cardContainer: {
    flex: 1,
  },
  noItems: {
    flex: 0.85,
    justifyContent: 'center',
    alignItems: 'center',
  },
  noItemsText: {
    color: 'white',
    fontSize: RFValue(40),
  },
});
