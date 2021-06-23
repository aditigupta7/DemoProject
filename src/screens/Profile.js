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

export default function Profile({navigation}) {
    return (
      <View style={styles.container}>
          <View style={{flexDirection:'row',backgroundColor:COLORS.lightblue,paddingVertical:widthToDp(4),paddingHorizontal:widthToDp(4),justifyContent:'space-between'}}>
               <View >
                   <Ionicons name="arrow-back" size={25} color={COLORS.white}/>
                </View>
               <View>
                   <Text style={{fontSize:widthToDp(4),color:COLORS.white,fontFamily:'Nunito-Bold'}}>Profile</Text>
                </View>
                <View >
                    <Ionicons name="ios-settings-sharp" size={25} color={COLORS.white}/>
                </View>
           </View>

       <View style={styles.profileConatiner}>
                <View>
                <Image style={styles.profileImage}source={require('../images/profile.jpg')}/>
            </View>
            <View style={{alignItems:'center', marginTop:widthToDp(4)}}>
                <View style={{flexDirection:'row'}}>
                {/* <AntDesign name="user" size={30} color={COLORS.white} style={{marginTop:widthToDp(1),marginRight:widthToDp(2)}}/> */}
                <Text style={styles.name}>Serena Gomez</Text>
                </View>


                <View style={{flexDirection:'row',paddingTop:widthToDp(10)}}>
                <View style={styles.mailView}>
                <AntDesign name="mail" size={15} color={COLORS.white} style={styles.iconStyle}/>
                <Text style={styles.smallText}>serena@gmail.com</Text>
                </View>

                <View style={{
                paddingHorizontal:widthToDp(5),
                width:widthToDp(50),
                alignItems:'center'}}>

                <Feather name="phone" size={15} color={COLORS.white} style={styles.iconStyle}/>
                <Text style={styles.smallText}>9876543219</Text>
                </View>
                </View>


            </View>

        </View>
      <View style={{flexDirection:'column',marginTop:widthToDp(5)}}>


        <View style={styles.settingContainer}>
          <View style={styles.settingItem}>
            <Feather name="edit" size={24} color={COLORS.blue}/>
            <Text style={styles.text}>Edit Profile</Text>
          </View>
          <View style={styles.arrow}>
          <TouchableOpacity onPress={()=> navigation.navigate('EditProfile')}>
            <Entypo name="chevron-right"  size={17} color={COLORS.gray} />
            </TouchableOpacity>
          </View>
        </View>






        <View style={styles.settingContainer}>
          <View style={styles.settingItem}>
            <MaterialIcons name="logout" size={24} color={COLORS.blue}/>
            <Text style={styles.text}>Sign Out</Text>
          </View>
          <View style={styles.arrow}>
          <TouchableOpacity onPress={()=> navigation.navigate('Language')}>
            <Entypo name="chevron-right"  size={17} color={COLORS.dark} />
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
        fontSize:widthToDp(3.7),
        fontWeight: '300',
        marginHorizontal:widthToDp(3),
      },
      settingContainer:{
        flexDirection:'row',
        justifyContent:'space-between',
        backgroundColor:COLORS.white,
        borderBottomWidth:0.5,
        borderBottomColor:COLORS.dark,
        paddingVertical:widthToDp(3)
      },
      profileConatiner:{
        backgroundColor:COLORS.lightblue,
        paddingVertical:widthToDp(4),
        alignItems:'center',

    },
      name:{
        fontSize:widthToDp(4),
        color:COLORS.white,


      },
      settingItem:{
        marginHorizontal:widthToDp(7),
        flexDirection:'row',
        marginVertical:widthToDp(1)
      },
      arrow:{
        marginVertical:widthToDp(2),
        marginHorizontal:widthToDp(4)
      },
      smallText:{
        fontSize:widthToDp(3.5),
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