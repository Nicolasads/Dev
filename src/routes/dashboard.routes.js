import React from 'react';
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import { AntDesign, FontAwesome, Ionicons } from "@expo/vector-icons";

import Home from '../pages/Home';
import Setting from '../pages/Setting';
import Message from '../pages/Message';
import Create from '../pages/Create';
import Search from '../pages/Search';

const Tab = createMaterialBottomTabNavigator();

export default function dashboardRoutes() {
    return(
        <Tab.Navigator barStyle={{backgroundColor: "#fff"}} >
            <Tab.Screen name="Home"  component={Home} options={{
                tabBarLabel: "Início",
                tabBarIcon: () => (
                    <AntDesign name="home" color="#424242" size={24}/>
                ),
            }} />
            <Tab.Screen name="Search" component={Search} navigationOptions={{headerVisible: false}} options={{
                tabBarLabel: "Pesquisar",
                tabBarIcon: () => (
                    <AntDesign name="search1" color="#424242" size={24}/>
                ),
            }} />
            <Tab.Screen name="Create" component={Create} options={{
                tabBarLabel: "Criar",
                tabBarIcon: () => (
                    <Ionicons name="ios-create" color="#424242" size={24}/>
                ),
            }} />
            <Tab.Screen name="Message" component={Message} options={{
                tabBarLabel: "Mensagens",
                tabBarIcon: () => (
                    <AntDesign name="message1" color="#424242" size={24}/>
                ),
            }} />
            <Tab.Screen name="Setting" component={Setting} options={{
                tabBarLabel: "Usuário",
                tabBarIcon: () => (
                    <FontAwesome name="user-circle-o" color="#424242" size={24}/>
                ),
            }} />
        </Tab.Navigator>
    );
}