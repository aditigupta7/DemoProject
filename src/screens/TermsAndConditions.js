import React from 'react'
import { View, Text, StyleSheet, ScrollView } from 'react-native'
import COLORS from '../common/colors'
import { widthToDp } from '../common/responsive'
import Header from '../components/Header'
import Entypo from 'react-native-vector-icons/Entypo'

export default function TermsAndConditions({navigation}) {
    return (
        <View style={styles.container}>
           <Header heading="Terms & Conditions"/>
           <ScrollView>
            <Text style={styles.headings}>AGREEMENT TO TERMS</Text>
           <Text style={styles.text}>
           These Terms and Conditions constitute a legally binding agreement made between you, whether personally or on behalf of an entity and [your business name], concerning your access to and use of our mobile application (the “Application”). You agree that by accessing the Application, you have read, understood, and agree to be bound by all of these Terms and Conditions Use. IF YOU DO NOT AGREE WITH ALL OF THESE TERMS AND CONDITIONS, THEN YOU ARE EXPRESSLY PROHIBITED FROM USING THE APPLICATION AND YOU MUST DISCONTINUE USE IMMEDIATELY.
            </Text>

            <Text style={styles.text}>
            Supplemental terms and conditions or documents that may be posted on the Application from time to time are hereby expressly incorporated herein by reference. We reserve the right, in our sole discretion, to make changes or modifications to these Terms and Conditions at any time and for any reason. We will alert you about any changes by updating the “Last updated” date of these Terms and Conditions and you waive any right to receive specific notice of each such change. It is your responsibility to periodically review these Terms and Conditions to stay informed of updates. You will be subject to, and will be deemed to have been made aware of and to have accepted, the changes in any revised Terms and Conditions by your continued use of the Application after the date such revised Terms are posted.
            </Text>

            <Text style={styles.text}>
            The information provided on the Application is not intended for distribution to or use by any person or entity in any jurisdiction or country where such distribution or use would be contrary to law or regulation or which would subject us to any registration requirement within such jurisdiction or country. Accordingly, those persons who choose to access the Application from other locations do so on their own initiative and are solely responsible for compliance with local laws, if and to the extent local laws are applicable.
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
    headings:{

            paddingHorizontal:widthToDp(6),
            fontFamily:'Nunito-Bold',
            fontSize:widthToDp(4),
            paddingVertical:widthToDp(4)

    },
    text:{
        paddingHorizontal:widthToDp(6),
        fontFamily:'Nunito-Regular',
        fontSize:widthToDp(4),
        paddingVertical:widthToDp(4)
    }
})