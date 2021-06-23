import {View,Text,StyleSheet,TouchableOpacity,Image} from 'react-native';
import React from 'react';
import COLORS from '../common/colors';
import Feather from 'react-native-vector-icons/Feather'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Entypo from 'react-native-vector-icons/Entypo';
import Ionicons from 'react-native-vector-icons/Ionicons'
import { heightToDp, widthToDp } from '../common/responsive';
import AntDesign from 'react-native-vector-icons/AntDesign'
import Zocial from 'react-native-vector-icons/Zocial'
import FontAwesome from 'react-native-vector-icons/FontAwesome'

export default function EditProfile({navigation}) {
    return (
      <View style={styles.container}>
          <View style={{flexDirection:'row',backgroundColor:COLORS.lightblue,paddingVertical:widthToDp(4),paddingHorizontal:widthToDp(4)}}>
               <View >
                   <Ionicons name="arrow-back" size={25} color={COLORS.white}/>
                </View>
               <View style={{marginLeft:widthToDp(29)}}>
                   <Text style={{fontSize:widthToDp(4),color:COLORS.white}}>Edit Profile</Text>
                </View>

           </View>

       <View style={styles.profileConatiner}>
                <View>
                <Image style={styles.profileImage}source={require('../images/profile.jpg')}/>
            </View>
            <View style={{alignItems:'center', marginTop:widthToDp(4)}}>
                <View style={{flexDirection:'row'}}>
                <Text style={styles.name}>Change Photo</Text>
                </View>


                <View style={{flexDirection:'row',paddingTop:widthToDp(10)}}>
                <View style={styles.mailView}>
                <AntDesign name="user" size={15} color={COLORS.white} style={styles.iconStyle}/>
                <Text style={styles.smallText}>My Profile</Text>
                </View>

                <View style={{
                paddingHorizontal:widthToDp(5),
                width:widthToDp(50),
                alignItems:'center'}}>

                <Ionicons name="ios-settings-outline" size={15} color={COLORS.white} style={styles.iconStyle}/>
                <Text style={styles.smallText}>Settings</Text>
                </View>
                </View>


            </View>

        </View>
      <View style={{flexDirection:'column',marginTop:widthToDp(5)}}>

        <View style={styles.settingContainer}>
          <View style={styles.settingItem}>
            <View style={{justifyContent:'center',alignItems:'center',width:widthToDp(8)}}>
            <FontAwesome name="user" size={28} color={COLORS.dark}/>
            </View>
            <View style={{marginLeft:widthToDp(4)}}>
            <Text style={styles.text}>Full Name</Text>
            <Text style={styles.text2}>Serena Gomez</Text>
            </View>
          </View>
          <View style={styles.arrow}>
          <TouchableOpacity onPress={()=> navigation.navigate('EditProfile')}>
            <Entypo name="chevron-right"  size={17} color={COLORS.gray} />
            </TouchableOpacity>
          </View>
        </View>


        <View style={styles.settingContainer}>
          <View style={styles.settingItem}>
          <View style={{justifyContent:'center',alignItems:'center',width:widthToDp(8)}}>
            <Zocial name="email" size={24} color={COLORS.dark}/>
          </View>
            <View style={{marginLeft:widthToDp(4)}}>
            <Text style={styles.text}>Email Address</Text>
            <Text style={styles.text2}>serenagomez@gmail.com</Text>
            </View>
          </View>
          <View style={styles.arrow}>
          <TouchableOpacity onPress={()=> navigation.navigate('EditProfile')}>
            <Entypo name="chevron-right"  size={17} color={COLORS.gray} />
            </TouchableOpacity>
          </View>
        </View>


        <View style={styles.settingContainer}>
          <View style={styles.settingItem}>
          <View style={{justifyContent:'center',alignItems:'center',width:widthToDp(8)}}>
            <MaterialIcons name="phone-iphone" size={24} color={COLORS.dark}/>
          </View>
            <View style={{marginLeft:widthToDp(4)}}>
            <Text style={styles.text}>Mobile Number</Text>
            <Text style={styles.text2}>9876543201</Text>
            </View>
          </View>
          <View style={styles.arrow}>
          <TouchableOpacity onPress={()=> navigation.navigate('EditProfile')}>
            <Entypo name="chevron-right"  size={17} color={COLORS.gray} />
            </TouchableOpacity>
          </View>
        </View>



        <View style={styles.settingContainer}>
          <View style={styles.settingItem}>
          <View style={{justifyContent:'center',alignItems:'center',width:widthToDp(8)}}>
            <FontAwesome name="location-arrow" size={24} color={COLORS.dark}/>
          </View>
            <View style={{marginLeft:widthToDp(4)}}>
            <Text style={styles.text}>Address</Text>
            <Text style={styles.text2}>New Delhi, India</Text>
            </View>
          </View>
          <View style={styles.arrow}>
          <TouchableOpacity onPress={()=> navigation.navigate('EditProfile')}>
            <Entypo name="chevron-right"  size={17} color={COLORS.gray} />
            </TouchableOpacity>
          </View>
        </View>





      </View>
    </View>
    );
  }


const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:COLORS.white
    },
    text:{
        fontSize:widthToDp(3.5),
        fontWeight: '300',
      },
      text2:{
        fontSize:widthToDp(3.5),
        fontWeight: '500',
        color:COLORS.lightgray
      },
      settingContainer:{
        flexDirection:'row',
        justifyContent:'space-between',
        backgroundColor:COLORS.white,
        borderBottomColor:COLORS.gainsboro,
        borderBottomWidth:0.5,
         paddingVertical:widthToDp(3),

      },
      profileConatiner:{
        backgroundColor:COLORS.lightblue,
        paddingVertical:widthToDp(4),
        alignItems:'center',

    },
      name:{
        fontSize:widthToDp(4),
        color:COLORS.white,
        fontWeight:'600'

      },
      settingItem:{
        marginHorizontal:widthToDp(4),
        flexDirection:'row',
        marginVertical:widthToDp(1),

      },
      arrow:{
        marginVertical:widthToDp(2),
        marginHorizontal:widthToDp(4)
      },
      smallText:{
        fontSize:widthToDp(3.2),
        color:COLORS.white,
      },
      iconStyle:{
        marginTop:widthToDp(1),
        marginRight:widthToDp(2),
        marginBottom:widthToDp(2),
        borderWidth:0.5,
        borderColor:COLORS.white,
        padding:widthToDp(2),
        borderRadius:50
      },
      profileImage:{
        borderRadius:50,
        resizeMode:'cover',
        width:widthToDp(25),
        height:heightToDp(13),
        borderWidth:2,
        borderColor:COLORS.white
      },
      mailView:{
        borderRightWidth:0.3,
        borderRightColor:COLORS.white,
        paddingHorizontal:widthToDp(5),
        width:widthToDp(50),
        alignItems:'center'
      }


  });