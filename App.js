import { TailwindProvider } from "tailwindcss-react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "./screens/HomeScreen";
import ResturantScreen from "./screens/ResturantScreen";

export default function App() {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <TailwindProvider>
        <Stack.Navigator>
          <Stack.Screen component={HomeScreen} name="Home" />
          <Stack.Screen component={ResturantScreen} name="Resturant" />
        </Stack.Navigator>
      </TailwindProvider>
    </NavigationContainer>
  );
}
