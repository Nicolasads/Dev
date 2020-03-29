import { StyleSheet } from "react-native";

export default StyleSheet.create({
    container: {
        paddingHorizontal: 14,
    },
    header: {
        position: "absolute",
        left: 0,
        right: 0,
        top: 0,
        height: 70,
        backgroundColor: "#fafafa",
        zIndex: 1000,
        elevation: 1000,
        borderBottomColor: '#BABABA',
        borderBottomWidth: 1,
        alignContent: 'space-between',
        flexDirection: 'row',
        alignItems: 'center'
    },
    create: {
        marginTop: 80,
    },
    title: {
        fontSize: 18,
        color: "#333",
        marginTop: 35,
        marginLeft: 12,
    },
    post: {
        fontSize: 20,
        color: "#7159c1",
        marginTop: 38,
        paddingRight: 10,
    },
    preview: {
        marginTop: 30,
        width: 370,
        height: 300,
        borderRadius: 10,
        shadowOffset:{  width: 10,  height: 10,  },
        shadowColor: 'black',
        shadowOpacity: 1.0,
        shadowRadius: 2,
    },
    input: {
        marginTop: 20,
        borderWidth: 1,
        borderColor: '#555',
        borderRadius: 5,
        height: 100,
        backgroundColor: '#fff'
    },
    buttons: {
        flexDirection: 'row',
        marginTop: 20,
    },
    select: {
        height: 40,
        width: 180,
        borderWidth: 1,
        borderRadius: 10,
        borderColor: '#0180D3',
        alignItems: "center",
    },
    selectText: {
        color: '#0180D3',
        marginTop: 8,
    },
    submit: {
        height: 40,
        width: 140,
        marginLeft: 50,
        borderRadius: 10,
        backgroundColor: '#00CB28',
        alignItems: "center",
    },  
    submitText: {
        marginTop: 8,
        color: "#fff"
    }
});