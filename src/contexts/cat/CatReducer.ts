import { Cat } from '../../models/Cat';
import { CatsState } from './Interfaces';
import * as Types from '../Types';

type action = {
  type    : string,
  payload : { cats : Cat[], cat : Cat | null }
}

const catsReducer = (state : CatsState, { type, payload } : action ) : CatsState => {
  switch (type) {
    
    case Types.CATS_ALL:
      return {
        ...state,
        cats: payload.cats
      };

    case Types.CATS_ALL_ERROR:
      return {
        ...state,
        cats: payload.cats
      };

    case Types.CAT_BY_ID:
      return {
        ...state,
        cat: payload.cat
      };

    case Types.CAT_BY_ID_ERROR:
      return {
        ...state,
        cat: payload.cat
      };

    default:
      return state;
  }
};

export default catsReducer;