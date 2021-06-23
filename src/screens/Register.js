import React from 'react'
import { View, Text,StyleSheet,TextInput,TouchableOpacity } from 'react-native'
import COLORS from '../common/colors'
import {widthToDp,heightToDp} from '../common/responsive';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Fontisto from 'react-native-vector-icons/Fontisto';
import Feather from 'react-native-vector-icons/Feather';

export default function Register({navigation}) {
    return (
        <View style={styles.container}>


            <View style={styles.heading}>
                <Text style={styles.headingText}></Text>
            </View>

        <View style={{borderTopLeftRadius:90 , borderTopRightRadius:90,backgroundColor:COLORS.white,position:'absolute',top:100,elevation:20,width:widthToDp(100),height:heightToDp(100),paddingTop:widthToDp(10)}}>
            <View style={{alignItems:'center'}}><Text style={{fontSize:widthToDp(5),fontWeight:'bold'}}>Create New Account</Text></View>
            <View style={styles.inputSection}>
                <Feather name="user" size={20} color={COLORS.dark} style={styles.inputIcon}/>
                <TextInput
                    style={styles.input}
                    placeholder="Name"
                    underlineColorAndroid="transparent"
                />
            </View>
            <View style={styles.inputSection}>
                <Feather name="phone" size={20} color={COLORS.dark} style={styles.inputIcon}/>
                <TextInput
                    style={styles.input}
                    placeholder="Phone"
                    underlineColorAndroid="transparent"
                />
            </View>
           <View style={styles.inputSection}>
                <Fontisto name="email" size={20} color={COLORS.dark} style={styles.inputIcon}/>
                <TextInput
                    style={styles.input}
                    placeholder="Email"
                    underlineColorAndroid="transparent"
                />
            </View>


        <View style={styles.inputSection}>
            <Ionicons name="lock-closed-outline" size={20} color={COLORS.dark} style={styles.inputIcon}/>
            <TextInput
                    style={styles.input}
                    placeholder="Password"
                    underlineColorAndroid="transparent"
        />

        </View>

        <View>
            <TouchableOpacity style={styles.Btn} onPress={()=> navigation.navigate('Home')}>
                <Text style={styles.BtnText}>Sign Up</Text>
            </TouchableOpacity>



        </View>
        <View style={{marginHorizontal:widthToDp(5),marginBottom:widthToDp(5)}}>
            <Text style={{textAlign:'center',color:COLORS.lightgray}}>By signing up, you agreed with our Terms of Services and Privacy Policy.</Text>
        </View>
        <View style={{alignItems:'center',color:COLORS.gray,flexDirection:'row',justifyContent:'center'}}>
            <Text>Already have an account?</Text>
            <TouchableOpacity onPress={()=> navigation.navigate('Login')}>
            <Text style={{color:COLORS.green,fontWeight:'bold'}}> Sign In</Text>

            </TouchableOpacity>
        </View>

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

    },
    inputSection: {
        borderRadius:30,
        marginTop:widthToDp(8),
        marginHorizontal:widthToDp(8),
        flexDirection: 'row',
        backgroundColor: '#fff',
        borderColor: '#E9EBEC',
        paddingHorizontal:widthToDp(5),
        width:'85%',
        shadowColor: '#000000',
        shadowOffset: {
        width: 0,
        height: 3
        },
        shadowRadius: 5,
        shadowOpacity: 1.0,
        elevation:5

    },
    inputIcon: {
        padding: widthToDp(3),
    },

heading:{

    backgroundColor:COLORS.black,
    width:widthToDp(100),
    height:heightToDp(30),
    alignItems:'center',
    paddingVertical:widthToDp(8),

},
headingText:{
    fontSize:widthToDp(6),
    color:COLORS.white,
    fontFamily:'Nunito-Bold'

},
Btn:{
    marginVertical:widthToDp(10),
    marginHorizontal:widthToDp(8),
    backgroundColor:COLORS.black,
    shadowOffset:{width:0,height:9},
    shadowOpacity:1,
    shadowRadius:20,
    borderRadius:30,
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
    fontFamily:'Nunito-ExtraBold',
    paddingVertical:widthToDp(3),
    paddingHorizontal:widthToDp(6),
    color:COLORS.white,
},

})