import React from 'react'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { ChatScreen } from '../screens/ChatScreen';
import { ContactsScreen } from '../screens/ContactsScreen';
import { AlbumsScreen } from '../screens/AlbumsScreen';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { colores } from '../theme/appTheme';
import { Text } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';


const Tab = createMaterialTopTabNavigator();

export const TopTabNavigator = () => {

    const { top } = useSafeAreaInsets()

    return (
        <Tab.Navigator
            style={{
                // padding: top,
                paddingTop: top
            }}
            sceneContainerStyle={{
                backgroundColor: 'white',
            }}
            screenOptions={({ route }) => ({
                tabBarPressColor: colores.primary,
                tabBarShowIcon: true,
                tabBarIndicatorStyle: {
                    backgroundColor: colores.primary
                },
                tabBarStyle: {
                    shadowColor: 'transparent',
                    elevation: 0
                },
                tabBarIcon: ({ color, focused }) => {
                    console.log(route.name)

                    let iconName: string = ''
                    switch (route.name) {
                        case 'ChatScreen':
                            iconName = 'chatbubble-outline'
                            break
                        case 'ContactsScreen':
                            iconName = 'call-outline'
                            break
                        case 'AlbumsScreen':
                            iconName = 'images-outline'
                            break
                    }

                    return <Text style={{ color }}>
                        <Icon name={iconName} size={24} color={colores.primary} />
                    </Text>
                }
            })}
        >
            <Tab.Screen name="ChatScreen" component={ChatScreen} />
            <Tab.Screen name="ContactsScreen" component={ContactsScreen} />
            <Tab.Screen name="AlbumsScreen" component={AlbumsScreen} />
        </Tab.Navigator >
    );
}