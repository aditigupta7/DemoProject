import React,{useState} from 'react';
import {TouchableOpacity,Image,View,StyleSheet,Text, TextInput} from 'react-native';
import { widthToDp,heightToDp } from '../common/responsive';
import COLORS from '../common/colors'
import AntDesign from 'react-native-vector-icons/AntDesign'
import Header from '../components/Header'

const PostReview = () => {
    const [review,setReview] = useState('')

  const [defaultRating, setDefaultRating] = useState(2);
  // To set the max number of Stars
  const [maxRating, setMaxRating] = useState([1, 2, 3, 4, 5]);

  // Filled Star. You can also give the path from local
  const starImageFilled =
    'https://raw.githubusercontent.com/AboutReact/sampleresource/master/star_filled.png';
  // Empty Star. You can also give the path from local
  const starImageCorner =
    'https://raw.githubusercontent.com/AboutReact/sampleresource/master/star_corner.png';

    return (
        <View  style={styles.container}>
            <Header heading="Write Your Review"/>
            <Text style={styles.textStyle}>
          What do you think?
        </Text>
        <Text style={styles.textStyleSmall}>
          Please give your reviews by clicking on the stars below.
        </Text>


        <Text style={styles.textStyle}>
        {/* To show the rating selected */}
        {defaultRating} / {Math.max.apply(null, maxRating)}
        </Text>

      <View style={styles.customRatingBarStyle}>

        {maxRating.map((item, key) => {
          return (
            <TouchableOpacity
              activeOpacity={0.7}
              key={item}
              onPress={() => setDefaultRating(item)}>
              <Image
                style={styles.starImageStyle}
                source={
                  item <= defaultRating
                    ? {uri: starImageFilled}
                    : {uri: starImageCorner}
                }
              />
            </TouchableOpacity>
          );
        })}




      </View>
      <View style={styles.inputSection}>
      <AntDesign name="edit" size={20} color={COLORS.dark} style={styles.inputIcon}/>
<TextInput
    style={[styles.input,{height:heightToDp(15),textAlignVertical:'top'}]}
    placeholder="Tell us about your experience"
    value={review}
    onChangeText={(text) => setReview(text)}
    underlineColorAndroid="transparent"
    multiline
/>
</View>
        <View>
            <TouchableOpacity style={styles.Btn} onPress={()=> navigation.navigate('Home')}>
                <Text style={styles.BtnText}>Submit</Text>
            </TouchableOpacity>

      </View>
      </View>
    );
  };

  export default PostReview;


  const styles = StyleSheet.create({
      container:{
            flex:1,
            backgroundColor:COLORS.white
      },

  customRatingBarStyle: {
    justifyContent: 'center',
    flexDirection: 'row',
    marginTop: 30,
    flexDirection:'row'
  },
  starImageStyle: {
    width: 40,
    height: 40,
    resizeMode: 'cover',
  },
  textStyle: {
    textAlign: 'center',
    fontSize: widthToDp(6),
    color: '#000',
    fontFamily:'Nunito-Bold',
    marginTop: widthToDp(5),
  },
  textStyleSmall: {
    textAlign: 'center',
    fontSize: 16,
    color: '#000',
    marginTop: widthToDp(5),
    fontFamily:'Nunito-Regular',
    marginHorizontal:widthToDp(10)
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
input:{
    fontFamily:'Nunito-Regular',
    fontSize:widthToDp(3.5),
    width:widthToDp(60)
},
inputIcon: {
    paddingLeft: widthToDp(3),
    paddingRight:widthToDp(2),
    paddingVertical:widthToDp(3)
},
Btn:{
    marginVertical:widthToDp(10),
    marginHorizontal:widthToDp(10),
    backgroundColor:COLORS.lightorange,
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

});