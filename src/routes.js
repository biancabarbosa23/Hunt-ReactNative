import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'

import Main from './pages/main'
import Product from './pages/product'


const Stack = createStackNavigator()

export default function MainStack() {
    return (
        <Stack.Navigator  >
            <Stack.Screen name="JSHunt"
                component={Main}
                options={
                    { title: 'JSHunt' },
                    {
                        headerStyle: { backgroundColor: "#DA552F" },
                        headerTintColor: "#FFF"
                    }}
            />
            <Stack.Screen name="Product"
                component={Product}
                options={
                    {
                        headerStyle: { backgroundColor: "#DA552F" },
                        headerTintColor: "#FFF"
                    }}
            />

        </Stack.Navigator>
    )
}

