import { NavigationContainer } from "@react-navigation/native"
import Screen1 from "./src/screens/Screen1"
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Screen2 from "./src/screens/Screen2";
import Screen3 from "./src/screens/Screen3";
import Screen4 from "./src/screens/Screen4";

const Stack = createNativeStackNavigator();
export default function App(){
 return(
  <NavigationContainer>
    <Stack.Navigator initialRouteName="Screen1">
      <Stack.Screen name="Screen1" component={Screen1}/>
      <Stack.Screen name="Screen2" component={Screen2}/>
      <Stack.Screen name="Screen3" component={Screen3}/>
      <Stack.Screen name="Screen4" component={Screen4}/>

    </Stack.Navigator>
  </NavigationContainer>
  );
}