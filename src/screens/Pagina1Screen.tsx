import { StackScreenProps } from '@react-navigation/stack'
import React, { useEffect } from 'react'
import { Button, Text, View } from 'react-native'
import { styles } from '../theme/appTheme'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { DrawerScreenProps } from '@react-navigation/drawer'
import Icon from 'react-native-vector-icons/Ionicons';


// interface Props extends StackScreenProps<any, any> { }
interface Props extends DrawerScreenProps<any, any> { }

export const Pagina1Screen = ({ navigation }: Props) => {


    useEffect(() => {

        navigation.setOptions({
            headerRight: () => (
                <Button
                    title='Menu'
                    onPress={
                        () => navigation.toggleDrawer()
                    }
                />
            )
        })

    }, [])




    return (
        <View style={styles.globalMargin}>
            <Text style={styles.title}>
                Pagina1Screen
            </Text>

            <Button
                title='pagina 2'
                onPress={
                    () => navigation.navigate('Pagina2Screen')
                }
            />

            <Button
                title='Ir a Persona'
                onPress={
                    () => navigation.navigate('PersonaScreen', {
                        id: 0,
                        nombre: 'Persona'
                    })
                }
            />

            <Text style={{
                marginVertical: 8
            }}>
                Navegar con argumentos
            </Text>

            <View style={{ flexDirection: 'row' }}>
                <TouchableOpacity style={{
                    ...styles.botonGrande,
                    backgroundColor: '#5856D6'
                }}
                    onPress={
                        () => navigation.navigate('PersonaScreen', {
                            id: 1,
                            nombre: 'Pedro'
                        })
                    }
                >

                    <Icon name={'walk-outline'} size={44} color={'white'} />
                    <Text style={styles.botonGrandeTexto}>
                        Pedro
                    </Text>
                </TouchableOpacity>

                <TouchableOpacity style={{
                    ...styles.botonGrande,
                    backgroundColor: '#FF9427'
                }}
                    onPress={
                        () => navigation.navigate('PersonaScreen', {
                            id: 1,
                            nombre: 'Susana'
                        })
                    }
                >
                    <Icon name={'woman-outline'} size={44} color={'white'} />
                    <Text style={styles.botonGrandeTexto}>
                        Susana
                    </Text>
                </TouchableOpacity>
            </View>

        </View>
    )
}
