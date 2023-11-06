import React from 'react'
import { View ,StyleSheet } from 'react-native'
import HomeIcon from "react-native-vector-icons/AntDesign"
import SearchIcon from "react-native-vector-icons/EvilIcons"
import ShoppingCartIcon from "react-native-vector-icons/AntDesign"
import MapMarkedIcon from "react-native-vector-icons/FontAwesome5"
import { colors } from '../globals/style'
const BottomNav = ({navigation}) => {
  return (
   <View style={styles.container}>
       <View style ={styles.btncon1}>
  <HomeIcon name="home" size={24} color="black" onPress={() => { navigation.navigate("Home") }} />
       </View>
       <View style={styles.btncon2} >
                <SearchIcon name="search" size={40} color="black" style={styles.icon2} onPress={() => { navigation.navigate("Home") }} />
       </View>
       <View style={styles.btncon1} >
                <ShoppingCartIcon name="shoppingcart" size={30} color="black" style={styles.icon1} onPress={() => { navigation.navigate('cart') }} />
        </View>
            <View style={styles.btncon1} >
                <MapMarkedIcon name="map-marked-alt" size={30} color="black" style={styles.icon1} onPress={() => { navigation.navigate('trackorders') }} />
            </View>
   </View>
  )
}

 const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        backgroundColor: 'white',
        width: '100%',
        elevation: 30,
        borderTopColor: colors.text1,
        borderTopWidth: 0.5,
        borderTopEndRadius: 20,
        borderTopStartRadius: 20,
    },
    btncon1: {
        alignItems: 'center',
    },
    btncon2: {
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative',
        top: -20,
        backgroundColor: colors.text1,
        width: 60,
        height: 60,
        borderRadius: 60,
    },
    icon2: {
        color: 'white',

    },
    icon1: {
        color: colors.text1,

    }
 })
export default BottomNav
