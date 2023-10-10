import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { Text, View } from "react-native"
import { StackNavigator } from './src/navigator/StackNavigator';
import { MenuLateral } from './src/navigator/MenuLateralBasico';
import { AuthProvider } from './src/context/AuthContext';

const App = () => {

  return (

    <NavigationContainer>
      <AppState>
        <MenuLateral />
      </AppState>
    </NavigationContainer>
  )
}

const AppState = ({ children }: any) => {
  return (
    <AuthProvider>
      {children}
    </AuthProvider>
  )
}

export default App