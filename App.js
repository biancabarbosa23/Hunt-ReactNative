import React from 'react'
import { NavigationContainer } from '@react-navigation/native'

import MainStack from './src/routes'
import './src/config/StatusBarConfig'

export default function App() {
    return (
        <NavigationContainer>
            <MainStack />
        </NavigationContainer>
    )
}


