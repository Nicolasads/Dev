import { StyleSheet } from "react-native";

export default StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 12,
        paddingTop: 15,
    },
    flatlist: {
        marginTop: 8,
    },
    feedList: {
        padding: 10,
        borderRadius: 10,
        backgroundColor: '#fff',
        marginBottom: 16,
    },
    title: {
        flexDirection: 'row',
        paddingTop: 15,
    },
    avatar: {
        width: 40,
        height: 40,
        display: 'flex',
        marginRight: 12,
    },
    username: {
        paddingTop: 10,
        fontWeight: '700',
    },
    post: {
        width: 350,
        height: 350,
        borderRadius: 10,
        marginTop: 15,
    },
    description: {
        fontSize: 14,
        paddingTop: 12,
        marginLeft: 8,
        textAlign: 'justify',
        width: 320,
    },
    button: {
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#7159c1",
        height: 35,
        marginTop: 15,
        borderRadius: 10,
    },
    buttonText: {
        color: "#fff"
    }
})