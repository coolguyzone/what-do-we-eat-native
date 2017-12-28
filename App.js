import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';

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


for (var i = 0; i < foodStopLimit; i++) {
  var randoFoodIndex = Math.floor(Math.random() * foods.length);

  category = foods[randoFoodIndex].category;
  console.log(category);

  // if($.inArray( category, categories )>=0){
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

class Option extends Component {
  render() {
    const {backgroundColor, txt, display} = this.props
    return (
      <View style={[styles.option, {backgroundColor}]}>
        <Text style={styles.optionText}>{txt}</Text>
      </View>
    )
  }
}



export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Option
        backgroundColor={randoColors[0]}
        txt={`${randoFoods[0].name} ${randoFoods[0].emoji}`}
        />
        <Option
        backgroundColor={randoColors[1]}
        txt={`${randoFoods[1].name} ${randoFoods[1].emoji}`} style={{height:0,width:0,}}
        />
        <Option
        backgroundColor={randoColors[2]}
        txt={`${randoFoods[2].name} ${randoFoods[2].emoji}`}
        />
        <Option
        backgroundColor={randoColors[3]}
        txt={`${randoFoods[3].name} ${randoFoods[3].emoji}`}
        />
        <Option
        backgroundColor={randoColors[4]}
        txt={`${randoFoods[4].name} ${randoFoods[4].emoji}`}
        />
        <Option
        backgroundColor={randoColors[5]}
        txt={`${randoFoods[5].name} ${randoFoods[5].emoji}`}
        />
        <Option
        backgroundColor={randoColors[6]}
        txt={`${randoFoods[6].name} ${randoFoods[6].emoji}`}
        />
        <Text style={{color:'white',}}>
        {categories[3]}
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
