import React, { useEffect, useState } from 'react';
import { Text, View, StyleSheet, TextInput } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import useDebouncedValue from '../../../shared/hooks/useDebouncedValue';

interface Props {
    onDebounce : ( value : string ) => void;
}

export const CatSearch = ({ onDebounce } : Props) => {
    const [textValue, setTextValue] = useState<string>('');
    const debouncedValue = useDebouncedValue(textValue);

    useEffect(() => {
        onDebounce(debouncedValue);
    }, [debouncedValue])
    

    return (
        <View>
            <View style={styles.textBackground}>
                <TextInput
                    placeholder='Search...'
                    style={styles.textInput}
                    autoCapitalize='none'
                    autoCorrect={false}
                    value={textValue}
                    onChangeText={setTextValue}
                />
                <Icon
                    name='search-outline'
                    color='gray'
                    size={30}
                />
            </View>
        </View>
    )
};

const styles = StyleSheet.create({
    textBackground: {
        backgroundColor: '#F3F1F3',
        borderRadius: 50,
        height: 40,
        paddingHorizontal: 20,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.27,
        shadowRadius: 4.65,

        elevation: 6,
    },

    textInput: {
        flex: 1,
        fontSize: 18,
        top: 2
    }
});