import React from 'react'
import { View, Text,StyleSheet,TextInput,TouchableOpacity } from 'react-native'
import COLORS from '../common/colors'
import {widthToDp,heightToDp} from '../common/responsive';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Fontisto from 'react-native-vector-icons/Fontisto';
import Feather from 'react-native-vector-icons/Feather';
import LinearGradient from 'react-native-linear-gradient';
import AntDesign from 'react-native-vector-icons/AntDesign'


export default function UserLogin({navigation}) {
    return (
        <View style={styles.container}>
              <LinearGradient
          start={{x: 1, y: 0}}
          end={{x: 0, y: 1}}
          colors={[COLORS.newPink, COLORS.myPurple]}
          >
            <View style={styles.heading}>
                <Text style={styles.headingText}></Text>
            </View>
            </LinearGradient>

        <View style={{borderTopLeftRadius:90 , borderTopRightRadius:90,backgroundColor:COLORS.white,position:'absolute',top:100,elevation:20,width:widthToDp(100),height:heightToDp(100),paddingTop:widthToDp(10)}}>
            <View style={{alignItems:'center'}}><Text style={{fontSize:widthToDp(5),fontFamily:'Nunito-ExtraBold'}}>Login With</Text></View>


            <View style={{flexDirection:'row',justifyContent:'space-between',paddingHorizontal:widthToDp(8),marginTop:widthToDp(10)}}>
            <View style={{backgroundColor:COLORS.lightpurple,width:widthToDp(40),height:heightToDp(6),borderRadius:10,alignItems:'center',justifyContent:'center'}}>
                <Text style={{color:COLORS.newPurple,fontFamily:'Nunito-Bold',fontSize:widthToDp(4.2)}}>Google</Text>
            </View>

            <View style={{backgroundColor:COLORS.lightpurple,width:widthToDp(40),height:heightToDp(6),borderRadius:10,alignItems:'center',justifyContent:'center'}}>
                <Text style={{color:COLORS.newPurple,fontFamily:'Nunito-Bold',fontSize:widthToDp(4.2)}}>Facebook</Text>
            </View>
            </View>

            <Text style={{color:COLORS.gainsboro,textAlign:'center', marginTop:widthToDp(5)}}>Or</Text>




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

        <View style={{alignItems:'flex-end'}}>
        <LinearGradient
          start={{x: 1, y:0 }}
          end={{x:0 , y: 0}}
          colors={[COLORS.newPink, COLORS.myPurple]}
          style={styles.Btn}
          >

            <TouchableOpacity  onPress={()=> navigation.navigate('Home')} >
                <AntDesign name="arrowright"size={30} color={COLORS.white}/>
            </TouchableOpacity>
            </LinearGradient>
        </View>


        <View style={{marginHorizontal:widthToDp(7),marginTop:widthToDp(5),flexDirection:'row',justifyContent:'space-between'}}>

        <Text style={{textAlign:'left',color:COLORS.myPurple,fontFamily:'Nunito-Bold'}}>Create Account</Text>
        <Text style={{textAlign:'right',color:COLORS.lightgray}}>Forget Password?</Text>
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
    input:{
        width:widthToDp(60),
        fontFamily:'Nunito-Regular'
    },
    inputIcon: {
        padding: widthToDp(3),
    },

heading:{
    width:widthToDp(100),
    height:heightToDp(24),
    alignItems:'center',
    paddingVertical:widthToDp(8)
},
headingText:{
    fontSize:widthToDp(6),
    fontFamily:'Nunito-Regular',
    color:COLORS.white,

},
Btn:{
    marginTop:widthToDp(10),
    marginBottom:widthToDp(5),
    marginHorizontal:widthToDp(8),
    backgroundColor:COLORS.black,
    shadowOffset:{width:0,height:9},
    shadowOpacity:1,
    shadowRadius:20,
    borderRadius:50,
    alignItems:'center',
    justifyContent:'center',
    width:widthToDp(16.9),
    height:heightToDp(8.5),
    shadowColor: '#000000',
    shadowOffset: {
    width: 0,
    height: 3
    },
    shadowRadius: 5,
    shadowOpacity: 1.0,
    elevation:10

    },

upperDesign:{
    width:widthToDp(85),
    height:heightToDp(7),
}
})