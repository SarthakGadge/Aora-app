import { View, Text, Image, Alert } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { GestureHandlerRootView, ScrollView } from 'react-native-gesture-handler'
import {images} from '../../constants' 
import FormField from '../../components/FormField'
import CustomButton from '../../components/CustomButton'
import { Link } from 'expo-router'
import {createUser} from '../../lib/appwrite' 


const SignUp = () => {
  const [form, setForm] = useState({
    username:'',
    email: '',
    password: ''
  })

  const [isSubmitting, setisSubmitting] = useState(false)

  const submit = async () => {

    if(form.username === "" || form.email === "" || form.password === ""){
      Alert.alert('error', 'Please fill in all the fields')
    }

    setisSubmitting(true)
    
    try {
      const result = await createUser(form.email, form.password, form.username)

      router.replace('/home')
      
    } catch (error) {
      Alert.alert('Error', error.message)
      
    } finally{
      setisSubmitting(false)
    }
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
            className='w-[136px] h-[15px] bottom-[-80px] right-[-85px]'
            />

            <Text className='text-2xl text-white text-semibold mt-10 font-psemibold'>Sign up to <Text className={`text-secondary-200`}>Aora</Text></Text>
          
            <FormField 
              title='Username'
              value={form.username}
              handleChangeText={(e) => setForm({...form, username: e})}
              otherStyles='mt-10'
            />
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
              title='Sign-Up'
              handlePress={submit}
              containerStyles={`mt-7`}
              isLoading={isSubmitting}
            />
             <View className={`justify-center flex-row pt-5 gap-2`}>
              <Text className={`text-gray-100 font-pregular`}>
                Have have an account already?
              </Text>
              <Link href={`/sign-in`} className='text-secondary underline font-pregular'>Sign In</Link>
             </View>
          </View>
        </ScrollView>
      </GestureHandlerRootView>

    </SafeAreaView>
  )
}

export default SignUp
