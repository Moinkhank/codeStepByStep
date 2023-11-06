import React, { useEffect, useState } from 'react'
import { View,Text,StatusBar, TextInput, StyleSheet,  ScrollView, FlatList } from 'react-native'
import HomeHeadNav from '../components/HomeHeadNav'
import Categories from '../components/Categories'
import OfferSlider from '../components/OfferSlider'
import SearchIcon from "react-native-vector-icons/AntDesign"
import { colors } from '../globals/style'
//import {firestore} from "@firebase/firestore"
import { firebase } from "../Firebase/fireBaseConfig"
import { firestore } from "@firebase/firestore";
import { initializeApp } from "@firebase/app";
import CardSlider from '../components/CardSlider'
import BottomNav from '../components/BottomNav'
import ArrowIcon from "react-native-vector-icons/AntDesign"

const HomeScreen = ({navigation}) => {

    const [foodData,setFoodData] = useState([]);
    const [vegData,setVegData] = useState([]);
    const [nonVegData,setNonVegData] = useState([]);
   const foodRef = firebase.firestore().collection('foodData');
   //const foodRef = firebase.firestore().collection('FoodData');
   useEffect(() => {
    foodRef.onSnapshot(snapshot => {
        setFoodData(snapshot.docs.map(doc => doc.data()))
        alert("i am  in useeffect")
    }
    )
},[])
useEffect(()=>{
    setVegData(foodData.filter(item=>item.foodType === "veg"))
    setNonVegData(foodData.filter(item=>item.foodType === "non-veg"))
},[foodData])
// console.log("it shows data if connected",foodData)
const [search,setSearch]  = useState("")
  return (
    <View style={styles.container}>
        <StatusBar />
        <HomeHeadNav navigation={navigation} />
        <View style={styles.bottomnav}>
        <BottomNav navigation={navigation} />
        </View>
       
        <ScrollView>
        <View style={styles.searchbox}>
            <SearchIcon name="search1" size={28} color="black" style={styles.searchicon} />
            <TextInput style={styles.input} placeholder='search' onChangeText={(e)=>{setSearch(e)}} />
        </View>
        {search != "" && <View style={styles.seacrhresultsouter}>
               <FlatList style={styles.searchresultsinner}  data={foodData} 
                 renderItem={({item})=>{
                    if(item.foodName.toLowerCase().includes(search.toLowerCase())){
                        return(
                            <View style={styles.searchresult}>
                                 <ArrowIcon name="arrowright" size={24} color="black" />
                              <Text style={styles.searchresulttext}>{item.foodName}</Text>
                            </View>
                        )
                    }
                 }}
               />
            </View>}
        <Categories />
        <OfferSlider />
       {/*  <Text>Home screen</Text> */}
       <CardSlider title={"today,s special"} data={foodData} navigation={navigation} />
       <CardSlider title={"NonVeg Love"} data={nonVegData} navigation={navigation} />
       <CardSlider title={"Veg Love"} data={vegData} navigation={navigation} />
       </ScrollView>
    </View>
  )
}
const styles= StyleSheet.create({
container:{
    flex:1,
    backgroundColor:colors.col1,
   // alignItems:"center",
    width:"100%"
},
searchbox:{
    flexDirection:"row",
    width:"90%",
    backgroundColor:colors.col1,
    borderRadius:30,
    alignItems:"center",
    padding:10,
    margin:20,
    elevation:10
},
input:{
    marginLeft:10,
    width:"90%",
    fontSize:18,
    color:colors.text1
},
searchicon:{
    color:colors.text1
},
seacrhresultsouter: {
    width: '100%',
    marginHorizontal: 30,
    height: '100%',
    backgroundColor: colors.col1,
},
searchresultsinner: {
    width: '100%',
}, 
searchresult: {
    width: '100%',
    flexDirection: 'row',
    // alignItems: 'center',
    padding: 5,
},
searchresulttext: {
    marginLeft: 10,
    fontSize: 18,
    color: colors.text1,
},
bottomnav: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    backgroundColor: colors.col1,
    zIndex: 20,
}
})
export default HomeScreen
