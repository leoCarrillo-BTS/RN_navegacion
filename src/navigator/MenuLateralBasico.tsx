import React from 'react';
import { DrawerContent, DrawerContentComponentProps, DrawerContentScrollView, createDrawerNavigator } from '@react-navigation/drawer';
import { StackNavigator } from './StackNavigator';

import { Image, Text, View, useWindowDimensions, TouchableOpacity } from 'react-native';
import { SettingsScreen } from '../screens/SettingsScreen';
import { styles } from '../theme/appTheme';
import { Tabs } from './Tabs';
import Icon from 'react-native-vector-icons/Ionicons';


const Drawer = createDrawerNavigator()

export const MenuLateral = () => {

    const { width } = useWindowDimensions()

    return (
        <Drawer.Navigator
            screenOptions={{
                drawerPosition: 'left',
                drawerType: (width >= 400 ? 'permanent' : 'front')
            }}
            drawerContent={
                (props) => <MenuInterno {...props} />
            }
        >
            <Drawer.Screen name="Tabs" options={{ title: 'Home' }} component={Tabs} />
            <Drawer.Screen name="SettingsScreen" options={{ title: 'Settings' }} component={SettingsScreen} />
        </Drawer.Navigator>
    )
}

const MenuInterno = ({ navigation }: DrawerContentComponentProps) => {

    return (

        <DrawerContentScrollView>

            {/* Avatar */}
            <View style={styles.avatarContainer}>
                <Image
                    source={{
                        uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTRq18XslBFURiyHhxTm-JrRxjGsTIEPN_H7A&usqp=CAU'
                    }}
                    style={styles.avatar}
                />

            </View>

            {/* Opciones de Menu */}

            <View style={styles.menuContainer}>
                <TouchableOpacity
                    style={{
                        ...styles.menuBoton,
                        flexDirection: 'row'
                    }}
                    onPress={
                        () => navigation.navigate('Tabs')
                    }
                >
                    <Icon name={'globe-outline'} size={24} color={'black'} />
                    <Text style={styles.menuTexto}> Navegación</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style={{
                        ...styles.menuBoton,
                        flexDirection: 'row'
                    }}
                    onPress={
                        () => navigation.navigate('SettingsScreen')
                    }
                >
                    <Icon name={'settings-outline'} size={24} color={'black'} />
                    <Text style={styles.menuTexto}> Ajustes</Text>
                </TouchableOpacity>
            </View>

        </DrawerContentScrollView>
    )
}