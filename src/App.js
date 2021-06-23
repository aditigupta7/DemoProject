import React, {useState, useEffect} from 'react';
import Route from './navigation/routes';
import Splash from './screens/Splash';

const App = () =>{

  const [loading, setLoading] = useState(true);



  useEffect(()=>{
    setTimeout(function(){
      setLoading(false);
    },2000);
  },[])

  if(loading){
    return(
      <Splash/>
    )
  }
  else{
    return(
      <Route/>
    )
  }
}

export default App;