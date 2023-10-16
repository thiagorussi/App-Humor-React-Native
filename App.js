import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './screens/Home/Home';
import InformativoScreen from './screens/Informativo/Informativo';
import GraficoScreen from './screens/Grafico/Grafico';
import MensagemImportanteScreen from './screens/MsgImportante/MsgImportante';

import BancoHumorProvider from './screens/Grafico/BancoHumorContext';

const Stack = createStackNavigator();

export default function App () {
  {/* Isso é para todos componentes receberem a o estado bancoHumor do BancoHumorContext.js */}
  return (
    <BancoHumorProvider> 
      <NavigationContainer style={{  }} > 
        <Stack.Navigator>
        
        <Stack.Screen name="Home" component={HomeScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Informativo" component={InformativoScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Mensagem Importante" component={MensagemImportanteScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Grafico" component={GraficoScreen} options={{ headerShown: false }} />

        </Stack.Navigator>
      </NavigationContainer>
    </BancoHumorProvider> 
    
  );
}

{/* 

ANTES ESTAVA ASSIM, 

Isso significa que cada um desses componentes está recebendo sua própria instância separada do 
estado bancoHumor, que não é compartilhada entre eles.

Para resolver isso, você deve envolver todo o aplicativo (ou pelo menos a parte que precisa 
compartilhar o estado) com o BancoHumorProvider. Aqui está como você pode fazer isso:

<NavigationContainer style={{  }} > 
      <Stack.Navigator>
      
      <Stack.Screen name="Home" options={{ headerShown: false }}>
          {() => (
            <BancoHumorProvider>
              <HomeScreen />
            </BancoHumorProvider>
          )}
        </Stack.Screen>

        <Stack.Screen name="Informativo" component={InformativoScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Mensagem Importante" component={MensagemImportanteScreen} options={{ headerShown: false }} />
        
        <Stack.Screen name="Grafico" options={{ headerShown: false }}>
          {() => (
            <BancoHumorProvider>
              <GraficoScreen />
            </BancoHumorProvider>
          )}
        </Stack.Screen>

      </Stack.Navigator>
    </NavigationContainer>



*/}


