import React from 'react';
import 'react-native-gesture-handler';
import { useNavigation,NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';


import AllReviews from '../screens/AllReviews'
import Profile from '../screens/Profile'
import Profile2 from '../screens/Profile2'
import EditProfile from '../screens/EditProfile';
import Register from '../screens/Register';
import Register2 from '../screens/Register2';
import Reviews from '../screens/Reviews'
import TermsAndConditions from '../screens/TermsAndConditions';
import About from '../screens/About';
import Feedback from '../screens/Feedback';
import PrivacyPolicy from '../screens/PrivacyPolicy';
import Login from '../screens/Login';
import Login2 from '../screens/Login2';
import Login3 from '../screens/Login3';
import Login4 from '../screens/Login4';
import NoDataFound from '../screens/NoDataFound';
import UploadDocs from '../screens/UploadDocs';
import BookAppointment from '../screens/BookAppointment'
import SignUp from '../screens/SignUp';
import SignUp2 from '../screens/SignUp2';
import SignUp3 from '../screens/SignUp3';
import CreateAccount from '../screens/CreateAccount';
import PostReview from '../screens/PostReview';
import UserLogin from '../screens/UserLogin';
import UserLogin2 from '../screens/UserLogin2';
import Profile3 from '../screens/Profile3';



const Stack  = createStackNavigator();

const StackScreen =()=>(
<Stack.Navigator headerMode="none">
        <Stack.Screen  name="Profile3" component={Profile3}/>
        <Stack.Screen name="UserLogin2" component={UserLogin2}/>

        <Stack.Screen name="UserLogin" component={UserLogin}/>
        <Stack.Screen name="SignUp3" component={SignUp3}/>
        <Stack.Screen name="SignUp2" component={SignUp2}/>
        <Stack.Screen name="Login4" component={Login4}/>
        <Stack.Screen name="CreateAccount" component={CreateAccount}/>
        <Stack.Screen name="SignUp" component={SignUp}/>
        <Stack.Screen name="BookAppointment" component={BookAppointment}/>
        <Stack.Screen name="UploadDocs" component={UploadDocs}/>
        <Stack.Screen name="NoDataFound" component={NoDataFound}/>
        <Stack.Screen name="Login3" component={Login3}/>
        <Stack.Screen name="Login2" component={Login2}/>
        <Stack.Screen name="AllReviews" component={AllReviews}/>
        <Stack.Screen name="About" component={About}/>
        <Stack.Screen name="TermsAndConditions" component={TermsAndConditions}/>
        <Stack.Screen name="PrivatePolicy" component={PrivacyPolicy}/>
        <Stack.Screen name="Reviews" component={Reviews}/>
        <Stack.Screen name="Register2" component={Register2}/>
        <Stack.Screen name="Login" component={Login}/>
        <Stack.Screen name="Register" component={Register}/>
        <Stack.Screen name="EditProfile" component={EditProfile}/>
        <Stack.Screen name="Profile" component={Profile}/>
        <Stack.Screen name="Profile2" component={Profile2}/>
        <Stack.Screen name="Feedback" component={Feedback}/>
        <Stack.Screen name="PostReview" component={PostReview}/>


</Stack.Navigator>


);

export default function Routes() {

  return (
    <NavigationContainer>
	   <StackScreen/>

    </NavigationContainer>
  );
}