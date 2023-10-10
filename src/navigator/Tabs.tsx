import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Tab1Screen } from '../screens/Tab1Screen';
import { Tab2Screen } from '../screens/Tab2Screen';
import { Tab3Screen } from '../screens/Tab3Screen';
import { StackNavigator } from './StackNavigator';
import { colores } from '../theme/appTheme';
import { Platform, Text } from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import { TopTabNavigator } from './TopTab';
import Icon from 'react-native-vector-icons/Ionicons';


export const Tabs = () => {
    return Platform.OS === 'ios'
        ? <TabsIOS />
        : <TabsAndroid />
}

// Android

const bottomTabAndroid = createBottomTabNavigator();

function TabsAndroid() {
    return (
        <bottomTabAndroid.Navigator>
            <bottomTabAndroid.Screen name="Tab1Screen" options={{ title: 'Tab 1', tabBarIcon: (props) => <Text style={{ color: colores.primary }}>T1</Text> }} component={Tab1Screen} />
            <bottomTabIos.Screen name="TopTabNavigator" options={{ title: 'Tab 2' }} component={TopTabNavigator} />
            <bottomTabAndroid.Screen name="StackNavigator" options={{ title: 'Stack' }} component={StackNavigator} />
        </bottomTabAndroid.Navigator >
    );
}

// iOS

const bottomTabIos = createBottomTabNavigator();

const TabsIOS = () => {
    return (
        <bottomTabIos.Navigator
            sceneContainerStyle={{
                backgroundColor: 'white'
            }}

            screenOptions={({ route }) => ({
                tabBarActiveTintColor: colores.primary,
                tabBarStyle: {
                    borderTopColor: colores.primary,
                    borderTopWidth: 0,
                    elevation: 0
                },
                tabBarIcon: ({ color, focused, size }) => {
                    console.log(route.name)

                    let iconName: string = ''
                    switch (route.name) {
                        case 'Tab1Screen':
                            iconName = 'airplane-outline'
                            break
                        case 'TopTabNavigator':
                            iconName = 'attach-outline'
                            break
                        case 'StackNavigator':
                            iconName = 'calculator-outline'
                            break
                    }


                    return <Text style={{ color }}>
                        <Icon name={iconName} size={32} color={colores.primary} />
                    </Text>
                }
            })
            }
        >
            {/* <Tab.Screen name="Tab1Screen" options={{ title: 'Tab 1', tabBarIcon: (props) => <Text style={{ color: colores.primary }}>T1</Text> }} component={Tab1Screen} /> */}
            <bottomTabIos.Screen name="Tab1Screen" options={{ title: 'Tab 1' }} component={Tab1Screen} />
            <bottomTabIos.Screen name="TopTabNavigator" options={{ title: 'Tab 2' }} component={TopTabNavigator} />
            <bottomTabIos.Screen name="StackNavigator" options={{ title: 'Stack' }} component={StackNavigator} />
        </bottomTabIos.Navigator >
    );
}