import React from 'react'
import {SafeAreaView, Text, Image} from 'react-native'
import { Link, router, Redirect } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { ScrollView, GestureHandlerRootView } from 'react-native-gesture-handler';
import { View } from 'react-native';
import {images} from '../constants';
import CustomButton from '../components/CustomButton';



export default function App(){
    return(
        <GestureHandlerRootView> 
            <SafeAreaView className="bg-primary h-full">
                <ScrollView contentContainerStyle={{ height: '100%' }}>
                    <View className='w-full flex items-center justify-center h-full px-4'>
                        <Image 
                            source={images.logo}
                            className="w-[130px] h-[84px]"
                            resizeMode='contain'
                        />
                        <Image 
                            source={images.cards}
                            className="max-w-[380px] w-full h-[298px]"
                            resizeMode='contain'
                         />

                        <View className='relative mt-5'>
                            <Text className='text-3xl text-white font-bold text-center'>
                                Discover endless possibilities with{' '}
                                <Text className='text-secondary-200'>Aora</Text>
                            </Text>
                            <Image 
                            source={images.path}
                            className='w-[136px] h-[15px] absolute -bottom-2 -right-8'
                            resizeMode='contain'
                            />

                         </View>
                         <Text className='text-sm font-pregular text-gray-100 mt-7 text-center'>Where creativity meets innovations:
                            Embark on a journey of limitless exploration with Aora
                         </Text>
                         <CustomButton 
                          title='Continue with E-mail'
                          handlePress={() => router.push('/sing-in')}
                          containerStyles='w-full mt-7'

                         />
                    </View>
                </ScrollView>
                <StatusBar backgroundColor='#161622' style='light'/>
            </SafeAreaView>
        </GestureHandlerRootView>


    );
}
