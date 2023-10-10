import { StackScreenProps } from '@react-navigation/stack'
import { useNavigation } from '@react-navigation/core'
import React from 'react'
import { Button, Text, View } from 'react-native'
import { styles } from '../theme/appTheme'

interface Props extends StackScreenProps<any, any> { }

export const Pagina2Screen = ({ navigation }: Props) => {

    return (
        <View style={styles.globalMargin}>
            <Text style={styles.title}>
                Pagina2Screen
            </Text>

            <Button
                title='pagina 3'
                onPress={
                    () => navigation.navigate('Pagina3Screen')
                }
            />
        </View>
    )
}
