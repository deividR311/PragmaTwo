import React from 'react';
import { ActivityIndicator, StyleSheet, View } from 'react-native';

export const CustomLoading = () => {
    return (
        <View style={styles.loadingIndicator}>
            <ActivityIndicator
                color='black'
                size={50}
            />
        </View>
    )
};

const styles = StyleSheet.create({
    loadingIndicator: {
        flex: 1,
        height: 200,
        justifyContent: 'center',
        alignItems: 'center'
    }
});