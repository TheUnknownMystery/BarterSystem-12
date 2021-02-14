import * as React from 'react'
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native'
import { createAppContainer, createSwitchNavigator } from 'react-navigation'
import { BottomTabBar, createBottomTabNavigator } from 'react-navigation-tabs'
import LoginScreen from './Screens/Logins'
import Home from './Screens/Home'
import Exchange from './Screens/Exchange'



export default class App extends React.Component {
  render() {
    return (


      <AppContainer />


    )
  }
}

const BottomTab = createBottomTabNavigator(
  {

    HomePage: { screen: Home },
    ExchangePage: { screen: Exchange },

  },
  {

    defaultNavigationOptions: ({ navigation }) => ({
      tabBarIcon: () => {

        const routeName = navigation.state.routeName;

        if (routeName === "HomePage") {

          return (

            <Image

              style={{ width: 30, height: 30 }}
              source={require("./assets/Home.png")}

            />

          )
        }

        else if (routeName === "ExchangePage") {
          return (

            <Image

              style={{ width: 30, height: 30 }}
              source={require("./assets/E.png")}

            />

          )
        }
      }
    })
  })

const SwitchNavigator = createSwitchNavigator({

  LoginScreen: { screen: LoginScreen },
  TabNavigator: { screen: BottomTab },

});

const AppContainer = createAppContainer(SwitchNavigator)