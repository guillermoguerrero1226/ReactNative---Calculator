import { StyleSheet } from "react-native";

export const colors = {
    grisClaro: "#9B9B9B",
    grisOscuro: "#2D2D2D",
    naranja: "#FF9427",

}

export const styles = StyleSheet.create({
    fondo: {
        backgroundColor: "black",
        flex: 1
    },
    calculadoraScreen: {
        flex:1,
        justifyContent:"flex-end",
        paddingHorizontal: 20
    },
    resultado: {
        color: "white",
        textAlign: "right", 
        fontSize: 60
    },
    smallText: {
        color: "white",
        textAlign: "right", 
        fontSize: 20
    },
    button: {
        borderRadius: 100,
        height: 70,
        justifyContent: "center",
        marginHorizontal: 10,
    },
    buttonText:{
        fontSize: 30,
        textAlign: "center",
        fontWeight: "300"
    },
    botonFila: {
        flexDirection: "row",
        justifyContent: "center",
        marginBottom: 10
    }
});

