import { StyleSheet, View, Text, Image, TouchableOpacity } from 'react-native';
import { Dimensions } from "react-native";
import { Cat } from '../../../models/Cat';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParams } from '../../../navigators/catNavigator/CatNavigator';

var width = Dimensions.get('window').width;

type ScreenNavigationProp = StackNavigationProp<RootStackParams, 'CatDetailScreen'>;

interface Props {
    cat : Cat;
}

export const CatCard = ({ cat } : Props) => {
    const { name, origin, intelligence } = cat;
    const navigation = useNavigation<ScreenNavigationProp>();

  return (
    <View style={{
        ...styles.cardContainer
    }}>
        <View style={styles.partsContainer}>
            <Text style={styles.cardText}>{ name }</Text>
            <View style={{ flex: 1 }}></View>
            <TouchableOpacity onPress={() => navigation.navigate('CatDetailScreen', { catId : cat.id })}>
                <View>
                    <Text style={styles.cardText}>Mas...</Text>
                </View>
            </TouchableOpacity>
        </View>
        <View style={styles.imgContainer}>
            <Image style={styles.image} source={require('../../../assets/images/defaultCat.jpg')} />
        </View>
        <View style={styles.partsContainer}>
            <Text style={styles.cardText}>Origin: {origin}</Text>
            <View style={{ flex: 1 }}></View>
            <Text style={styles.cardText}>Intelligence: {intelligence}</Text>
        </View>
    </View>
  )
};

const styles = StyleSheet.create({
    cardContainer: {
        width: width - 10,
        height: 300,
        marginBottom: 25,
        borderRadius: 5,
        borderStyle: 'solid',
        borderColor: 'gray',
        borderWidth: 1
    },

    image: {
        width: '100%',
        height: '100%',
        alignItems: 'center',
        justifyContent: 'center'
    },

    imgContainer: {
        height: '82%'
    },

    partsContainer: {
        flexDirection: 'row',
        padding: 3
    },

    cardText: {
        fontWeight: 'bold',
        color: 'black'
    }
});
