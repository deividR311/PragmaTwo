import { StackNavigationProp } from '@react-navigation/stack';
import React from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';
import { Text, View } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { RootStackParams } from '../../../navigators/catNavigator/CatNavigator';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

interface Props {
    navigation : StackNavigationProp<RootStackParams, "CatDetailScreen", undefined>,
    name : string | undefined
}

export const HeaderItem = ({ navigation, name } : Props) => {
    const { top } = useSafeAreaInsets();
    return (
        <View style={{...styles.headerContainer}}>
            <TouchableOpacity
                activeOpacity={0.8}
                style={{...styles.backButton, top: top + 3}}
                onPress={() => navigation.pop()}
            >
                <Icon
                    name='arrow-back-outline'
                    color='black'
                    size={30}
                />
            </TouchableOpacity>
            <Text style={styles.title}> { name ? name : '' } </Text>
        </View>
    )
};

const styles = StyleSheet.create({
    headerContainer: {
        alignItems: 'center',
        height: 40,
        padding: 3,
        marginTop: 10
    },
    
    backButton: {
        position: 'absolute',
        left: 5
    },

    title: {
        fontWeight: 'bold',
        fontSize: 20,
        color: 'black'
    }
});