import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import {View,FlatList,StyleSheet,Text,Image, TouchableOpacity} from "react-native"
import { colors,veg,nonveg } from '../globals/style'
const CardSlider = ({title,data,navigation}) => {

   const openProductpage =(item)=>{
      //console.log(item)
      navigation.navigate('productpage', item)
   }
  return (
   <View style={styles.container}>
       <Text style={styles.cardouthead}>
          {title}
       </Text>
       <FlatList style={styles.cardsout}
        horizontal
        showsHorizontalScrollIndicator={false}
         data={data} 
         renderItem={({item})=>(
           <TouchableOpacity key={item.index} onPress={()=>{openProductpage(item)}}>
             <View style={styles.card}>
               {/*  <Text>{item.foodName}</Text> */}
               <View style={styles.s1}>
                  <Image source={{uri:item.foodImageUrl}} style={styles.cardimgin} />
               </View>
               <View style={styles.s2}>
                <Text style={styles.txt1}>{item.foodName}</Text>
                 <View style={styles.s2in}>
                    <Text>Rs.{item.foodPrice}/-</Text>
                    {item.foodType === "veg" ? <Text style={veg}></Text>:<Text style={nonveg}></Text>}
                 </View>
               </View>
               <View style={styles.s3}>
                  <Text style={styles.buybtn}>BUY</Text>
               </View>
            </View>
           </TouchableOpacity>
         )}
       />
   </View>
  )
}

export default CardSlider

const styles = StyleSheet.create({
  container:{  marginVertical: 10,},
  cardouthead:{
     color: colors.text3,
    width: '90%',
    fontSize: 30,
    fontWeight: '200',
    borderRadius: 10,
    marginHorizontal: 10},
  cardsout:{
    width: '100%',
  },
  card: {
    // backgroundColor: "aqua",
    width: 300,
    height: 300,
    margin: 10,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#e8e8e8',
    backgroundColor: colors.col1,
},
cardimgin: {
    width: "100%",
    height: 200,
    borderRadius: 10,
},
s2: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    // backgroundColor: 'aqua',
},
txt1: {
   fontSize: 18,
   color: colors.text3,
   marginHorizontal: 5,
   width: 150,
},
txt2: {
   fontSize: 20,
   color: colors.text2,
   marginRight: 10,
},
s2in: {
   flexDirection: 'row',
   alignItems: 'center',
   marginHorizontal: 10,

},
s3: {
   alignItems: 'center',
   position: 'absolute',
   bottom: 1,
   width: '100%',
},
buybtn: {
   backgroundColor: colors.text1,
   color: colors.col1,
   paddingHorizontal: 10,
   paddingVertical: 5,
   fontSize: 20,
   borderRadius: 10,
   width: '90%',
   textAlign: 'center',
}
})
