import { Text, View, SafeAreaView, TouchableOpacity } from 'react-native';
import React, { useState } from "react";
import Header from '../../Components/Header/Header';

import { useContext } from 'react';
import { BancoHumorContext } from '../Grafico/BancoHumorContext';

export default function Home() {

    const { bancoHumor, setBancoHumor } = useContext(BancoHumorContext);

    //const [bancoHumor, setBancoHumor] = useState([0, 0, 0, 0, 0, 0, 0]); // array vazio para guardar os humores do usuário
    const [humor, setHumor] = useState("") // guardar o estado do humor do usuário
    const [humorNivel, setHumorNivel] = useState(0); // estado para guardar o nível de humor do usuário
    // Estado para controlar a posição atual do array
    const [posicaoAtual, setPosicaoAtual] = useState(0);

    /* const handleSalvarHumor = () => {
        const novoBancoHumor = [...bancoHumor];
        novoBancoHumor[posicaoAtual] = humorNivel;
        setBancoHumor(novoBancoHumor); // atualiza o estado do banco de humor

        // Atualiza o índice da próxima posição, reiniciando quando chegar a 7
        setPosicaoAtual((posicaoAtual + 1) % 7);
        // o %7 faz a conta de 0 a 6 e depois volta para 0 pois o resto da divisão de 7 por 7 é 0 
        // e ao somar 1 volta para 1
    }; */

    const handleSalvarHumor = () => {
        const novoBancoHumor = [...bancoHumor];
        novoBancoHumor[posicaoAtual] = humorNivel;
        setBancoHumor(novoBancoHumor); // atualiza o estado do banco de humor
        // Atualiza o índice da próxima posição, reiniciando quando chegar a 7
        setPosicaoAtual((posicaoAtual + 1) % 7);
        // o %7 faz a conta de 0 a 6 e depois volta para 0 pois o resto da divisão de 7 por 7 é 0 
        // e ao somar 1 volta para 1
        
    };

    // console.log([...bancoHumor]);

    return (

        <>
            <SafeAreaView className='flex-1 -z-10 bg-white' >
                <Header />
                <View class="CONTAINER " className="flex-1 m-2 justify-center ">
                    <View className="my-8" >

                        <View className="border border-indigo-500 rounded-md py-5 mb-10">
                            <Text className="text-2xl text-center ">😀 Achei difícil me acalmar hoje?</Text>
                            <Text className="text-amber-950 text-center">{humor}</Text>
                        </View>

                        <View className="flex-row">
                            <TouchableOpacity
                                onPress={() => setHumor("definitivamente não")}
                                onPressIn={() => setHumorNivel(1)}
                                className="w-1/2 border border-indigo-500 bg-indigo-500 rounded-md py-5 mr-0.5 transition duration-500 ease select-none hover:bg-indigo-600 focus:outline-none focus:shadow-outline">
                                <Text className=" text-white text-sm text-center" >Definitivamente não</Text>
                            </TouchableOpacity>

                            <TouchableOpacity
                                onPress={() => setHumor("aconteceu e por um bom tempo")}
                                onPressIn={() => setHumorNivel(2)}
                                className="w-1/2 border border-indigo-500 bg-indigo-500 rounded-md py-5  transition duration-500 ease select-none hover:bg-indigo-600 focus:outline-none focus:shadow-outline">
                                <Text className=" text-white text-sm text-center" >Aconteceu e por um bom tempo</Text>
                            </TouchableOpacity>
                        </View>

                        <View className="flex-row">
                            <TouchableOpacity
                                onPress={() => setHumor("um pouco, e por pouco tempo")}
                                onPressIn={() => setHumorNivel(3)}
                                className="w-1/2 border border-indigo-500 bg-indigo-500 rounded-md py-5 my-2 mr-0.5 transition duration-500 ease select-none hover:bg-indigo-600 focus:outline-none focus:shadow-outline">
                                <Text className=" text-white text-sm text-center">Um pouco, e por pouco tempo</Text>
                            </TouchableOpacity>

                            <TouchableOpacity
                                onPress={() => setHumor("aconteceu e o tempo todo")}
                                onPressIn={() => setHumorNivel(15)}
                                className="w-1/2 border border-indigo-500 bg-indigo-500 rounded-md py-5 my-2 transition duration-500 ease select-none hover:bg-indigo-600 focus:outline-none focus:shadow-outline">
                                <Text className=" text-white text-sm text-center">Aconteceu e o tempo todo</Text>
                            </TouchableOpacity>
                        </View>

                    </View>

                    <View className="flex-row">
                        <TouchableOpacity
                            onPress={handleSalvarHumor}
                            className="w-full border border-indigo-500 bg-indigo-500 rounded-md py-6">
                            <Text className=" text-white text-lg text-center font-bold">Salvar</Text>
                        </TouchableOpacity>
                    </View>
                </View>

            </SafeAreaView>
        </>

    );
}



