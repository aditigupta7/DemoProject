import {View,Text,StyleSheet,TouchableOpacity,Image, ScrollView} from 'react-native';
import React from 'react';
import COLORS from '../common/colors';
import Feather from 'react-native-vector-icons/Feather'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Entypo from 'react-native-vector-icons/Entypo';
import Ionicons from 'react-native-vector-icons/Ionicons'
import { heightToDp, widthToDp } from '../common/responsive';
import AntDesign from 'react-native-vector-icons/AntDesign'

export default function Profile3({navigation}) {
    return (

      <View style={styles.container}>
          <View style={{flexDirection:'row',backgroundColor:COLORS.white,paddingVertical:widthToDp(4),paddingHorizontal:widthToDp(4),}}>
               <View >
                   <Ionicons name="arrow-back" size={25} color={COLORS.dark}/>
                </View>
               <View style={{marginLeft:widthToDp(33)}}>
                   <Text style={{fontSize:widthToDp(4),color:COLORS.dark,fontFamily:'Nunito-Bold'}}>Profile</Text>
                </View>

           </View>


       <View style={styles.profileConatiner}>
            <View>
                <Image style={styles.profileImage}source={require('../images/profile.jpg')}/>
            </View>
            <View style={{ marginTop:widthToDp(2),marginLeft:widthToDp(8)}}>
                <View>
                <Text style={styles.name}>Serena Gomez</Text>
                <View style={{flexDirection:'row',marginVertical:widthToDp(2)}}>
                <Text style={{fontFamily:'Nunito-Bold'}}>Edit </Text>
                <AntDesign name="edit" size={18} color={COLORS.dark}/>
                </View>
                </View>
          </View>

        </View>



      <View style={{flexDirection:'column',
      marginTop:widthToDp(5),backgroundColor:COLORS.white}}>
        <View style={styles.settingContainer}>
          <View style={styles.settingItem}>
          <View style={{flexDirection:'row',width:widthToDp(73)}}>
          <View style={[styles.iconBox,{backgroundColor:'#3370d2'}]}>
            <AntDesign name="user" size={24} color={COLORS.white}/>
            </View>
            <View style={{marginLeft:widthToDp(4),alignItems:'center',justifyContent:'center'}}>
            <Text style={styles.text}>Account Infromation</Text>
            </View>
          </View>
          <View style={styles.arrow}>
            <TouchableOpacity onPress={()=> navigation.navigate('AccountInformation')}>
            <Entypo name="chevron-right"  size={17} color={COLORS.lightgray} />
            </TouchableOpacity>
          </View>
          </View>
        </View>


        <View style={styles.settingContainer}>
          <View style={styles.settingItem}>
         <View style={{flexDirection:'row',width:widthToDp(73)}}>
          <View style={[styles.iconBox,{backgroundColor:'#5ec86b'}]}>
            <Feather name="shopping-cart" size={24} color={COLORS.white}/>
            </View>
            <View style={{marginLeft:widthToDp(4),alignItems:'center',justifyContent:'center'}}>
            <Text style={styles.text}>My Orders</Text>
            </View>
            </View>
            <View style={styles.arrow}>
            <TouchableOpacity onPress={()=> navigation.navigate('MyOrders')}>
            <Entypo name="chevron-right"  size={17} color={COLORS.lightgray} />
            </TouchableOpacity>
          </View>
          </View>
        </View>



        <View style={styles.settingContainer}>
          <View style={styles.settingItem}>
          <View style={{flexDirection:'row',width:widthToDp(73)}}>
          <View style={[styles.iconBox,{backgroundColor:'#ec9c1f'}]}>
            <MaterialCommunityIcons name="credit-card" size={24} color={COLORS.white}/>
          </View>
            <View style={{marginLeft:widthToDp(4),alignItems:'center',justifyContent:'center'}}>
            <Text style={styles.text}>Payment Method</Text>
            </View>
            </View>
            <View style={styles.arrow}>
            <TouchableOpacity onPress={()=> navigation.navigate('PaymentMethod')}>
            <Entypo name="chevron-right"  size={17} color={COLORS.lightgray} />
            </TouchableOpacity>
          </View>
          </View>
        </View>

        <View style={styles.settingContainer}>
          <View style={styles.settingItem}>
          <View style={{flexDirection:'row',width:widthToDp(73)}}>
            <View style={[styles.iconBox,{backgroundColor:'#71bee8'}]}>
            <Ionicons name="ios-location" size={24} color={COLORS.white}/>
            </View>
            <View style={{marginLeft:widthToDp(4),alignItems:'center',justifyContent:'center'}}>
            <Text style={styles.text}>Delivery Address</Text>
            </View>
           </View>
            <View style={styles.arrow}>
            <TouchableOpacity onPress={()=> navigation.navigate('DeliveryAddress')}>
            <Entypo name="chevron-right"  size={17} color={COLORS.lightgray} />
            </TouchableOpacity>
          </View>
          </View>
        </View>
      </View>

      <View style={{flexDirection:'column',
      backgroundColor:COLORS.white}}>


        <View style={styles.settingContainer}>
          <View style={styles.settingItem}>
          <View style={{flexDirection:'row',width:widthToDp(73)}}>
          <View style={[styles.iconBox,{backgroundColor:'#f8d842'}]}>
            <Ionicons name="chatbubble-ellipses-sharp" size={24} color={COLORS.white}/>
            </View>
            <View style={{marginLeft:widthToDp(4),alignItems:'center',justifyContent:'center'}}>
            <Text style={styles.text}>Contact With Us</Text>
            </View>
          </View>
          <View style={styles.arrow}>
            <TouchableOpacity onPress={()=> navigation.navigate('ContactUs')}>
            <Entypo name="chevron-right"  size={17} color={COLORS.lightgray} />
            </TouchableOpacity>
          </View>
          </View>
        </View>


        <View style={styles.settingContainer}>
          <View style={styles.settingItem}>
         <View style={{flexDirection:'row',width:widthToDp(73)}}>
          <View style={[styles.iconBox,{backgroundColor:COLORS.purple}]}>
            <MaterialIcons name="info" size={24} color={COLORS.white}/>
            </View>
            <View style={{marginLeft:widthToDp(4),alignItems:'center',justifyContent:'center'}}>
            <Text style={styles.text}>About Us</Text>
            </View>
            </View>
            <View style={styles.arrow}>
            <TouchableOpacity onPress={()=> navigation.navigate('AboutUs')}>
            <Entypo name="chevron-right"  size={17} color={COLORS.lightgray} />
            </TouchableOpacity>
          </View>
          </View>
        </View>




        <View style={styles.settingContainer}>
          <View style={styles.settingItem}>
          <View style={{flexDirection:'row',width:widthToDp(73)}}>
            <View style={[styles.iconBox,{backgroundColor:'#000'}]}>
            <MaterialIcons name="logout" size={24} color={COLORS.white}/>
            </View>
            <View style={{marginLeft:widthToDp(4),alignItems:'center',justifyContent:'center'}}>
            <Text style={styles.text}>Sign Out</Text>
            </View>
           </View>
            <View style={styles.arrow}>
            <TouchableOpacity onPress={()=> navigation.navigate('EditProfile')}>
            <Entypo name="chevron-right"  size={17} color={COLORS.lightgray} />
            </TouchableOpacity>
          </View>
          </View>
        </View>
        </View>

    </View>
    );
  }


const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#fafafa'

    },
    text:{
        fontSize:widthToDp(3.5),
        fontFamily:'Nunito-Bold'
      },
      text2:{
        fontSize:widthToDp(3.5),
        fontFamily:'Nunito-Bold',
        color:COLORS.lightgray
      },
      settingContainer:{
        flexDirection:'row',
        justifyContent:'space-between',
        borderBottomColor:COLORS.gainsboro,
        borderBottomWidth:0.5,
         paddingVertical:widthToDp(1),
         paddingHorizontal:widthToDp(4)

      },
      profileConatiner:{
        backgroundColor:'#fafafa',
        paddingVertical:widthToDp(5),
        paddingHorizontal:widthToDp(4),
        alignItems:'center',
        flexDirection:'row'
    },
      name:{
        fontSize:widthToDp(4),
        color:COLORS.dark,
        fontFamily:'Nunito-Bold'

      },
      settingItem:{
        marginHorizontal:widthToDp(1),
        flexDirection:'row',
        marginVertical:widthToDp(1),
        justifyContent:'space-between'

      },
      arrow:{
        marginVertical:widthToDp(2),
        marginHorizontal:widthToDp(12)
      },
      smallText:{
        fontSize:widthToDp(3.2),
        color:COLORS.dark,
        fontFamily:'Nunito-Bold'
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
        width:widthToDp(40),
        alignItems:'center'
      },
      iconBox:{
        width:widthToDp(10),
        justifyContent:'center',
        alignItems:'center',
        padding:widthToDp(1.5),

      }


  });