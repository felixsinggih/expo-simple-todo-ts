import { Link, router } from "expo-router"
import { Pressable, Text, View } from "react-native"
import { mainStyles } from "../../styles/main"

export default function IndexPage() {
    return (
        <View>
            <Text style={mainStyles.header}>Home Page</Text>

            <Link style={mainStyles.button} href='/user/1'>Go to User 1</Link>

            <Pressable style={mainStyles.button} onPress={() => router.push({
                pathname: '/user/[id]',
                params: { id: '2' }
            })}>
                <Text>Go to User 2</Text>
            </Pressable>

            <Link style={mainStyles.button} href='/simple-todo'>Go to Simple To Do</Link>

            <Link style={mainStyles.button} href='/employee'>Go to Employee Page</Link>
        </View>
    )
}
