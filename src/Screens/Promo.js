import React from 'react';
import { StyleSheet, View } from 'react-native';

export const Promo = () =>{
    return(
        <View style={promoCSS.container}>
            <Text>PROMO</Text>
        </View>
    )
}

const promoCSS = StyleSheet.create({
    container:{
        width: '100%',
        height: '100%'
    }
})