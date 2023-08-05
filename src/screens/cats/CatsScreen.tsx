import { useContext, useEffect, useState } from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';
import CatsContext from '../../contexts/cat/CatContext';
import { CatSearch, CatCard } from './components/Components';
import { Cat } from '../../models/Cat';

export const CatsScreen = () => {
    const { catsState, getCats } = useContext(CatsContext);
    const { cats } = catsState;

    const [term, setTerm] = useState<string>('');
    const [catsFiltered, setcatsFiltered] = useState<Cat[]>([]);

    useEffect(() => {
      getCats();
    }, []);

    useEffect(() => {
      if (term.length === 0) {
        return setcatsFiltered([]);
      }

      setcatsFiltered( cats.filter(cat => cat.name.toLowerCase().includes(term.toLowerCase())) )
    }, [term])    

    return (
      <View style={{ ...styles.listContainer }}>
        <View style={{ marginTop: 10, marginBottom: 10 }}>
          <Text style={styles.title}>Catbreeds</Text>
          <CatSearch onDebounce={ setTerm } />
        </View>
        <FlatList
          data={(term.length === 0) ? cats : catsFiltered }
          keyExtractor={(cat) => cat.id}
          showsVerticalScrollIndicator={false}
          numColumns={1}
          renderItem={({item}) => <CatCard cat={item} />}
        >
        </FlatList>
      </View>
    )
};

const styles = StyleSheet.create({
  listContainer: {
    flex: 1,
    marginHorizontal: 5
  },

  title: {
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 20,
    marginBottom: 10,
    color: 'black'
  }
});