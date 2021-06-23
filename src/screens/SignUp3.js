import React, {useState} from 'react'
import { View, Text,StyleSheet,TextInput,TouchableOpacity } from 'react-native'
import COLORS from '../common/colors'
import {widthToDp,heightToDp} from '../common/responsive';
import AntDesign from 'react-native-vector-icons/AntDesign'

export default function SignUp3({navigation}) {
    const[isAgreed, setIsAgreed] = useState(false);
    const onCheck = () => {
        setIsAgreed(!isAgreed);
    }

    return (
        <View style={styles.container}>

         <View style={{marginVertical:widthToDp(10),marginHorizontal:widthToDp(10)}}>
                <Text style={{fontSize:widthToDp(6),fontWeight:'bold',color:"#757dfa"}}>
                    Sign Up
                </Text>
                <Text style={{fontSize:widthToDp(3.5),marginTop:widthToDp(3),fontFamily:'Nunito-ExtraBold'}}>Please Register and Sign up to continue using our app. </Text>

            </View>
            <View style={styles.inputSection}>
            <Text style={styles.inputHeading}>Full Name</Text>
                <TextInput
                    style={styles.input}
                    placeholder="Name"
                    underlineColorAndroid="transparent"
                />
            </View>
            <View style={styles.inputSection}>
            <Text style={styles.inputHeading}>Phone Number</Text>
                <TextInput
                    style={styles.input}
                    placeholder="Phone"
                    underlineColorAndroid="transparent"
                />
            </View>
           <View style={styles.inputSection}>
                <Text style={styles.inputHeading}>Email</Text>
                <TextInput
                    style={styles.input}
                    placeholder="johndoe@gmail.com"
                    underlineColorAndroid="transparent"
                />
            </View>


        <View style={styles.inputSection}>
        <Text style={styles.inputHeading}>Password</Text>
            <TextInput
                    style={styles.input}
                    placeholder="********"
                    underlineColorAndroid="transparent"
        />

        </View>

        <View style={styles.optionsView}>
                <View style={{flexDirection:'row'}}>
                <TouchableOpacity onPress={()=> onCheck()}>
                <AntDesign name="checkcircle" color={isAgreed ?  '#757dfa': COLORS.gainsboro} size={20}/>
                </TouchableOpacity>
                <Text style={{marginLeft:widthToDp(3),fontFamily:'Nunito-Regular'}}>
                    I agree with private policy
                </Text>
            </View>
        </View>


        <View>
            <TouchableOpacity style={styles.Btn} onPress={()=> navigation.navigate('Home')}>
                <Text style={styles.BtnText}>Sign Up</Text>
            </TouchableOpacity>
        </View>

        <View style={{alignItems:'center',color:COLORS.gray,flexDirection:'row',justifyContent:'center'}}>
            <Text style={{color:COLORS.dark}}>Already a user?</Text>
            <TouchableOpacity onPress={()=> navigation.navigate('Login')}>
            <Text style={{color:'#757dfa',fontWeight:'bold'}}> Sign In</Text>

            </TouchableOpacity>
        </View>


        </View>



    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:COLORS.white,


    },
    input:{
        fontFamily:'Nunito-Regular',
        width:widthToDp(80)
    },
    inputSection: {
        marginTop:widthToDp(4),
        marginHorizontal:widthToDp(10),
        backgroundColor: '#fff',
        paddingHorizontal:widthToDp(2),
        width:'80%',
        borderBottomColor:COLORS.gainsboro,
        borderBottomWidth:1

    },
    inputIcon: {
        padding: widthToDp(3),
    },

heading:{

    backgroundColor:'#436eee',
    width:widthToDp(100),
    height:heightToDp(20),
    paddingVertical:widthToDp(8),
    paddingHorizontal:widthToDp(10),
    borderBottomRightRadius:190
},
headingText:{
    fontSize:widthToDp(7),
    fontFamily:'Nunito-ExtraBold',
    color:COLORS.white,

},
Btn:{
    marginVertical:widthToDp(10),
    marginHorizontal:widthToDp(8),
    backgroundColor:'#757dfa',
    shadowOffset:{width:0,height:9},
    shadowOpacity:1,
    shadowRadius:20,
    borderRadius:10,
    alignItems:'center',
    width:'85%',
    height:heightToDp(7),
    shadowColor: '#000000',
    shadowOffset: {
    width: 0,
    height: 3
    },
    shadowRadius: 5,
    shadowOpacity: 1.0,
    elevation:10

    },
    BtnText:{
    fontSize:widthToDp(4.5),
    paddingVertical:widthToDp(3),
    paddingHorizontal:widthToDp(6),
    color:COLORS.white,
    fontFamily:'Nunito-Bold'
},
inputHeading:{
    fontFamily:'Nunito-Regular',
    color:COLORS.dark
},
optionsView:{
    flexDirection:'row',
     justifyContent:'space-between',
     paddingHorizontal:widthToDp(10),
     paddingTop:widthToDp(2)
},

})