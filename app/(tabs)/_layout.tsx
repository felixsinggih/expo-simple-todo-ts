import { Tabs } from 'expo-router';
import React from 'react';
import Ionicons from '@expo/vector-icons/Ionicons';

export default function TabsLayout() {
    return <Tabs>
        <Tabs.Screen name="index" options={{
            title: 'Home',
            tabBarIcon(props) {
                return <Ionicons name="home" size={24} color={props.color} />
            },
        }} />
        <Tabs.Screen name="user/[id]" options={{
            title: 'User',
            tabBarIcon(props) {
                return <Ionicons name="people" size={24} color={props.color} />
            },
        }} />
    </Tabs>
}
