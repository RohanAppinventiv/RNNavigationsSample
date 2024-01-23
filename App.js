import { NavigationContainer } from "@react-navigation/native"
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import ListingScreen from "./src/screens/Screen1";
import FormScreen from "./src/screens/Screen2";
import { Provider } from "react-redux";
import store from "./src/store/store";

const Stack = createNativeStackNavigator();
export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="listing">
          <Stack.Screen name="listing"
            options={{
              title: 'Listing'
            }} component={ListingScreen}
          />

          <Stack.Screen name="form" options={{
            title: 'Form'
          }} component={FormScreen} />


        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}