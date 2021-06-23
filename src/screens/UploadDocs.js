import React from 'react'
import { View, Text, StyleSheet,Image, TouchableOpacity } from 'react-native'
import COLORS from '../common/colors'
import { heightToDp, widthToDp } from '../common/responsive'
import Feather from 'react-native-vector-icons/Feather'
import AntDesign from 'react-native-vector-icons/AntDesign'

export default function UploadDocs({navigation}) {

    return (
        <View style={styles.container}>
            <Image source={require('../images/upload.png')} style={styles.image}/>
            <TouchableOpacity onPress={()=> {}} style={{flexDirection:'row',        marginTop:widthToDp(5)}}>
            <AntDesign name="plus" size={25} color={COLORS.dark}
            style={styles.icon}/>
            <Text style={styles.text}>Please add details</Text>
            </TouchableOpacity>

        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:COLORS.white,
        alignItems:'center'
    },
    image:{
        width:widthToDp(50),
        height:heightToDp(20),
        resizeMode:'contain',
        marginTop:widthToDp(50)
    },
    text2:{
        fontFamily:'Nunito-Regular',
        fontSize:widthToDp(4),
        color:COLORS.lightgray
    },
    text:{
        fontSize:widthToDp(5),
        fontFamily:'Nunito-Bold',
        color:COLORS.dark
    },
    icon:{
        marginTop:widthToDp(1),
        marginRight:widthToDp(2)
    }
})