import React from 'react'
import { View, Text, StyleSheet, ScrollView,Image } from 'react-native'
import COLORS from '../common/colors'
import Header from '../components/Header'
import { heightToDp, widthToDp } from '../common/responsive'


export default function About({navigation}) {
    return (
        <View style={styles.container}>
           <Header heading="About Us"/>
           <ScrollView>
            <Image source={require('../images/bg.jpg')} style={{width:widthToDp(100),height:heightToDp(25)}}/>
           <Text style={styles.text}>
           "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."

           </Text>

           <Text style={styles.text}>
           "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."

           </Text>
           </ScrollView>

        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:COLORS.white
    },
    text:{
        paddingHorizontal:widthToDp(6),
        fontFamily:'Nunito-Regular',
        fontSize:widthToDp(4),
        paddingVertical:widthToDp(4)
    }
})