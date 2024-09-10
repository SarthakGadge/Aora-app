import { View, Text, Image, TextInput, Touchable } from 'react-native'
import React, { useState } from 'react'
import { isPropertySignature } from 'typescript'
import { TouchableOpacity } from 'react-native'
import { GestureHandlerRootView } from 'react-native-gesture-handler'
import { images, icons } from '../constants'


const FormField = ({ title, value, placeholder, handleChangeText, otherStyles, ...props }) => {
    const [showPassword, setshowPassword] = useState(false)
    return (
        <View className={`space-y-2 ${otherStyles}`}>
            <Text className='text-gray-100 text-base font-pmedium'>{title}</Text>
            <View className='flex-row border-2 border-black-200 w-full h-16 px-4 bg-black-100 rounded-2xl focus:border-secondary items-center'>
                <TextInput 
                  className="flex-1 text-white font-psemibold text-base"
                  value={value}
                  placeholder={placeholder}
                  placeholderTextColor='#7b7b8b'
                  onChange={handleChangeText}
                  secureTextEntry={title === 'Password' && !showPassword}
                  
                />

                {title === 'Password' && (
                    <TouchableOpacity onPress={() => 
                        setshowPassword(!showPassword)}>
                        <Image 
                            source={!showPassword ? icons.eye : icons.eyehide}
                            resizeMode='contain'
                            className="h-6 w-6"
                        />

                    </TouchableOpacity>
                )}

            </View>
        </View>
        
    )
}

export default FormField