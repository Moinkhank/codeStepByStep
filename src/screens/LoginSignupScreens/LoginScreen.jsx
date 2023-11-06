import React,{useState} from 'react'
import { StyleSheet,Text,TextInput,View ,TouchableOpacity} from 'react-native';
import Icon from "react-native-vector-icons/AntDesign"
import GoogleIcon from "react-native-vector-icons/AntDesign"
import FaceBookIcon from "react-native-vector-icons/AntDesign/"
import EntypoIcon from "react-native-vector-icons/Entypo"
import { titles,colors,btn1, hr80 } from '../../globals/style'
import { firebase } from "../../Firebase/fireBaseConfig";
const LoginScreen = ({navigation}) => {

    const [emailFocus,setEmailFocus] = useState(false)
    const [passwordFocus,setPasswordFocus] = useState(false)
    const [showPassword,setShowPassword] = useState(false)

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [customerror, setcustomError] = useState('');

    const handleLogin =()=>{
         firebase.auth().signInWithEmailAndPassword(email,password)
         .then((userCredential)=>{
            navigation.navigate("welcomepage");
         })
         .catch((error)=>{
            var errorMessage = error.message;
            console.log(errorMessage);
            if (errorMessage === 'Firebase: The email address is badly formatted. (auth/invalid-email).'
            ) {
                setcustomError('Please enter a valid email address')
            }
            else {
                setcustomError('Incorrect email or password')
            }
         })
    }

  return (
   <View style={styles.container}>
     <Text style={styles.head1}>Sign in</Text>
     {customerror !== '' && <Text style={styles.errormsg}>{customerror}</Text>}
     <View style={styles.inputout}>
    <Icon name="user" size={40} color={emailFocus === true?  colors.text1:colors.text2  } />
        <TextInput style={styles.input} placeholder='email'
          onFocus={()=>{
            setEmailFocus(true)
            setPasswordFocus(false)
            setShowPassword(false)
            setcustomError("")
          }}
           onChangeText={(text)=>{
            setEmail(text)
           }}
        />
        </View>
     <View style={styles.inputout}>
    <EntypoIcon  name="lock" color={passwordFocus===true?colors.text1:colors.text2} size={40} />
        <TextInput style={styles.input}placeholder='password' 
          onFocus={()=>{
            setEmailFocus(false)
            setPasswordFocus(true)
            setcustomError("")
          }}
        onChangeText={(text)=>{setPassword(text)}}  
          secureTextEntry={showPassword===false?true:false}
        />
         <EntypoIcon name={showPassword===false ? "eye-with-line":"eye"} size={30} color="black" 
        onPress={()=>setShowPassword(!showPassword)}
     />
        </View>
   <TouchableOpacity style={btn1} onPress={()=> handleLogin()} >
         <Text  style={{color:colors.col1,fontSize:titles.btntxt,fontWeight:"bold"}}>
            Sign In
        </Text>
   </TouchableOpacity>
   <Text style={styles.forgot}>Forgot Password?</Text>
   <Text style={styles.or}>OR</Text>
   <Text style={styles.gftxt}>Sign in with</Text>
       <View style={styles.gf}>
        <TouchableOpacity >
        <GoogleIcon name="google" style={styles.gficon} size={30} color="blue" />
        </TouchableOpacity>
        <TouchableOpacity >
         <FaceBookIcon name="facebook-square" style={styles.gficon}  size={30} color="skyblue" />   
        </TouchableOpacity>
       </View>
       <View style={hr80}></View>
       <Text>Don't have an account
        <Text style={{color:colors.text1}}onPress={()=>navigation.navigate("sign_up_page")} >  Sign up</Text>
       </Text>
   </View>
  )
}

const styles= StyleSheet.create({
    container:{
        flex:1,
        width:"100%",
        alignItems:"center",
        justifyContent:"center"
    },
    head1:{
        fontSize:titles.title1,
        color:colors.text1,
        textAlign:"center",

    },
    inputout:{
        flexDirection:"row",
        width:"80%",
        marginVertical:10,
        backgroundColor:colors.col1,
        borderRadius:10,
        paddingHorizontal:10,
        paddingVertical:10,
        elevation:20
    },
    input:{
        fontSize:18,
        marginLeft:10,
        width:"80%"
    },
    forgot:{
        color:colors.text2,
        marginTop:24,
      
    },
    or:{
        color:colors.text1,
        marginVertical:10,
        fontWeight:"bold"
    },
    gftxt:{
        color:colors.text2,
        marginVertical:10,
        fontSize:25
    },
    gf:{
        flexDirection:"row"
    },
    gficon:{
        backgroundColor:"white",
        width:50,
        margin:10,
        borderRadius:10,
        padding:10,
        alignItems:"center",
        elevation:20
    }
})
export default LoginScreen
