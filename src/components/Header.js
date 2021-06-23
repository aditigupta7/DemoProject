import React from 'react'
import { View, Text,StyleSheet,TouchableOpacity } from 'react-native'
import {useNavigation} from '@react-navigation/native';
import COLORS from  '../common/colors';
import {widthToDp , heightToDp} from '../common/responsive';
import Ionicons from 'react-native-vector-icons/Ionicons'

export default function Header(props) {
    const navigation = useNavigation();
    return (

        <View style={styles.header}>
          <TouchableOpacity
              onPress={() => navigation.goBack()}>
          <Ionicons name='arrow-back' size={30} color={COLORS.dark}/>
          </TouchableOpacity>
          <Text style={styles.headingText}>{props.heading}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:COLORS.white

    },
    header:{
        flexDirection:'row',
        backgroundColor:COLORS.white,
        shadowOffset:{
            width:2,
            height:2
        },
        shadowColor:'#F7F8FB',
        elevation:5,
        padding: widthToDp(3),

    },
    headingText:{
            fontSize:widthToDp(4.5),
            marginLeft: widthToDp(5),
            color:COLORS.dark,
            fontFamily:'Nunito-ExtraBold'
    },
});