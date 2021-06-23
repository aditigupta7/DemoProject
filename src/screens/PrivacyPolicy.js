import React from 'react'
import { View, Text, StyleSheet, ScrollView } from 'react-native'
import COLORS from '../common/colors'
import { widthToDp } from '../common/responsive'
import Header from '../components/Header'
import Entypo from 'react-native-vector-icons/Entypo'

export default function PrivacyPolicy({navigation}) {
    return (
        <View style={styles.container}>
           <Header heading="Privacy Policy"/>
           <ScrollView>
           <Text style={styles.text}>
           Welcome to XYZ Mobile Application. This section pertains to the Privacy Policy of the website and native mobile applications. We would like to inform that our privacy policy is subject to change without intimation and you shall be required to review the same regularly.
           </Text>

           <Text style={styles.text}>
           The protection and security of your personal information is one of the top priorities. This Privacy Policy discloses practice with respect to the information collected from the users of the Website or native mobile applications. Luxury Online Retail India Private Limited is authorized to use  native mobile applications for commercial purposes by virtue of a Platform License Agreement.
           </Text>

          <Text style={styles.text}>
           By using native mobile applications you agree to accept the terms of this Privacy Policy and native mobile applications's Terms of Use. By accessing or using native mobile applications you expressly consent to our use and disclosure of your personal information in any manner described in this Privacy Policy. This Privacy Policy extends to both, users who visit the Website or native mobile applications but do not transact business on the Website or native mobile applications as well as users who are registered on the Website or native mobile applications. "Personal Information" refers to any information that identifies or can be used to identify, contact or locate the person, to whom such information pertains including, but not limited to, name, address, phone number, fax number, email address, financial profiles, identification number, credit card information etc.
           </Text>

           <Text style={styles.text}>
            By accepting this privacy policy, you authorize  to collect, store and use any information that you provide on our Website or native mobile applications. The information collected by us are:</Text>
          <View stype={{flexDirection:'row'}}>

           <Text style={styles.text}>
          1. All information entered by you on our website and native mobile applications such as your name, address, contact number, email ID , and such other information sent by you via emails to our email ID.
           </Text>
           </View>
           <Text style={styles.text}>
           2. Information collected by means of cookies that are installed on your hard drive.
          </Text>

          <Text style={styles.text}>
          3. Information such as the IP Address of your computer, the server from which you are accessing our website and native mobile applications, details of web browser and operating system used to access our website or native mobile applications, date, time and place of accessing of our website and native mobile applications etc.
          </Text>
          <Text style={styles.text}>
          BY USING  NATIVE MOBILE APPLICATIONS, YOU SIGNIFY YOUR AGREEMENT TO THE TERMS OF THIS PRIVACY POLICY, RESERVES THE RIGHT, IN OUR SOLE DISCRETION, TO CHANGE, MODIFY, ADD OR DELETE PORTIONS OF THE TERMS OF THIS PRIVACY POLICY AT ANY TIME.
          </Text>

          <Text style={styles.text}>
          If you have any questions about this Privacy Policy, please feel free to [Contact Us] through our Website or native mobile applications or write to us at contactus@xyz.com

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
