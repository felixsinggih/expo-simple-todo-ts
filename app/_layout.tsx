import { Stack } from "expo-router";

export default function RootLayout() {
    return <Stack>
        <Stack.Screen name="(tabs)" options={{
            headerShown: false
        }} />
        <Stack.Screen name="simple-todo" options={{
            title: 'Simple Todo'
        }} />
        <Stack.Screen name="employee" options={{
            title: 'Employees'
        }} />
        <Stack.Screen name="(dashboard)/dashboard" options={{
            title: 'Dashboard'
        }} />
    </Stack>
}
