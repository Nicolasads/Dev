import { StyleSheet } from 'react-native';

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
    }
});