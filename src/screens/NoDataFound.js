import React from 'react'
import { View, Text, StyleSheet,Image } from 'react-native'
import COLORS from '../common/colors'
import { heightToDp, widthToDp } from '../common/responsive'

export default function NoDataFound({navigation}) {
    return (
        <View style={styles.container}>
            <Image source={require('../images/nodatafound2.png')} style={styles.image}/>
            <Text style={styles.text}>Sorry!  no data found</Text>
            <Text style={styles.text2}>Try something else</Text>
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
        marginTop:widthToDp(50)
    },
    text2:{
        fontFamily:'Nunito-Regular',
        fontSize:widthToDp(4),
        color:COLORS.lightgray
    },
    text:{
        marginTop:widthToDp(5),
        fontSize:widthToDp(5),
        fontFamily:'Nunito-Bold',
        color:COLORS.dark
    }
})