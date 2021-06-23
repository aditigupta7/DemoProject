import React from 'react'
import { View, Text,StyleSheet,TextInput,TouchableOpacity } from 'react-native'
import COLORS from '../common/colors'
import { widthToDp , heightToDp} from '../common/responsive'
import Feather from 'react-native-vector-icons/Feather';
import Fontisto from 'react-native-vector-icons/Fontisto'
import Ionicons from 'react-native-vector-icons/Ionicons'

export default function SignUp({navigation}) {
    return (
        <View style={styles.container}>
            <View style={styles.centerView}>
            <View style={{marginLeft:widthToDp(10), marginBottom:widthToDp(5)}}>
                <Text style={{fontSize:widthToDp(5),fontWeight:'bold'}}>Sign Up!</Text>
            </View>
            <View style={styles.inputSection}>
                <Feather name="user" size={20} color={COLORS.lightgray} style={styles.inputIcon}/>
                <TextInput
                    style={styles.input}
                    placeholder="Name"
                    underlineColorAndroid="transparent"
                />
            </View>
            <View style={styles.inputSection}>
                <Feather name="phone" size={20} color={COLORS.lightgray} style={styles.inputIcon}/>
                <TextInput
                    style={styles.input}
                    placeholder="Phone"
                    underlineColorAndroid="transparent"
                />
            </View>
           <View style={styles.inputSection}>
                <Fontisto name="email" size={20} color={COLORS.lightgray} style={styles.inputIcon}/>
                <TextInput
                    style={styles.input}
                    placeholder="Email"
                    underlineColorAndroid="transparent"
                />
            </View>


        <View style={styles.inputSection}>
            <Ionicons name="lock-closed-outline" size={20} color={COLORS.lightgray} style={styles.inputIcon}/>
            <TextInput
                    style={styles.input}
                    placeholder="Password"
                    underlineColorAndroid="transparent"
        />

        </View>
        </View>

        <View>
            <TouchableOpacity style={styles.Btn} onPress={()=> navigation.navigate('Home')}>
                <Text style={styles.BtnText}>Submit</Text>
            </TouchableOpacity>



        </View>

        </View>


    )
}
const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:COLORS.lightpeach,
        justifyContent:'center'

    },
    inputSection: {
        marginTop:widthToDp(3),
        marginHorizontal:widthToDp(10),
        flexDirection: 'row',
        backgroundColor: '#fff',
        paddingHorizontal:widthToDp(1),
        width:'80%',
        borderBottomColor:'#e58d7c',
        borderBottomWidth:1

    },
    inputIcon: {
        paddingVertical:widthToDp(4),
        paddingHorizontal:widthToDp(1)
    },

Btn:{
    marginTop:widthToDp(130),
    marginHorizontal:widthToDp(20),
    backgroundColor:COLORS.peach,
    shadowOffset:{width:0,height:9},
    shadowOpacity:1,
    shadowRadius:20,
    borderRadius:30,
    alignItems:'center',
    width:'60%',
    height:heightToDp(7),
    shadowColor: '#000000',
    shadowOffset: {
    width: 0,
    height: 3
    },
    shadowRadius: 5,
    shadowOpacity: 1.0,
    elevation:20

    },
    BtnText:{
    fontSize:widthToDp(4.5),
    fontWeight:'bold',
    paddingVertical:widthToDp(3),
    paddingHorizontal:widthToDp(6),
    color:COLORS.white,
    fontFamily:'Nunito-Bold'
},
input:{
    fontFamily:'Nunito-Regular',
    width:widthToDp(80)
},
centerView:{
    borderRadius:10,
    position: 'absolute',
    paddingTop:widthToDp(5),
    backgroundColor:'white',
    height:heightToDp(50),
    width:widthToDp(90),
    marginHorizontal:widthToDp(5),
    elevation: 20,
    shadowColor:COLORS.lightpeach

}


})