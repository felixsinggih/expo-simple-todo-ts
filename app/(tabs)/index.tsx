import { Link, router } from "expo-router"
import { Pressable, Text, View } from "react-native"

export default function IndexPage() {
    return (
        <View>
            <Text>Home Page</Text>

            <Link href='/user/1'>Go to User 1</Link>

            <Pressable onPress={() => router.push({
                pathname: '/user/[id]',
                params: { id: '2' }
            })}>
                <Text>Go to User 2</Text>
            </Pressable>
        </View>
    )
}
