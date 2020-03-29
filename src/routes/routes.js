import React from 'react';
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import dashboardRoutes from './dashboard.routes';
import Joined from '../pages/Joined';
import User from '../pages/User';

const Stack = createStackNavigator();

export default function Routes() {
    return(
    <SafeAreaProvider>
        <NavigationContainer>
            <Stack.Navigator headerMode="none">
                <Stack.Screen name="DevClub" component={dashboardRoutes}
                 options={{
                     headerStyle: {
                        backgroundColor: '#7159c1',
                        height: 70,
                     },
                     headerTintColor: '#ffff',
                     headerTitleAlign: 'center',
                     headerTitleStyle: {
                        fontWeight: '600',
                        letterSpacing: 1,
                     },
                 }} />
                 <Stack.Screen name="Grupo" component={Joined} options={{
                     headerStyle: {
                        backgroundColor: '#3FA500',
                        height: 80,
                     },
                     headerTintColor: '#fff',
                 }}
                 />
                 <Stack.Screen name="Usuário" component={User} options={{
                     headerStyle: {
                        backgroundColor: '#3FA500',
                        height: 80,
                     },
                     headerTintColor: '#fff',
                 }}
                 />
            </Stack.Navigator>
        </NavigationContainer>
    </SafeAreaProvider>
    );
}