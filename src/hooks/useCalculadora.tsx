import { useRef, useState } from 'react'

enum Operadores {
    sumar, restar, multiplicar, dividir
}

export const useCalculadora = () => {

    const [numero, setNumero] = useState("0");
    const [numeroAnterior, setNumeroAnterior] = useState("0");

    const ultimaOperacion = useRef<Operadores>();

    const limpiar = () => {
        setNumero("0");
        setNumeroAnterior("0");
    }

    const armarNumero = (numeroActual: string) => {

        if (numero.includes(".") && numeroActual === ".") return;

        if (numero.startsWith("0") || numero.startsWith("-0")) {
            
            if (numeroActual === ".") {
                setNumero(numero + numeroActual);
            } else if (numeroActual === "0" && numero.includes(".")){
                setNumero(numero + numeroActual);
            } else if (numeroActual !== "0" && !numero.includes(".")){
                setNumero(numeroActual);
            } else if (numeroActual === "0" && !numero.includes(".")){
                setNumero(numero);
            } else {
                setNumero(numero + numeroActual);
            }
        } else {
            setNumero(numero + numeroActual);
        }
    }

    const positivoNegativo = () => {
        if (numero.includes("-")) {
            setNumero(numero.replace("-", ""));
        } else {
            setNumero("-" + numero);
        }
    }

    const btnDel = () => {
        if (numero.length === 1) {
            setNumero("0");
        } else if (numero.length === 2 && numero.includes("-")){
            setNumero("0");
        } else {
            const nuevoNumero = numero.substring(0, numero.length - 1);
            setNumero(nuevoNumero);
        }
    }

    const cambiarNumeroAnterior = () => {
        if (numero.endsWith(".")) {
            setNumeroAnterior(numero.slice(0, -1));
        } else {
            setNumeroAnterior(numero);
        }
        setNumero("0");
    }

    const btnDividir = () => {
        cambiarNumeroAnterior();
        ultimaOperacion.current = Operadores.dividir;
    }
    
    const btnMultiplicar = () => {
        cambiarNumeroAnterior();
        ultimaOperacion.current = Operadores.multiplicar;
    }
    
    const btnRestar = () => {
        cambiarNumeroAnterior();
        ultimaOperacion.current = Operadores.restar;
    }
    
    const btnsumar = () => {
        cambiarNumeroAnterior();
        ultimaOperacion.current = Operadores.sumar;
    }

    const calcular = () => {
        if (numeroAnterior === "") return;
        
        const num1 = Number(numero);
        const num2 = Number(numeroAnterior);
        
        switch (ultimaOperacion.current) {
            case Operadores.sumar:
                setNumero(`${num1 + num2}`);
                break;
            case Operadores.restar:
                setNumero(`${num2 - num1}`);
                break;
            case Operadores.multiplicar:
                setNumero(`${num1 * num2}`);
                break;
            case Operadores.dividir:
                setNumero(`${num2 /  num1}`);
                break;
            default:
                break;
        }
    }
   
    return {
        numero, 
        numeroAnterior,
        limpiar,
        armarNumero, 
        positivoNegativo,
        btnDel,
        btnDividir,
        btnMultiplicar,
        btnRestar, 
        btnsumar,
        calcular
    }
}
