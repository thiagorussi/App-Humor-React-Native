import React, { useState } from 'react';
import { View, TouchableOpacity, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function Header({ toggleMenu }) {
    const [menuOpen, setMenuOpen] = useState(false);
    const navigation = useNavigation(); // hook para navegar entre as telas

    const handleMenuClick = () => {
        setMenuOpen(!menuOpen);
    };

    const handleOptionClick = (option) => {
        // Navigate to the corresponding screen
        navigation.navigate(option);
        // exemplo para ir para o home navigation.navigate('Home');
    };

    //função para enviar as props para o grafico
    const handleGrafico = (option) => {
        navigation.navigate(option, { notaHumor: '5' });
    };


    return (
        <View className="flex flex-row justify-between items-center bg-indigo-500 py-5 z-50">
            <TouchableOpacity onPress={handleMenuClick} className="px-4 md:hidden">
                <Text className="text-white text-3xl">☰</Text>

            </TouchableOpacity>
            <Text className="text-white text-2xl py-2">🧘‍♀️ HUMOR DO DIA</Text>
            {menuOpen && (
                <View className="absolute top-16 right-100 left-1 bg-white rounded-md z-40">
                    <TouchableOpacity onPress={() => handleOptionClick('Home')} className="p-2">
                        <Text className="text-gray-800 text-lg">Home</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => handleOptionClick('Informativo')} className="p-2">
                        <Text className="text-gray-800 text-lg">Informativo</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => handleGrafico('Grafico')} className="p-2">
                        <Text className="text-gray-800 text-lg">Gráfico</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => handleOptionClick('Mensagem Importante')} className="p-2">
                        <Text className="text-gray-800 text-lg">Mensagem Importante</Text>
                    </TouchableOpacity>
                </View>
            )}
            <Text></Text>
            <Text></Text>
        </View>
    );
}