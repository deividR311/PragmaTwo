import { useReducer } from 'react';
import CatsContext from './CatContext';
import catsReducer from './CatReducer';
import catsService from '../../services/CatService';

import * as Types from '../Types';
import { CatsState } from './Interfaces';

interface props {
  children : JSX.Element | JSX.Element[]
}

const INITIAL_STATE: CatsState = {
  cats: [],
  cat : null
}

const CatsContextState = ({ children } : props) => {
  const [ catsState, dispatch ] = useReducer(catsReducer, INITIAL_STATE);

  const getCats = () => {
    catsService.getCats().then(
      (response) => {
        dispatch({
          type: Types.CATS_ALL,
          payload: { cats: response, cat: null }
        });
      }
    ).catch(err => {
      dispatch({
        type: Types.CATS_ALL_ERROR,
        payload: { cats: [], cat: null }
      });
    })
  };

  const getCatById = ( catId : string ) => {
    catsService.getCatById( catId ).then(
      (response) => {
        dispatch({
          type: Types.CAT_BY_ID,
          payload: { cats: [], cat: response }
        });
      }
    ).catch(err => {
      dispatch({
        type: Types.CATS_ALL_ERROR,
        payload: { cats: [], cat: null }
      });
    })
  };

  const cleanCatDetail = () => {
    dispatch({
      type: Types.CAT_BY_ID,
      payload: { cats: [], cat: null }
    })
  }

  return (
    <CatsContext.Provider value={{
        catsState,
        getCats,
        getCatById,
        cleanCatDetail
    }}>
      {children}
    </CatsContext.Provider>
  );
};

export default CatsContextState;