import React,{useState} from 'react'
import { View, Text,StyleSheet,TextInput,TouchableOpacity } from 'react-native'
import COLORS from '../common/colors'
import {widthToDp,heightToDp} from '../common/responsive';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Fontisto from 'react-native-vector-icons/Fontisto';
import Feather from 'react-native-vector-icons/Feather';
import Entypo from 'react-native-vector-icons/Entypo'
import Header from '../components/Header';

export default function Feedback({navigation}) {
    const [name,setName] = useState('')
    const [email,setEmail] = useState('')
    const [feedback, setFeedback] = useState('')
    return (
        <View style={styles.container}>


        <Header heading="Feedback"/>

        <View style={{alignItems:'center',marginBottom:widthToDp(5)}}>
                <Text style={styles.text}>We would love to hear your thoughts, suggestions, concerns or problems with anything so we can improve!</Text>

            </View>


            <View style={styles.inputSection}>
                <Feather name="user" size={20} color={COLORS.dark} style={styles.inputIcon}/>
                <TextInput
                    style={styles.input}
                    placeholder="Name"
                    value={name}
                    onChangeText={(text)=> setName(text)}
                    underlineColorAndroid="transparent"
                />
            </View>

           <View style={styles.inputSection}>
                <Fontisto name="email" size={20} color={COLORS.dark} style={styles.inputIcon}/>
                <TextInput
                    style={styles.input}
                    placeholder="Email Address"
                    underlineColorAndroid="transparent"
                />
            </View>


           <View style={styles.inputSection}>
                <Feather name="message-square" size={20} color={COLORS.dark} style={styles.inputIcon}/>
                <TextInput
                    style={[styles.input,{height:heightToDp(15),textAlignVertical:'top'}]}
                    placeholder="Describe Your Feedback"
                    value={feedback}
                    onChangeText={(text) => setFeedback(text)}
                    underlineColorAndroid="transparent"
                />
            </View>


            {/* <View style={styles.inputSection}>
                <Entypo name="attachment" size={20} color={COLORS.dark} style={styles.inputIcon}/>
                <TextInput
                    style={styles.input}
                    underlineColorAndroid="transparent"
                />
            </View>
 */}


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
        backgroundColor:COLORS.white,


    },
    inputSection: {
        marginTop:widthToDp(4),
        marginLeft:widthToDp(10),
        marginRight:widthToDp(5),
        flexDirection: 'row',
        backgroundColor: '#fff',
        paddingHorizontal:widthToDp(3),
        width:'80%',
        borderColor:COLORS.darkgray,
        borderWidth:1,
        fontFamily:'Nunito-Regular',
        borderRadius:10

    },
    inputIcon: {
        paddingLeft: widthToDp(3),
        paddingRight:widthToDp(2),
        paddingVertical:widthToDp(3)
    },

heading:{

    backgroundColor:COLORS.black,
    width:widthToDp(100),
    height:heightToDp(30),
    alignItems:'center',
    paddingVertical:widthToDp(8),
},
headingText:{
    fontSize:widthToDp(6),
    fontWeight:'600',
    color:COLORS.white,

},
Btn:{
    marginVertical:widthToDp(10),
    marginHorizontal:widthToDp(10),
    backgroundColor:COLORS.black,
    shadowOffset:{width:0,height:9},
    shadowOpacity:1,
    shadowRadius:20,
    borderRadius:30,
    alignItems:'center',
    width:'80%',
    height:heightToDp(7),
    shadowColor: '#000000',
    shadowOffset: {
    width: 0,
    height: 3
    },
    shadowRadius: 5,
    shadowOpacity: 1.0,
    elevation:10

    },
    BtnText:{
    fontSize:widthToDp(4.5),
    paddingVertical:widthToDp(3),
    paddingHorizontal:widthToDp(6),
    color:COLORS.white,
    fontFamily:'Nunito-Bold'
},
input:{
    fontFamily:'Nunito-Regular',
    fontSize:widthToDp(3.5)
},
text:{
    fontSize:widthToDp(3),
    marginTop:widthToDp(3),
    textAlign:'left',
    marginHorizontal:widthToDp(10),
    fontFamily:'Nunito-Regular'
}

})