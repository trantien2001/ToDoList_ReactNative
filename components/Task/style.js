import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    item: {
        backgroundColor: '#fff',
        borderRadius: 8,
        flexDirection: 'row',
        marginVertical: 10,
        borderColor: 'black',
        paddingVertical: 6,
        paddingHorizontal: 8,
    },
    square: {
        borderRadius: 4,
        padding: 8
    },
    even: {
        backgroundColor: 'blue',
    },
    odd: {
        backgroundColor: 'green'
    },
    number: {
        fontSize: 18,
        justifyContent: 'center',
        alignItems: 'center',
    },
    content: {
        width: '80%',
        marginLeft: 10,
        justifyContent: 'center',
    },
    text: {
        fontSize: 18,
    }
});

export default styles;