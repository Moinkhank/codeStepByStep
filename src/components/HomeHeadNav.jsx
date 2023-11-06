import React from 'react'
import { View,Text,StyleSheet, TouchableOpacity } from 'react-native'
import MenuIcons from "react-native-vector-icons/MaterialIcons"
import FoodIcons from "react-native-vector-icons/MaterialCommunityIcons"
import UserCircleIcons from "react-native-vector-icons/FontAwesome5"
import { colors } from '../globals/style'
const HomeHeadNav = ({navigation}) => {
  return (
    <View style={styles.container}>
      <MenuIcons  name ="menu" color="black" size={28} style={styles.myicon} />
      <View style={styles.containerin}>
        <Text style={styles.mytext}>Foodie</Text>
        <FoodIcons name="food-outline" color="black" size={28} style={styles.myicon}  />
      </View>
     <TouchableOpacity onPress={()=>navigation.navigate("user_profile")}>
     <UserCircleIcons name="user-circle" size={26} color="black" style={styles.myicon} />
     </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
      container:{
        flexDirection:"row",
        width:"100%",
        justifyContent:"space-between",
        padding:10,
        alignItems:"center",
        backgroundColor:colors.col1,
        elevation:20,
        borderBottomLeftRadius:20,
        borderBottomRightRadius:20
      },
      containerin:{
        flexDirection:"row",
        alignItems:"center"
      },
      myicon:{
        color:colors.text1,
      },
      mytext:{
        color:colors.text1,
        fontSize:24
      }

})
export default HomeHeadNav
