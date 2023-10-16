import { Text, View, SafeAreaView } from 'react-native';
import React, { useState } from 'react';
import Header from '../../Components/Header/Header';
import { ScrollView } from 'react-native-gesture-handler';


export default function MsgImportante() {
    // Define os estados para os níveis de ansiedade, depressão e estresse

    const [anxiety, setAnxiety] = useState(75);

    const [depression, setDepression] = useState(80);

    const [stress, setStress] = useState(81);



    return (
        <>
            <ScrollView>
                <SafeAreaView className='flex -z-10 bg-white' >
                    <Header />
                    <View class="CONTAINER " className="flex m-2 justify-center ">
                        {/* INFORMATIVO */}
                        <View className='mt-5'>
                            <View className="border border-indigo-500 rounded-md py-2 mb-2">
                                <Text className="text-lg text-center font-bold ">
                                    DEPRESSÃO X TRISTEZA
                                </Text>
                            </View>
                            <View className="border border-indigo-500 rounded-md py-2">
                                <Text className="text-lg px-2 ">
                                    A depressão é uma doença que afeta o humor, causando tristeza profunda,
                                    perda de interesse por atividades de que gostava, falta de ânimo, oscilações de humor, entre outros sintomas.
                                </Text>
                            </View>
                        </View>

                        <View className='mt-5'>
                            <View className="border border-indigo-500 rounded-md py-2 mb-2">
                                <Text className="text-lg text-center font-bold">
                                    ANSIEDADE X ESTAR ANSIOSO
                                </Text>
                            </View>
                            <View className="border border-indigo-500 rounded-md py-2">
                                <Text className="text-lg px-2 ">
                                    A ansiedade é uma reação normal do organismo e funciona como um aviso que nos alerta sobre o desconhecido ou qualquer tipo de perigo.
                                    É uma reação natural do corpo humano, que antecede momentos de perigo, por exemplo.
                                </Text>
                            </View>
                        </View>

                        <View className='mt-5'>
                            <View className="border border-indigo-500 rounded-md py-2 mb-2">
                                <Text className="text-lg text-center font-bold">
                                    O QUE É DEPRESSÃO?
                                </Text>
                            </View>
                            <View className="border border-indigo-500 rounded-md py-2">
                                <Text className="text-lg px-2 ">
                                    A depressão é uma doença que afeta o humor, causando tristeza profunda,
                                    perda de interesse por atividades de que gostava, falta de ânimo, oscilações de humor, entre outros sintomas.
                                </Text>
                            </View>
                        </View>

                        {/* MÉDICOS */}
                        <View className='mt-5 ' style={{ flexDirection: "row", justifyContent: "space-between" }}>

                            <View className='text-white flex justify-center justify-items-center border border-indigo-500 bg-indigo-500 rounded-md py-2 px-1' style={{ fontSize: 16 }}>
                                <View className="flex flex-col">
                                    <Text className="text-white text-center">Marcos da Silva</Text>
                                    <Text className="text-white text-center">⭐ ⭐ ⭐ ⭐ ⭐</Text>
                                    <Text className="text-green-400 bg-indigo-800 rounded-2xl text-center my-1 text-xs">atende unimed</Text>
                                    <Text className="text-white text-center">R.André Silva, 218</Text>
                                    <Text className="text-white text-center">(48)99934-5678</Text>
                                </View>
                            </View>

                            <View className='text-white flex justify-center justify-items-center border border-indigo-500 bg-indigo-500 rounded-md py-2 px-1' style={{ fontSize: 16 }}>
                                <View className="flex flex-col">
                                    <Text className="text-white text-center">Marcos da Silva</Text>
                                    <Text className="text-white text-center">⭐ ⭐ </Text>
                                    <Text className="text-green-400 bg-indigo-800 rounded-2xl text-center my-1 text-xs">atende unimed</Text>
                                    <Text className="text-white text-center">R.André Silva, 218</Text>
                                    <Text className="text-white text-center">(48)99934-5678</Text>
                                </View>
                            </View>

                            <View className='text-white border border-indigo-500 bg-indigo-500 rounded-md py-2 px-1' style={{ fontSize: 16 }}>
                                <View className="flex flex-col">
                                    <Text className="text-white text-center">João da Silva</Text>
                                    <Text className="text-white text-center">⭐ ⭐ ⭐</Text>

                                    <Text className="text-red-500 bg-indigo-800 rounded-2xl my-1 text-center text-xs">não atende unimed</Text>

                                    <Text className="text-white text-center">R.André Silva, 218</Text>
                                    <Text className="text-white text-center">(48)99934-5678</Text>
                                </View>
                            </View>
                        </View>
                    </View>
                </SafeAreaView>
            </ScrollView>
        </>
    )

}