import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        paddingTop: 50,
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
    },
    input: {
        height: 40,
        width: 200,
        borderWidth: 1,
        padding: 10,
        borderColor: 'gray',
        marginVertical: 10,
    },
    item: {
        backgroundColor: 'lightblue',
        padding: 20,
        marginVertical: 8,
        marginHorizontal: 16,
        borderRadius: 10,
    },
    itemText: {
        color: '#fff',
    },
    itemTextCompleted: {
        color: '#fff',
        textDecorationLine: 'line-through',
    },
    list: {
        alignSelf: 'stretch',
    },
    centeredView: {
        marginTop: 22,
        flex: 1,
        // backgroundColor: '#fff',
        alignItems: 'center',
    },
    modalView: {
        margin: 20,
        backgroundColor: 'white',
        borderRadius: 20,
        padding: 35,
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
    },
    icon: {
        backgroundColor: 'white',
        borderRadius: 100,
        padding: 10,
        margin: 5,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
        display: 'flex',
        alignItems: 'center',
        alignSelf: 'center',
    }
});