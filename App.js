import React, { Component } from 'react';
import { StyleSheet, Text, View, FlatList, TouchableOpacity } from 'react-native';

import foods from './foods';
import playerConditions from './playerconditions';
import colors from './colors';

let randoFoods = [];
let randoColors = [];
let categories = [];
let foodStopLimit = foods.length;
let colorStopLimit = colors.length;
// var shuffle = document.querySelector(".shuffle");
let shuffleCount = 1;



const foodsList = []

for (var i = 0; i < foodStopLimit; i++) {
  var randoFoodIndex = Math.floor(Math.random() * foods.length);

  category = foods[randoFoodIndex].category;
  console.log(category);
  if (categories.indexOf(category) >= 0) {
     // code for true condition
} else{
  categories.push(category);
  randoFoods.push(foods[randoFoodIndex]);
  var removedFoods = foods.splice(randoFoodIndex, 1)[0];
}
     // code for false condition
}

for (var i = 0; i < colorStopLimit; i++) {
  var randoColorIndex = Math.floor(Math.random() * colors.length);
  randoColors.push(colors[randoColorIndex]);
  var removedColors = colors.splice(randoColorIndex, 1)[0];
}

for (var i = 0; i < 7; i++) {
  foodsList.push({id: i, name: randoFoods[i].name, emoji: randoFoods[i].emoji, backgroundColor: randoColors[i]})
}

const extractKey = ({id}) => id;




export default class App extends Component {

  removeFood(target) {
    let x = this.state.foodsArray.indexOf(target.item);
    console.log(this.state.foodsArray.indexOf(target.item));
    this.state.foodsArray.splice(x, 1);
    this.setState({
      foodsArray: this.state.foodsArray
    });
  }

  constructor(props) {
    super(props);
    this.state = {
      foodsArray: foodsList
    }
  }

  renderItem = ({item}) => {
    const {backgroundColor} = item
    return (
      <TouchableOpacity
      style={[styles.option, {backgroundColor}]}
      onPress={() => {
        this.removeFood({item});
        this.forceUpdate();
      }}
      >
        <Text style={styles.optionText}>{item.name} {item.emoji}</Text>
      </TouchableOpacity>
    )
  }

  render() {
    return (
      <View style={styles.container}>
        <FlatList
        data={this.state.foodsArray}
        extraData={this.state}
        renderItem={this.renderItem}
        keyExtractor={extractKey}
        />
        <Text style={{color:'white',}}>
        fawwwk
        </Text>
      </View>

    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    alignItems: 'center',
  },
  option: {
    height: 50,
    width: 300,
    marginTop: 20,
    borderRadius: 20,
  },
  optionText: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    lineHeight: 50,
    color: 'white',
  },
});
