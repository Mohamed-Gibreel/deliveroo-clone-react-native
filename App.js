import { TailwindProvider } from "tailwindcss-react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "./screens/HomeScreen";
import ResturantScreen from "./screens/ResturantScreen";
import { Provider } from "react-redux";
import { store } from "./store";
import BasketScreen from "./screens/BasketScreen";
import PrepareOrderScreen from "./screens/PrepareOrderScreen";

export default function App() {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Provider store={store}>
        <TailwindProvider>
          <Stack.Navigator>
            <Stack.Screen component={HomeScreen} name="Home" />
            <Stack.Screen component={ResturantScreen} name="Resturant" />
            <Stack.Screen
              component={BasketScreen}
              name="Basket"
              options={{
                presentation: "modal",
                headerShown: false,
              }}
            />
            <Stack.Screen
              component={PrepareOrderScreen}
              name="PrepareOrderScreen"
              options={{
                presentation: "fullScreenModal",
                headerShown: false,
              }}
            />
          </Stack.Navigator>
        </TailwindProvider>
      </Provider>
    </NavigationContainer>
  );
}
