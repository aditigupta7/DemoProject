import React from 'react'
import { View, Text, StyleSheet, ScrollView, Image} from 'react-native'
import COLORS from '../common/colors'
import { heightToDp, widthToDp } from '../common/responsive'
import Header from '../components/Header'
import Entypo from 'react-native-vector-icons/Entypo'

export default function AllReviews({navigation}) {
    return (
        <View style={styles.container}>
           <Header heading="Verifed Customer Reviews"/>
           <ScrollView>
           <Text style={styles.headings}>
               Our Customer Reviews are verified! See what are customer says after using our products
            </Text>

            <View style={styles.reviewBox}>
                <View>
                    <Image source={require('../images/body-wash.jpg')} style={{width:widthToDp(20),height:heightToDp(10)}}/>
                </View>
                <View style={{paddingHorizontal:widthToDp(4)}}>
                <View>
                    <Text style={styles.productName}>
                        Tea Tree Oil - 300ml
                    </Text>
                </View>

                <View style={{flexDirection:'row'}}>
                    <Text style={{fontFamily:'Nunito-Bold'}}>3.5</Text>
                    <Entypo name="star" size={20} color="gold" style={{marginLeft:widthToDp(2)}}/>
                </View>
                <View>
                    <Text style={{fontSize:widthToDp(3.5),fontFamily:'Nunito-Bold',color:COLORS.darkgray}}>
                        564 customer reviews
                    </Text>
                </View>
                </View>
            </View>

            </ScrollView>
        </View>
    )
}
const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:COLORS.white,
    },
    headings:{

        paddingHorizontal:widthToDp(6),
        fontFamily:'Nunito-Regular',
        color:COLORS.darkgray,
        fontSize:widthToDp(3),
        paddingTop:widthToDp(4)

},
text:{
    paddingHorizontal:widthToDp(6),
    fontFamily:'Nunito-Regular',
    fontSize:widthToDp(3),
    paddingVertical:widthToDp(4)
},
productName:{
    fontFamily:'Nunito-Bold',
    fontSize:widthToDp(4),
    marginBottom:widthToDp(2)
},
reviewBox:{
    paddingHorizontal:widthToDp(4),
    marginHorizontal:widthToDp(4),
    marginVertical:widthToDp(4),
    paddingVertical:widthToDp(3),
    borderWidth:1,
    borderColor:COLORS.gainsboro,
    flexDirection:'row'
}
});