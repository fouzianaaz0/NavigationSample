import React, { Component } from "react";
import { Text, View , SafeAreaView , Image, TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack'

import { CustomHeader } from "./src/CustomHeader";
import { HomeScreen , SettingsScreen , SettingsScreenDetail , HomeScreenDetail } from "./src/tab/HomeScreen";



const Tab = createBottomTabNavigator();
const Stack = createStackNavigator ();

const optionHandler = () => ({
  headerShown : false
})

class App extends Component {

  HomeStack = () => 
  <Stack.Navigator initialRouteName = "Home">
    <Stack.Screen name="Home" component={HomeScreen} options = {optionHandler}/>
    <Stack.Screen name="HomeDetail" component={HomeScreenDetail} options = {optionHandler}/>
  </Stack.Navigator>

SettingStack = () => 
<Stack.Navigator initialRouteName = "Settings">
  <Stack.Screen name="Setting" component={SettingsScreen} options = {optionHandler}/>
  <Stack.Screen name="SettingsDetail" component={SettingsScreenDetail} options = {optionHandler}/>
</Stack.Navigator>

  render(){
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Home" component={this.HomeStack} />
        <Tab.Screen name="Settings" component={this.SettingStack} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
}

export default App;