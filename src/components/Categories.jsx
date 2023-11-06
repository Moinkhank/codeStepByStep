import React from 'react'
import { View,Text, StatusBar,StyleSheet, ScrollView } from 'react-native'
import {colors} from "../globals/style"
import BurgerIcon from "react-native-vector-icons/FontAwesome5"
import PizzaIcon from "react-native-vector-icons/FontAwesome6"
import FastFoodIcon from "react-native-vector-icons/Ionicons"
import IceCreamIcon from "react-native-vector-icons/MaterialCommunityIcons"
const Categories = () => {
  return (
    <View style={styles.container}>
        <Text>OFfer slider</Text>

     <ScrollView   horizontal showsHorizontalScrollIndicator={false} >
      {/* Starts here  */}
      <View style={styles.box}>
        <BurgerIcon  name="hamburger"  size={24} color="black" 
          style={styles.icon}
        />
          <Text style={styles.mytext}>Burger</Text>
      </View>
      {/* ends here */}
       {/* Starts here  */}
       <View style={styles.box}>
        <PizzaIcon  name="pizza-slice"  size={24} color="black" 
          style={styles.icon}
        />
          <Text style={styles.mytext}>Pizza</Text>
      </View>
      {/* ends here */}
       {/* Starts here  */}
       <View style={styles.box}>
        <FastFoodIcon  name="fast-food-outline"  size={24} color="black" 
          style={styles.icon}
        />
          <Text style={styles.mytext}>Fast Food</Text>
      </View>
      {/* ends here */}
       {/* Starts here  */}
       <View style={styles.box}>
        <IceCreamIcon  name="ice-cream"  size={24} color="black" 
          style={styles.icon}
        />
          <Text style={styles.mytext}>Ice Cream</Text>
      </View>
      {/* ends here */}
      </ScrollView>    
    </View>
  )
}

export default Categories

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.col1,
    width: '100%',
    // height: 100,
    // alignItems: 'center',
    elevation: 10,
    borderRadius: 10,
},
head: {
  color: colors.text1,
  fontSize: 25,
  fontWeight: '300',
  margin: 10,
  alignSelf: 'center',
  paddingBottom: 5,
  borderBottomColor: colors.text1,
  borderBottomWidth: 1,
},
box: {
  backgroundColor: colors.col1,
  elevation: 20,
  margin: 10,
  padding: 10,
  borderRadius: 10,
  alignItems: 'center',
  justifyContent: 'center',
  flexDirection: 'row',
},
myicon: {
  marginRight: 10,
  color: colors.text3,
},
mytext: {
  color: colors.text3,
}
})
