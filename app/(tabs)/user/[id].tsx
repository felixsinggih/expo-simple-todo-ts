import { Link, useLocalSearchParams } from 'expo-router'
import React from 'react'
import { View, Text } from 'react-native'

export default function UserPage() {
    const { id } = useLocalSearchParams<{ id: string }>()

    return (
        <View>
            <Text>User Page - {id}</Text>
            <Link href='/'>Back to home</Link>
        </View>
    )
}
