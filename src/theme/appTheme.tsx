import { StyleSheet } from "react-native";

export const colores = {
    primary: '#5856D6'
}

export const styles = StyleSheet.create({

    globalMargin: {
        marginHorizontal: 20,
    },
    title: {
        marginVertical: 16,
        fontSize: 44,
    },

    botonGrande: {
        width: 100,
        height: 100,
        backgroundColor: 'red',
        borderRadius: 8,
        alignItems: 'center',
        justifyContent: 'center',
        marginRight: 8
    },
    botonGrandeTexto: {
        color: 'white',
        fontSize: 22,
        fontWeight: 'bold',
    },
    avatarContainer: {
        marginTop: 22,
        alignItems: 'center'
    },
    avatar: {
        width: 120,
        height: 120,
        borderRadius: 100
    },
    menuContainer: {
        marginVertical: 22,
        marginHorizontal: 16,
    },
    menuBoton: {
        marginVertical: 8
    },
    menuTexto: {
        fontSize: 16
    },

});