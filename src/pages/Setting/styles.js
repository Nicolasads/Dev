import { StyleSheet } from "react-native";

export default StyleSheet.create({
    container: {
        paddingHorizontal: 12,
        backgroundColor: '#fff',
        width: '100%',
        height: '100%'
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
        marginLeft: 20,
        textAlign: 'left',
        fontWeight: '700',
        fontSize: 20,
    },
    user: {
        paddingTop: 140,
        alignItems: 'center',
    },
    imgUser: {
        width: 150,
        height: 150,
        borderRadius: 80,
    },
    username: {
        paddingTop: 8,
        fontSize: 20,
        fontWeight: '700',
        paddingBottom: 15
    },
    buttonList: {
        alignItems: 'center',
        paddingTop: 10,
    },
    button: {
      borderWidth: 1,
      borderColor: '#898989',
      backgroundColor: '#E1E1E1',
      width: 370,
      height: 35,
      alignItems: 'center',
      borderRadius: 12,
    },
    buttonTitle: {
        paddingTop: 6,
        color: '#6D6D6D'
    },
    list: {
        marginTop: 15,
    },
})