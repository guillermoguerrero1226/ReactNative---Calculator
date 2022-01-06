import React from 'react'
import { Text, TouchableOpacity, View } from 'react-native'
import { styles, colors } from '../theme/appTheme';

interface ButtonProps {
    text: string,
    color: string,
    cols?: 1 | 2 | 3,
    onPress: (numero: string) => void
}

export const BotonCal = ({text, color, onPress, cols = 1}: ButtonProps) => {

    const butonOffset = (cols === 1) ? 0 : cols + 20;     
    const buttonStyles = {
        ...styles.button,
        backgroundColor: color,
        width: 70 * cols + butonOffset
    }

    return (
        <TouchableOpacity onPress={ () => onPress(text) }>
            <View style={buttonStyles}>
                <Text style={{
                    ...styles.buttonText,
                    color: (color === colors.grisClaro) ? "black" : "white"
                }}>{ text }</Text>
            </View>
        </TouchableOpacity>
    )
}
