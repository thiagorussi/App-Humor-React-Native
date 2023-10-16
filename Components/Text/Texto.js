import React from 'react';
import { StyleSheet, Text } from 'react-native';

export default function Texto (props) {
    return (
        <Text style={styles.texto}>{props.children}</Text>
    );
    }

const styles = StyleSheet.create({
    texto: {
        fontFamily: 'openSansBold',
        fontSize: 16,
        color: '#000000',
        textAlign: 'center',
        padding: 10,
        margin: 10,
    },
});
