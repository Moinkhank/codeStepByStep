import React, { useEffect, useState } from 'react'
import { View,Text,StyleSheet,Image, TouchableOpacity } from 'react-native';
import { hr80,colors} from '../../globals/style';
import logo from "../../../Assets/Food-Delivery-one_main.png"
import {firebase} from "../../Firebase/fireBaseConfig"
const Welcome = ({navigation}) => {

  const [userlogged,setUserlogged] = useState(null);
 

  useEffect(()=>{
    const checklogin =()=>{
      firebase.auth().onAuthStateChanged((user)=>{
        if(user){
          console.log(user);
          setUserlogged(user);
        }
        else {
         console.log("no user")
        }
      })
    }
    checklogin();
  },[])

  const handlelogout =()=>{
    firebase.auth().signOut().then(()=>{
      setUserlogged(null);
      console.log("signed out")
    }).catch((error)=>{
      console.log(error);
    })
  }

  return (
    <View style={styles.container}>
        <Text>Welcome to foodie</Text>
        <View style={styles.logoout}>
            <Image source={logo} style={styles.logo} />
        </View>
           <View style={hr80}/>
           <Text>fond the best food around you at the lowerst proce</Text>
           <View style={hr80} />
           {userlogged === null ? 
            <View style={styles.btnout} >
            <TouchableOpacity  onPress={()=>navigation.navigate("sign_up_page")}>
             <Text style={styles.btn} >Sign up</Text>
            </TouchableOpacity>
            <TouchableOpacity  onPress={()=>navigation.navigate("login")}>
             <Text style={styles.btn} >Log in</Text>
            </TouchableOpacity>
           </View>
           :
           <View style={styles.logged}>
            <Text style={styles.txtlog}>Signed in as &nbsp;
                <Text style={styles.txtlogin}>{userlogged.email}</Text>
            </Text>
           <View style={styles.btnout} >
           <TouchableOpacity  onPress={()=>navigation.navigate("Home")}>
            <Text style={styles.btn} >Next </Text>
           </TouchableOpacity>
           <TouchableOpacity  onPress={()=>handlelogout()}>
            <Text style={styles.btn} >Log out</Text>
           </TouchableOpacity>
          </View>
          </View>
          }
         
    </View>
  )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:"#ff4242",
        width:"100%",
        justifyContent:"center",
        alignItems:"center"
    },
    btn:{},
    title:{
      fontSize:50,
      color: colors.col1,
      textAlign:"center",
      marginVertical:10,
      fontWeight:"200"
    },
    logoout:{width:"80%",
     height:"30%",
     /* backgroundColor:"#fff" */
     alignItems:"center"
  },
  logo:{
    width:"100%",
    height:"100%"
  },
  text:{
    fontSize:18,
    width:"80%",
    color:colors.col1,
    textAlign:"center"
  },
  btnout:{
    flexDirection:"row"
  },
  btn:{
    fontSize:20,
    color:colors.text1,
    textAlign:"center",
    marginVertical:30,
    marginHorizontal:10,
    fontWeight:"700",
    backgroundColor:"#fff",
    borderRadius:10,
    padding:10,
    paddingHorizontal:20
  },
  logged:{  alignItems: 'center'},
  txtlog: {
    fontSize: 16,
    color: colors.col1,
},
txtlogin: {
    fontSize: 16,
    color: colors.col1,
    fontWeight: '700',
    textDecorationStyle: 'solid',
    textDecorationLine: 'underline',
}
})

export default Welcome
