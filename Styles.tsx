import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        width: '100%',
        padding: 20,
    },
    title: {
        fontSize: 20,
        color: '#6f6f6f'
    },
    text: {
        fontSize: 16,
        color: '#6f6f6f'
    },
    textDone: {
        fontSize: 16,
        textDecorationLine: "line-through",
        color: '#6f6f6f'
    },
    whiteText: {
        fontSize: 16,
        color: '#FFF'
    },
    TextInput: {
        borderColor: "#6f6f6f",
        borderWidth: 1,
        width: "70%",
        borderRadius: 15,
        marginHorizontal: "1%",
        paddingLeft: 15,
        maxHeight: 40
    },
    inputContainer: {
        marginTop: 20,
        flexDirection: "row",
        justifyContent: "space-between"
    },
    addButton: {
        width: "25%",
        backgroundColor: "#5897fb",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 10
    },
    scrollContainer: {
        marginTop: 20
    },
    itemContainer: {
        paddingVertical: 20,
        borderBottomColor: "#e4e4e4",
        borderBottomWidth: 1,
        flexDirection: "row",
        justifyContent: "space-between",

    },
    removeButton: {
        backgroundColor: "red",
        justifyContent: "center",
        alignItems: "center",
        paddingHorizontal: 15,
        borderRadius: 10
    }
});

export default styles;