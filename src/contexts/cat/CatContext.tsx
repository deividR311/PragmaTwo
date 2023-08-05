import { createContext } from 'react';
import { CatsState } from './Interfaces';

export type CatsContextProps = {
    catsState     : CatsState,
    getCats       : () => void,
    getCatById    : ( catId : string ) => void,
    cleanCatDetail: () => void
}

const CatsContext = createContext<CatsContextProps>({} as CatsContextProps);

export default CatsContext;