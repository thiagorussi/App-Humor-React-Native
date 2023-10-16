import React, { useContext, useEffect, useState } from 'react';
import { View, Text, Dimensions, SafeAreaView, AppRegistry } from "react-native";
import { LineChart } from "react-native-chart-kit";
import Header from "../../Components/Header/Header";


import { BancoHumorContext } from '../Grafico/BancoHumorContext';

export default function Grafico() {

  const { bancoHumor } = useContext(BancoHumorContext);

  // useEffect(() => {
  //   console.log([...bancoHumor]);
  // }, [bancoHumor]);
  // Define os dados do gráfico

  const data = {
    labels: [
      "Seg",
      "Ter",
      "Qua",
      "Qui",
      "Sex",
      "Sáb",
      "Dom"
    ],

    datasets: [
      {
        label: "Seus níveis de Humor",

        data: bancoHumor,

        fill: false, // Preenchimento do gráfico

        backgroundColor: "blue",

        borderColor: "blue"
      },
      {
        data: [0], // valor mínimo
        withDots: false, // oculta o ponto
      },
    ]
  };
  // Define as opções do gráfico

  const options = {
    scales: {
      yAxes: [
        {
          ticks: {
            beginAtZero: true, // Define o início do gráfico no 0
            min: 0, // Define o valor mínimo do gráfico
            max: 10 // Define o valor máximo do gráfico
            
          }
        }
      ]
    },
    
    legend: {
      display: false // Oculta a legenda do gráfico
    }
  };

  // Define os estados para os níveis de ansiedade, depressão e estresse

  const [anxiety, setAnxiety] = useState(25);

  const [depression, setDepression] = useState(15);

  const [stress, setStress] = useState(35);


  const updateLevels = () => { 
    // Calcula a média do humor do dia

    // aqui é a soma dos valores do array e depois dividido por 7
    const averageMood = data.datasets[0].data.reduce((a, b) => a + b) / 7;  

    // Atualiza os níveis com base na média do humor
    setAnxiety(Math.round(50 - averageMood * 5)); 

    setDepression(Math.round(30 - averageMood * 3)); 

    setStress(Math.round(70 - averageMood * 7));

  };

  // useEffect(() => {
  //   updateLevels();
  // }, [data]);


return (
  <>
    <SafeAreaView className='flex-1 -z-10 bg-white'>
      <Header />

      <View className="flex-1  justify-center justify-items-center text-center" >
        <Text className='font-bold' style={{ fontSize: 24, textAlign: "center" }}>Nível de Humor Semanal</Text>

        <LineChart className=''
          data={data} // Dados do gráfico
          width={Dimensions.get("window").width} // Largura do gráfico é igual a largura da tela
          height={220} // Altura do gráfico
          chartConfig={{
            backgroundColor: "#fff", // Cor de fundo do gráfico
            backgroundGradientFrom: "#fff", // Cor de fundo do gráfico
            backgroundGradientTo: "#fff", //
            decimalPlaces: 0, // Define o número de casas decimais
            
            
            color: (opacity = 1) => `rgba(99,102,241,${opacity})`, // Cor das linhas do gráfico, como "Segunda", "Terça", etc., a cor é preta 
            labelColor: (opacity = 1) => `rgba(1 ,1 ,1, ${opacity})`, // Cor dos labels do gráfico, como "Segunda", "Terça", etc.
            
            style: {
              borderRadius: 16 // Borda do gráfico
            },
            propsForDots: {
              r: "6", // Tamanho dos pontos do gráfico
              strokeWidth: "2", // Espessura das linhas do gráfico
              stroke: "" // Cor dos pontos do gráfico
              
            }
          }}
          bezier // Define o gráfico como curva de Bezier, outro estilo é o gráfico de linha reta defino por "straight"
          withDots={true} // Define se o gráfico terá pontos
          withShadow={true} // Sombra do gráfico
          withVerticalLabels={true} // Desabilita os labels verticais
          withHorizontalLabels={true} // Desabilita os labels horizontais
          withInnerLines={false} // Desabilita as linhas internas do gráfico
          withOuterLines={false} // Desabilita as linhas externas do gráfico
          
          style={{
            marginVertical: 8,
            borderRadius: 16,
            
          }}
        />

        <View style={{ marginHorizontal: 16 }}>
          <Text className='font-semibold text-xs text-center' style={{}} >
            Seus níveis semanais de estresse, depressão e ansiedade são:
          </Text>

          <View className='mt-8 ' style={{ flexDirection: "row", justifyContent: "space-between" }}>

            <Text className='text-white flex justify-center justify-items-center border border-indigo-500 bg-indigo-500 rounded-md py-5 px-1' style={{ fontSize: 16 }}>Ansiedade: {anxiety}%</Text>

            <Text className='text-white flex justify-center justify-items-center border border-indigo-500 bg-indigo-500 rounded-md py-5 px-1' style={{ fontSize: 16 }}>Depressão: {depression}%</Text>

            <Text className=' text-white flex justify-center justify-items-center border border-indigo-500 bg-indigo-500 rounded-md py-5 px-1' style={{ fontSize: 16 }}>Estresse: {stress}%</Text>

          </View>

        </View>
      </View>
    </SafeAreaView>
  </>
);
};

AppRegistry.registerComponent('Grafico', () => Grafico);

