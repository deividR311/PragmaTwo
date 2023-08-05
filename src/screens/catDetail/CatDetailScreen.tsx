import React, { useContext, useEffect } from 'react';
import { Image, StyleSheet, View } from 'react-native';
import { StackScreenProps } from '@react-navigation/stack';

import { RootStackParams } from '../../navigators/catNavigator/CatNavigator';
import CatsContext from '../../contexts/cat/CatContext';
import { HeaderItem, ScrollViewItem } from './components/Components';
import { CustomLoading } from '../../shared/components/Components';

interface Props extends StackScreenProps<RootStackParams, 'CatDetailScreen'> {}; 

export const CatDetailScreen = ({ navigation, route } : Props) => {
    const { catId } = route.params;
    const { catsState, getCatById, cleanCatDetail } = useContext(CatsContext);
    const { cat } = catsState;

    useEffect(() => {
        getCatById(catId);

        return () => {
            cleanCatDetail();
        }
    }, [catId])

    return (
        <View style={{ flex: 1 }}>
            { cat
            ?
                <View>
                    <HeaderItem navigation={navigation} name={cat?.name}/>

                    <View style={styles.imgContainer}>
                        <Image style={styles.image} source={require('../../assets/images/defaultCat.jpg')} />
                    </View>

                    <ScrollViewItem cat={cat}/>
                </View>
            :   <CustomLoading />
            }
        </View>
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