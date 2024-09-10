import { View, Text } from 'react-native'
import React from 'react'
import { Stack } from 'expo-router'
import { StatusBar } from 'expo-status-bar'
Stack

const Auth_layout = () => {
  return (
    <>
    <Stack>
      <Stack.Screen 
        name='sign-in'
        options={{
          headerShown: false
        }}
      />

      <Stack.Screen 
        name='sign-up'
        options={{
          headerShown: false
        }}
      />
      
    </Stack>

    <StatusBar backgroundColor='#161611'
    style='light'/>
    </>
  )
}

export default Auth_layout