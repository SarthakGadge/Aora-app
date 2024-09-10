import { View, Text, Image } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { GestureHandlerRootView, ScrollView } from 'react-native-gesture-handler'
import {images} from '../../constants' 
import FormField from '../../components/FormField'
import CustomButton from '../../components/CustomButton'
import { Link } from 'expo-router'

const SignIn = () => {
  const [form, setForm] = useState({
    email: '',
    password: ''
  })

  const [isSubmitting, setisSubmitting] = useState(false)

  const submit = () => {

  }
  
  return (
    <SafeAreaView className='bg-primary h-full'>
      <GestureHandlerRootView>
        <ScrollView>
          <View className='w-full min-h-[85vh] h-full px-4 my-6 justify-center'>
            <Image 
            source={images.logo}
            resizeMode='contain'
            className='w-[115px] h-[35px]'
            />
            <Image 
            source={images.path}
            resizeMode='contain'
            className='w-[136px] h-[15px] bottom-[-80px] right-[-59px]'
            />

            <Text className='text-2xl text-white text-semibold mt-10 font-psemibold'>Log into <Text className={`text-secondary-200`}>Aora</Text></Text>
          
            <FormField 
              title='E-mail'
              value={form.email}
              handleChangeText={(e) => setForm({...form, email: e})}
              otherStyles='mt-7'
              keyboardType='email-address'
            />
            
            <FormField 
              title='Password'
              value={form.password}
              handleChangeText={(e) => setForm({...form, password: e})}
              otherStyles='mt-7'
            />
            <CustomButton 
              title='Sign-In'
              handlePress={submit}
              containerStyles={`mt-7`}
              isLoading={isSubmitting}
            />
             <View className={`justify-center flex-row pt-5 gap-2`}>
              <Text className={`text-gray-100 font-pregular`}>
                Don't have an account?
              </Text>
              <Link href={`/sign-up`} className='text-secondary underline font-pregular'>Sign Up</Link>
             </View>
          </View>
        </ScrollView>
      </GestureHandlerRootView>

    </SafeAreaView>
  )
}

export default SignIn