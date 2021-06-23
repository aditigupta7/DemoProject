import React from 'react'
import { View, Text,StyleSheet,TextInput,TouchableOpacity } from 'react-native'
import COLORS from '../common/colors'
import {widthToDp,heightToDp} from '../common/responsive';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Fontisto from 'react-native-vector-icons/Fontisto';

export default function Login2({navigation}) {
    return (
        <View style={styles.container}>
            <View style={styles.heading}>
                <Text style={styles.headingText}>Sign In</Text>
                <Text style={{fontFamily:'Nunito-Regular',
                fontSize:widthToDp(3.5),marginTop:widthToDp(3),
                color:COLORS.white}}>Please your enter details to continue</Text>
            </View>

        <View style={{backgroundColor:COLORS.white,position:'absolute',top:150,elevation:20,width:widthToDp(100),height:heightToDp(100),paddingTop:widthToDp(10)}}>


           <View style={styles.inputSection}>
                <Fontisto name="email" size={20} color={COLORS.dark} style={styles.inputIcon}/>
                <TextInput
                    style={styles.input}
                    placeholder="Enter Email"
                    underlineColorAndroid="transparent"
                />
            </View>


        <View style={styles.inputSection}>
            <Ionicons name="lock-closed-outline" size={20} color={COLORS.dark} style={styles.inputIcon}/>
            <TextInput
                    style={styles.input}
                    placeholder="Enter Password"
                    underlineColorAndroid="transparent"
        />

        </View>
        <View style={{marginHorizontal:widthToDp(7),marginTop:widthToDp(5)}}>
            <Text style={{textAlign:'right',color:COLORS.lightgray}}>Forget Password?</Text>
        </View>

        <View>
            <TouchableOpacity style={styles.Btn} onPress={()=> navigation.navigate('Home')}>
                <Text style={styles.BtnText}>Submit</Text>
            </TouchableOpacity>



        </View>

        <View style={{alignItems:'center',color:COLORS.gray,flexDirection:'row',justifyContent:'center'}}>
            <Text style={{color:COLORS.dark}}>Dont't have an account?</Text>
            <TouchableOpacity onPress={()=> navigation.navigate('Login')}>
            <Text style={{color:COLORS.green,fontWeight:'bold'}}> Sign Up</Text>

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
    height:heightToDp(40),
    paddingHorizontal:widthToDp(10),
    paddingVertical:widthToDp(8)
},
headingText:{
    fontSize:widthToDp(6),
    fontWeight:'600',
    color:COLORS.white,

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
    fontFamily:'Nunito-Bold',
    paddingVertical:widthToDp(3),
    paddingHorizontal:widthToDp(6),
    color:COLORS.white,
},
input:{
    fontFamily:'Nunito-Regular'
}

})