import { StyleSheet } from "react-native";

export default StyleSheet.create({
    container: {
        paddingHorizontal: 12,
    },
    header: {
        position: "absolute",
        left: 0,
        right: 0,
        top: 0,
        height: 70,
        backgroundColor: "#7159c1",
        zIndex: 1000,
        elevation: 1000,
    },  
    titlebar: {
        color: '#fff',
        marginTop: 35,
        textAlign: 'center',
        fontWeight: '700',
        fontSize: 20,
    },
    flatlist: {
        marginTop: 70,
    },
    feedList: {
        paddingHorizontal: 12,
        marginTop: 20,
        borderRadius: 10,
        backgroundColor: '#fff',
        height: 550,
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