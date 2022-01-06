import React from 'react'
import { Text, View } from 'react-native'
import { styles, colors } from '../theme/appTheme';
import { BotonCal } from '../components/BotonCal';
import { useCalculadora } from '../hooks/useCalculadora';

export const CalculadoraScreen = () => {
    const {
        numero,
        numeroAnterior,
        armarNumero,
        btnDel,
        btnDividir,
        btnMultiplicar,
        btnRestar,
        btnsumar,
        calcular,
        limpiar,
        positivoNegativo
    } = useCalculadora();

    return (
        <View style={styles.calculadoraScreen}>
            {numeroAnterior !== "0" && <Text style={styles.smallText}>{numeroAnterior}</Text> }
            <Text
                numberOfLines={ 1 }   
                adjustsFontSizeToFit
                style={styles.resultado}>{numero}</Text>
            <View style={styles.botonFila}>
               <BotonCal text="C" color={colors.grisClaro} onPress={ limpiar }/>
               <BotonCal text="+/-" color={colors.grisClaro} onPress={ positivoNegativo }/>
               <BotonCal text="del" color={colors.grisClaro} onPress={ btnDel }/>
               <BotonCal text="/" color={colors.naranja} onPress={ btnDividir }/>
            </View>
            <View style={styles.botonFila}>
               <BotonCal text="7" color={colors.grisOscuro} onPress={ armarNumero }/>
               <BotonCal text="8" color={colors.grisOscuro} onPress={ armarNumero }/>
               <BotonCal text="9" color={colors.grisOscuro} onPress={ armarNumero }/>
               <BotonCal text="x" color={colors.naranja} onPress={ btnMultiplicar }/>
            </View>
            <View style={styles.botonFila}>
               <BotonCal text="4" color={colors.grisOscuro} onPress={ armarNumero }/>
               <BotonCal text="5" color={colors.grisOscuro} onPress={ armarNumero }/>
               <BotonCal text="6" color={colors.grisOscuro} onPress={ armarNumero }/>
               <BotonCal text="-" color={colors.naranja} onPress={ btnRestar }/>
            </View>
            <View style={styles.botonFila}>
               <BotonCal text="1" color={colors.grisOscuro} onPress={ armarNumero }/>
               <BotonCal text="2" color={colors.grisOscuro} onPress={ armarNumero }/>
               <BotonCal text="3" color={colors.grisOscuro} onPress={ armarNumero }/>
               <BotonCal text="+" color={colors.naranja} onPress={ btnsumar }/>
            </View>
            <View style={styles.botonFila}>
               <BotonCal text="0" color={colors.grisOscuro} cols={2} onPress={ armarNumero }/>
               <BotonCal text="." color={colors.grisOscuro} onPress={ armarNumero }/>
               <BotonCal text="=" color={colors.naranja} onPress={ calcular }/>
            </View>
        </View>
    )
}
