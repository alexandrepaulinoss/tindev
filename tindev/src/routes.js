import { createAppContainer, createSwitchNavigator } from 'react-navigation';

import Login from './pages/Login';
import Main from './pages/Main';

export default createAppContainer(
    /*
    createStackNavigator = troca a tela dando opção de nevegação (voltar)
    createSwitchNavigator = troca a tela sem opção de navegação, não cria pilha de telas
    createBottomTabNavigator = cria navegação por abas no rodapé
    createMaterialTopTabNavigator = cria navegação por abas no top
    createDrawerNavigator = menu lateral (esquerda) ao arrastar da esquerda para direita
    */
    createSwitchNavigator({
        Login,
        Main,
    })
);