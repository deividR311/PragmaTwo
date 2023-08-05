import React from 'react';
import { Text, View } from 'react-native';

interface Props {
    subTitle : string,
    value?   : string | number
}

export const DetailItem = ({ subTitle, value } : Props) => {
    return (
        <View>
            <Text style={{ fontWeight: 'bold', color: 'black' }}>
                {subTitle}: { value && <Text style={{ fontWeight: 'normal' }}>{ value }</Text> }
            </Text>
        </View>
    )
};