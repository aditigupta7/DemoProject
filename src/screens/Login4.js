import React from 'react'
import { View, Text,StyleSheet,TextInput,TouchableOpacity } from 'react-native'
import COLORS from '../common/colors'
import {widthToDp,heightToDp} from '../common/responsive';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'

export default function Login4({navigation}) {
    return (
        <View style={styles.container}>
        <View style={{backgroundColor:COLORS.white,width:widthToDp(100),height:heightToDp(100),paddingTop:widthToDp(10)}}>


          <View style={{marginLeft:widthToDp(10), marginBottom:widthToDp(5)}}>
                <Text style={{fontSize:widthToDp(6),fontFamily:'Nunito-Bold'}}>Login</Text>
            </View>

            <View style={{flexDirection:'row',justifyContent:'space-between',paddingHorizontal:widthToDp(10)}}>
            <View style={{backgroundColor:COLORS.lightpurple,width:widthToDp(35),height:heightToDp(6),borderRadius:10,alignItems:'center',justifyContent:'center'}}>
                <Text style={{color:COLORS.newPurple,fontFamily:'Nunito-Bold',fontSize:widthToDp(4.2)}}>Google</Text>
            </View>

            <View style={{backgroundColor:COLORS.lightpurple,width:widthToDp(35),height:heightToDp(6),borderRadius:10,alignItems:'center',justifyContent:'center'}}>
                <Text style={{color:COLORS.newPurple,fontFamily:'Nunito-Bold',fontSize:widthToDp(4.2)}}>Facebook</Text>
            </View>
            </View>


            <Text style={{color:COLORS.gainsboro,marginLeft:widthToDp(10),marginVertical:widthToDp(5)}}>Or</Text>


           <View style={styles.inputSection}>
               <Text style={{fontFamily:'Nunito-Regular'}}>E-mail Address</Text>
                <TextInput
                    style={styles.input}
                    placeholder="johndoe@gmail.com"
                    underlineColorAndroid="transparent"
                />
            </View>


        <View style={styles.inputSection}>
        <Text style={{fontFamily:'Nunito-Regular'}}>Password</Text>
            <TextInput
                    style={styles.input}
                    placeholder="*******"
                    underlineColorAndroid="transparent"
        />

        </View>
        <View style={{marginHorizontal:widthToDp(7),marginTop:widthToDp(5)}}>
            <Text style={{textAlign:'right',color:COLORS.lightgray,fontFamily:'Nunito-Regular'}}>Forget Password?</Text>
        </View>

        <View style={{flexDirection:'row',justifyContent:'space-between',paddingHorizontal:widthToDp(10),marginTop:widthToDp(20)}}>
        <View>

            <Text style={{fontSize:widthToDp(4),color:COLORS.newPurple,fontFamily:'Nunito-ExtraBold',marginTop:widthToDp(5)}}>.Create Account</Text>
        </View>
        <View>
            <TouchableOpacity style={styles.Btn} onPress={()=> navigation.navigate('Home')}>
            <MaterialCommunityIcons name="chevron-double-right" color={COLORS.white} size={24}/>
            </TouchableOpacity>
        </View>
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
        marginTop:widthToDp(4),
        marginHorizontal:widthToDp(8),
        backgroundColor: '#fff',
        borderColor: '#E9EBEC',
        paddingHorizontal:widthToDp(2),
        width:'85%',
        borderBottomColor:COLORS.gainsboro,
        borderBottomWidth:1
    },
    inputIcon: {
        padding: widthToDp(3),
    },

heading:{

    width:widthToDp(100),
    height:heightToDp(20),
    paddingHorizontal:widthToDp(10),
    paddingVertical:widthToDp(8)
},
headingText:{
    fontSize:widthToDp(8),
    fontWeight:'600',
    color:COLORS.white,
    fontFamily:'Nunito-Bold'

},
Btn:{
    backgroundColor:COLORS.newPurple,
    shadowOffset:{width:0,height:9},
    shadowOpacity:1,
    shadowRadius:20,
    borderRadius:20,
    alignItems:'center',
    justifyContent:'center',
    width:widthToDp(15),
    height:heightToDp(8),
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

},
upperDesign:{
    width:'100%',
    height:'25%'
}

})