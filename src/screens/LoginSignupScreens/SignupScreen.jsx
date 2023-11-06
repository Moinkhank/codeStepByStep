import React,{useState} from 'react'
import { StyleSheet,Text,TextInput,View ,TouchableOpacity, StatusBar} from 'react-native';
import Icon from "react-native-vector-icons/AntDesign"
import GoogleIcon from "react-native-vector-icons/AntDesign"
import FaceBookIcon from "react-native-vector-icons/AntDesign/"
import PhoneIcon from "react-native-vector-icons/Feather"
import EntypoIcon from "react-native-vector-icons/Entypo"
import { titles,colors,btn1, hr80 } from '../../globals/style'
import { firebase } from '../../Firebase/fireBaseConfig';


const SignUp = ({navigation}) => {

    const [emailFocus,setEmailFocus] = useState(false);
    const [passwordFocus,setPasswordFocus] = useState(false);
    const [showPassword,setShowPassword] = useState(false);
    const [showCPassword,setShowCPassword] = useState(false);
    const [passwordCFocus,setPasswordCFocus] = useState(false);
    const [phoneFocus,setPhoneFocus] = useState(false);
    const [nameFocus,setNameFocus] = useState(false);
    const [cpasswordfocus, setcPasswordfocus] = useState(false);

    // taking data from form 
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [cpassword, setcPassword] = useState('');
    const [phone, setPhone] = useState('');
    const [name, setName] = useState('');
    const [address, setAddress] = useState('');

    const [customerError,setCustomerError] = useState("");
    const [sucessMsg,setSucessMsg]= useState(null);
const handleSignup=()=>{
  
  if(password != cpassword){
    //alert("Password does not match")
    setCustomerError("password does not match")
  }
  else if(phone.length != 10){
    setCustomerError("phone number should be 10 digit");
  }
     
     try{
       firebase.auth().createUserWithEmailAndPassword(email,password)
       .then((userCredentials)=>{
        console.log(userCredentials?.user.uid)
        console.log("user created")
        setSucessMsg("user created successfully")
        // firebase storage start after this
       
         if(userCredentials?.user.uid != null){
          const userRef = firebase.firestore().collection("UserData")
          userRef.add({
            email:email,
            password:password,
            //cpassword:cpassword
            phone:phone,
            name:name,
            address:address,
            uid:userCredentials?.user?.uid
          }).then(()=>{
            console.log("data added to firestore")
            setSucessMsg("user created successfully")
          })
          .catch((error)=>{console.log("firestore error",error)})
         }
       })
       .catch((error)=>{
        console.log("sign up  firebase error",error.message)
        if(error.message == "Firebase: The email address is already in use by another account. (auth/email-already-in-use)."){
          setCustomerError("Email already exists")
        }
        else if (error.message == 'Firebase: The email address is badly formatted. (auth/invalid-email).') {
          setCustomerError('Invalid Email')
      }
      else if (error.message == 'Firebase: Password should be at least 6 characters (auth/weak-password).') {
          setCustomerError('Password should be at least 6 characters')
      }
      else {
          setCustomerError(error.message)
      }
       })
     }
     catch(error){
      console.log("system error",error.message)
     }
}

  return (
       <View style={styles.container}>
        <StatusBar />
        {sucessMsg == null ?  <View style={styles.container}>
     <Text style={styles.head1}>Sign up</Text>
     {customerError !== "" && <Text style={styles.errormsg}>{customerError}</Text>}
     <View style={styles.inputout}>
    <Icon name="user" size={40} color={nameFocus === true?  colors.text1:colors.text2  } />
        <TextInput style={styles.input} placeholder='Full name'
          onFocus={()=>{
            setEmailFocus(false);
            setPasswordFocus(false)
            setPhoneFocus(false)
            setNameFocus(true)
            setCustomerError("")
          }}
          onChangeText={(text) => setName(text)}
        />
        </View>
     {/* email start here */}
     <View style={styles.inputout}>
    <Icon name="user" size={40} color={emailFocus === true?  colors.text1:colors.text2  } />
        <TextInput style={styles.input} placeholder='email'
          onFocus={()=>{
            setEmailFocus(true);
            setPasswordFocus(false)
            setPhoneFocus(false)
            setNameFocus(false)
            setCustomerError("")
          }}
          onChangeText={(text) => setEmail(text)}
        />
        </View>
         {/* email ends here */}
        {/* MOBILE NO START HERE */}
        <View style={styles.inputout}>
    <PhoneIcon name="phone-call" size={38} color={phoneFocus === true?  colors.text1:colors.text2  } />
        <TextInput style={styles.input} placeholder='number'
          onFocus={()=>{
            setEmailFocus(false);
            setPasswordFocus(false)
            setShowPassword(false)
            setPhoneFocus(true)
            setNameFocus(false)
            setCustomerError("")
          }}
          onChangeText={(text) => setPhone(text)}
        />
        </View>
         {/* MOBILE NO ENDS HERE */}
        {/* password starts  */}
     <View style={styles.inputout}>
    <EntypoIcon  name="lock" color={passwordFocus===true?colors.text1:colors.text2} size={40} />
        <TextInput style={styles.input}placeholder='password' 
          onFocus={()=>{
            setEmailFocus(false)
          //  SetEmailfocus(false)
          setPasswordFocus(true)
            //setPasswordfocus(true)
            setShowPassword(false)
            //setShowpassword(false)
            setNameFocus(false)
            //setNamefocus(false)
            setPhoneFocus(false)
            //setPhonefocus(false)
            setCustomerError("")
          }}
          onChangeText={(text) => setPassword(text)}
          secureTextEntry={showPassword===false?true:false}
        />
         <EntypoIcon name={showPassword===false ? "eye-with-line":"eye"} size={30} color="black" 
        onPress={()=>setShowPassword(!showPassword)}
     />
        </View>

        <View style={styles.inputout}>
    <EntypoIcon  name="lock" color={passwordFocus===true?colors.text1:colors.text2} size={40} />
        <TextInput style={styles.input}placeholder=' confirm password' 
          onFocus={()=>{
            setEmailFocus(false)
            setPasswordFocus(false)
            setShowPassword(true)
            setNameFocus(false)
            setPhoneFocus(false)
            setCustomerError("")
          }}
          onChangeText={(text) => setcPassword(text)}
          secureTextEntry={showCPassword===false?true:false}
        />
         <EntypoIcon name={showCPassword===false ? "eye-with-line":"eye"} size={30} color="black" 
        onPress={()=> setShowCPassword(!showCPassword)}
     />
        </View>
        {/* password ends here  */}
        <Text style={styles.address}>Please enter your address</Text>
        <View style={styles.inputout}>
           <TextInput style={styles.input1} placeholder='enter your address'  onChangeText={(text) => setAddress(text)}
            onPress={() => {
              setEmailFocus(false)
              setPasswordFocus(false)
              setShowPassword(false)
              setNameFocus(false)
              setPhoneFocus(false)
              setCustomerError("")
          }}
           />
        </View>
   <TouchableOpacity style={btn1} onPress={()=>handleSignup()}>
         <Text  style={{color:colors.col1,fontSize:titles.btntxt,fontWeight:"bold"}}>
            Sign up
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
       <Text>Already have an account 
        <Text style={{color:colors.text1}}onPress={()=>navigation.navigate("login")} >  Sign in</Text>
       </Text>
   </View>
   : 
           <View style={styles.container1}>
              <Text>{sucessMsg}</Text>
              <TouchableOpacity style={btn1} onPress={()=>navigation.navigate("login")}>
                  <Text  style={{color:colors.col1,fontSize:titles.btntxt,fontWeight:"bold"}}>
                     Sign in
                 </Text>
          </TouchableOpacity>

          <TouchableOpacity style={btn1} onPress={()=>setSucessMsg(null)}>
                  <Text  style={{color:colors.col1,fontSize:titles.btntxt,fontWeight:"bold"}}>
                   Go back
                 </Text>
          </TouchableOpacity>
           </View>
   }
       </View>
  )
}

const styles= StyleSheet.create({
    container:{
        flex:1,
        width:"100%",
        alignItems:"center",
        /*  justifyContent:"center",
        marginTop:50  */
    },
    container1: {
      flex: 1,
      width: '100%',
      alignItems: 'center',
      justifyContent: 'center',
      marginTop: 60,
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
        paddingHorizontal:5,
        paddingVertical:5,
        elevation:20
    },
    input:{
        fontSize:18,
        marginLeft:10,
        width:"80%"
    },
    forgot:{
        color:colors.text2,
        marginTop:20,
        marginBottom:10
    },
    or:{
        color:colors.text1,
        marginVertical:10,
        fontWeight:"bold"
    },
    gftxt:{
        color:colors.text2,
        marginBottom:10,
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
    },
    signup:{
      color:colors.text1
    },
    address:{
      fontSize:18,
      color:colors.text2,
      textAlign:"center",
      marginTop:20
    },
    errormsg: {
      color: 'red',
      fontSize: 18,
      textAlign: 'center',
      marginTop: 10,
      borderColor: 'red',
      borderWidth: 1,
      borderRadius: 10,
      padding: 10,
  },
})
export default SignUp;
