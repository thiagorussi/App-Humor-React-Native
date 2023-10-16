import { Text, View, SafeAreaView } from 'react-native';
import React, { useState } from 'react';
import Header from '../../Components/Header/Header';

export default function MsgImportante() {
    // Define os estados para os níveis de ansiedade, depressão e estresse

    const [anxiety, setAnxiety] = useState(75);

    const [depression, setDepression] = useState(80);

    const [stress, setStress] = useState(81);

    return (
        <>
            <SafeAreaView className='flex-1 -z-10 bg-white' >
                <Header />
                <View class="CONTAINER " className="flex m-2 justify-center ">
                    {/* TAXAS DE HUMOR */}
                    <View className='mt-8 ' style={{ flexDirection: "row", justifyContent: "space-between" }}>

                        <Text className='text-white flex justify-center justify-items-center border border-indigo-500 bg-indigo-500 rounded-md py-5 px-1' style={{ fontSize: 16 }}>Ansiedade: {anxiety}%</Text>

                        <Text className='text-white flex justify-center justify-items-center border border-indigo-500 bg-indigo-500 rounded-md py-5 px-1' style={{ fontSize: 16 }}>Depressão: {depression}%</Text>

                        <Text className=' text-white flex justify-center justify-items-center border border-indigo-500 bg-indigo-500 rounded-md py-5 px-1' style={{ fontSize: 16 }}>Estresse: {stress}%</Text>

                    </View>
                    {/* MENSAGEM */}
                    <View className="border border-indigo-500 rounded-md py-5 my-10">
                        <Text className="text-2xl text-center ">
                            Ops! Parece que você tem estado bem para baixo nos ultimos tempos ein? 
                            Talvez uma visita a um profissional da saúde seja necessário!
                        </Text>
                        
                    </View>

                    {/* MÉDICOS */}
                    <View className='mt-5 ' style={{ flexDirection: "row", justifyContent: "space-between" }}>

                        <Text className='text-white flex justify-center justify-items-center border border-indigo-500 bg-indigo-500 rounded-md py-2 px-1' style={{ fontSize: 16 }}>
                            <View className="flex flex-col">
                            <Text className="text-white text-center">Marcos da Silva</Text>
                            <Text className="text-white text-center">⭐ ⭐ ⭐ ⭐ ⭐</Text>
                            <Text className="text-green-400 bg-indigo-800 rounded-2xl text-center my-1 text-xs">atende unimed</Text>
                            <Text className="text-white text-center">R.André Silva, 218</Text>
                            <Text className="text-white text-center">(48)99934-5678</Text>
                            </View>
                        </Text>

                        <Text className='text-white flex justify-center justify-items-center border border-indigo-500 bg-indigo-500 rounded-md py-2 px-1' style={{ fontSize: 16 }}>
                            <View className="flex flex-col">
                            <Text className="text-white text-center">Marcos da Silva</Text>
                            <Text className="text-white text-center">⭐ ⭐ </Text>
                            <Text className="text-green-400 bg-indigo-800 rounded-2xl text-center my-1 text-xs">atende unimed</Text>
                            <Text className="text-white text-center">R.André Silva, 218</Text>
                            <Text className="text-white text-center">(48)99934-5678</Text>
                            </View>
                        </Text>

                        <Text className='text-white border border-indigo-500 bg-indigo-500 rounded-md py-2 px-1' style={{ fontSize: 16 }}>
                            <View className="flex flex-col">
                            <Text className="text-white text-center">João da Silva</Text>
                            <Text className="text-white text-center">⭐ ⭐ ⭐</Text>

                            <Text className="text-red-500 bg-indigo-800 rounded-2xl my-1 text-center text-xs">não atende unimed</Text>
                            
                            <Text className="text-white text-center">R.André Silva, 218</Text>
                            <Text className="text-white text-center">(48)99934-5678</Text>
                            </View>
                        </Text>

                        

                    </View>

                </View>
            </SafeAreaView>
        </>
    )

}