import React,{useEffect,useState} from 'react';;
import LoginScreen from './Screens/LoginScreen';
import SignUpScreen from './Screens/SignUpScreen';
import GenderScreen from './Screens/GenderScreen';
import FemaleStyleScreen from './Screens/FemaleStyleScreen';
import BarBerList from './Screens/BarberList';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import ARScreen from './Screens/ARScreen';
import Form from './Screens/Form';
import auth from '@react-native-firebase/auth';
const Stack = createStackNavigator();
function App(){
  const [initializing, setInitializing] = useState(true);
  const [user, setUser] = useState();

  function onAuthStateChanged(user) {
    setUser(user);
    if (initializing) setInitializing(false);
  }

  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber; // unsubscribe on unmount
  }, []);
  if (initializing) return null;
  if (!user) {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false
        }}>
        <Stack.Screen name="LoginScreen" component={LoginScreen} />
        <Stack.Screen name="SignUpScreen" component={SignUpScreen} />    
      </Stack.Navigator>
    </NavigationContainer>
  );
}

return (
  <NavigationContainer>
  <Stack.Navigator
    screenOptions={{
      headerShown: false
    }}>
<Stack.Screen name="GenderScreen" component={GenderScreen} /> 
<Stack.Screen name="FemaleStyleScreen" component={FemaleStyleScreen} />
<Stack.Screen name="BarberList"component={BarBerList}/>
<Stack.Screen name="ARScreen" component={ARScreen} /> 
<Stack.Screen name="Form" component={Form} />

</Stack.Navigator>
  </NavigationContainer>
);
}
export default App;