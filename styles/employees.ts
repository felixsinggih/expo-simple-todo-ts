import { StyleSheet } from "react-native"

export const employeeStyles = StyleSheet.create({
    container: {
        paddingTop: 20,
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
    list: {
        alignSelf: 'stretch',
    },
    item: {
        flex: 2,
        flexDirection: 'row',
        backgroundColor: '#3a86ff',
        padding: 20,
        marginVertical: 8,
        marginHorizontal: 16,
        borderRadius: 10,
    },
    itemButtonArea: {
        flex: 2,
        flexDirection: 'row',
        justifyContent: 'flex-end',
    },
    itemButton: {
        backgroundColor: 'green',
        padding: 5,
        borderRadius: 5,
        marginHorizontal: 2,
    },
    itemText: {
        color: '#fff',
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
    addIcon: {
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
})