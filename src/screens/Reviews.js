import React from 'react'
import { View, Text, StyleSheet,TouchableOpacity } from 'react-native'
import COLORS from '../common/colors'
import { heightToDp, widthToDp } from '../common/responsive'
import Entypo from 'react-native-vector-icons/Entypo'

export default function Reviews({navigation}) {
    return (
        <View style={styles.container}>
            <View style={{}}>
            <Text style={styles.heading}>Verfied Customer Reviews</Text>
            </View>
            <View style={styles.reviewContainer}>
            <View style={{flexDirection:'row',paddingTop:widthToDp(5),justifyContent:'space-between'}}>
            <View>
                <Text style={{fontFamily:'Nunito-Bold'}}>Anker Chaudhary</Text>
            </View>
            <View style={styles.ratingBox}>
                <Text style={styles.ratingText}>5</Text>
                <Entypo name="star" size={15} color={COLORS.white}/>
            </View>
            </View>
            <View>
                <Text style={styles.dateText}>Purchased on: March 26, 2021</Text>
            </View>
            <View>
                <Text style={styles.reviewText}>
                    One of the best shampoos which suits my scalp which is dandruff prone.
                </Text>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:COLORS.white,
        paddingHorizontal:widthToDp(4)
    },
    ratingBox:{
        flexDirection:'row',
        backgroundColor:COLORS.red,
        width:widthToDp(13),
        height:heightToDp(3.5),
        justifyContent:'center',
        alignItems:'center',
        borderRadius:5
    },
    reviewText:{
        color:COLORS.dark,
        fontFamily:'Nunito-SemiBold',
        lineHeight:25,
        paddingTop:widthToDp(3),
        fontSize:widthToDp(4)
    },
    heading:{
        fontSize:widthToDp(5),
        fontFamily:'Nunito-Bold'
    },
    ratingText:{
        color:COLORS.white,
        marginRight:widthToDp(1),
        fontWeight:'bold'
    },
    dateText:{
        fontFamily:'Nunito-Regular',
        color:COLORS.lightgray
    },
    reviewContainer:{
        paddingVertical:widthToDp(4),
        borderBottomWidth:1,
        borderBottomColor:COLORS.black
    }

})