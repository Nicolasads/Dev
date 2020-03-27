import React from 'react';
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import dashboardRoutes from './dashboard.routes';
import Joined from '../pages/Joined';

const Stack = createStackNavigator();

export default function Routes() {
    return(
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="DevClub" component={dashboardRoutes}
                 options={{
                     headerStyle: {
                        backgroundColor: '#7159c1',
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
                        backgroundColor: '#7159c1',
                     },
                     headerTintColor: '#ffff',
                 }} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}