import { Link, useLocalSearchParams } from 'expo-router'
import React from 'react'
import { View, Text } from 'react-native'
import { mainStyles } from '../../../styles/main'

export default function UserPage() {
    const { id } = useLocalSearchParams<{ id: string }>()

    return (
        <View>
            <Text style={mainStyles.header}>User Page - {id}</Text>

            <Link style={mainStyles.button} href='/'>Back to home</Link>
        </View>
    )
}
