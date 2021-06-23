import React from 'react'
import { View, Text,StyleSheet,TextInput,TouchableOpacity, ScrollView } from 'react-native'
import COLORS from '../common/colors'
import {widthToDp,heightToDp} from '../common/responsive';

export default function SignUp2({navigation}) {
    return (
        <View style={styles.container}>

            <ScrollView>
            <View style={styles.heading}>
                <Text style={styles.headingText}>
                    Sign Up
                </Text>
            </View>
{/*
            <View style={{marginBottom:widthToDp(5),marginHorizontal:widthToDp(10)}}>
                <Text style={{fontSize:widthToDp(6),fontWeight:'bold',color:"#436eee"}}>Sign Up</Text>

            </View> */}
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
                    secureTextEntry={true}
                    placeholder="********"
                    underlineColorAndroid="transparent"
        />

        </View>

        <View style={{alignItems:'flex-end',paddingRight:widthToDp(10),paddingTop:widthToDp(5)}}>
            <TouchableOpacity onPress={()=> navigation.navigate('Login')}>
            <Text style={{color:COLORS.green,fontFamily:'Nunito-Bold'}}>Already a user ?</Text>
            </TouchableOpacity>
        </View>

        <View>
            <TouchableOpacity style={styles.Btn} onPress={()=> navigation.navigate('Home')}>
                <Text style={styles.BtnText}>Sign Up</Text>
            </TouchableOpacity>
        </View>

        <View style={{marginHorizontal:widthToDp(15),marginVertical:widthToDp(5)}}>
            <Text style={{textAlign:'center',color:COLORS.lightgray,fontSize:widthToDp(3)}}>By signing up, you agreed with our Terms of Services and Privacy Policy.</Text>
        </View>
        </ScrollView>

        </View>



    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#fafafa',


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
    backgroundColor:'#436eee',
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
    fontWeight:'bold',
    paddingVertical:widthToDp(3),
    paddingHorizontal:widthToDp(6),
    color:COLORS.white,
    fontFamily:'Nunito-Bold'
},
inputHeading:{
    fontFamily:'Nunito-Regular',
    color:COLORS.dark
}

})