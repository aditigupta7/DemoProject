import React from 'react';
import {View,Image,Text} from 'react-native';
import COLORS from '../common/colors';
import { widthToDp } from '../common/responsive';

export default function Splash(){
        return(
            <View style={{flex:1,alignContent:'center',justifyContent:'center',alignItems:'center',backgroundColor:COLORS.white}}>
            <Text style={{fontSize:widthToDp(4), color:COLORS.dark}}>Bill Book</Text>
            </View>
        )
}