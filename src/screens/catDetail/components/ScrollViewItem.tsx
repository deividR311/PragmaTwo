import React from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { DetailItem } from './DetailItem';
import { Cat } from '../../../models/Cat';

interface Props {
    cat : Cat
}

export const ScrollViewItem = ({ cat } : Props) => {
    return (
        <ScrollView style={styles.scrollViewCtn}>
            <View style={{ padding: 3 }}>
                <DetailItem subTitle='Description' value={cat?.description}></DetailItem>
                <DetailItem subTitle='intelligence' value={cat?.intelligence}></DetailItem>
                <DetailItem subTitle='Adaptability' value={cat?.adaptability}></DetailItem>
                <DetailItem subTitle='Origin' value={cat?.origin}></DetailItem>
                <DetailItem subTitle='Affection level' value={cat?.affection_level}></DetailItem>
                <DetailItem subTitle='Dog friendly' value={cat?.dog_friendly}></DetailItem>
                <DetailItem subTitle='Temperament' value={cat?.temperament}></DetailItem>
                <DetailItem subTitle='Child friendly' value={cat?.child_friendly}></DetailItem>
                <DetailItem subTitle='Energy level' value={cat?.energy_level}></DetailItem>
                <DetailItem subTitle='Grooming' value={cat?.grooming}></DetailItem>
                <DetailItem subTitle='Health Issues' value={cat?.health_issues}></DetailItem>
                <DetailItem subTitle='Social needs' value={cat?.social_needs}></DetailItem>
                <DetailItem subTitle='Stranger friendly' value={cat?.stranger_friendly}></DetailItem>
                <DetailItem subTitle='Vocalisation' value={cat?.vocalisation}></DetailItem>
                <DetailItem subTitle='Experimental' value={cat?.experimental}></DetailItem>
                <DetailItem subTitle='Hairless' value={cat?.hairless}></DetailItem>
                <DetailItem subTitle='Natural' value={cat?.natural}></DetailItem>
                <DetailItem subTitle='Rare' value={cat?.rare}></DetailItem>
            </View>
        </ScrollView>
    )
};

const styles = StyleSheet.create({
    image: {
        width: 350,
        height: 350
    },

    imgContainer: {
        height: 400,
        alignItems: 'center',
        justifyContent: 'center'
    },

    scrollViewCtn: {
        padding: 3,
        height: 330
    },

    loadingIndicator: {
        flex: 1,
        height: 200,
        justifyContent: 'center',
        alignItems: 'center'
    }
});