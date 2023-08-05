import React, { useEffect, useState } from 'react';
import { Text, View } from 'react-native';

const useDebouncedValue = ( input : string = '', time: number = 500 ) => {
    const [debouncedValue, setDebouncedValue] = useState<string>(input);

    useEffect(() => {
      const timeout = setTimeout(() => {
        setDebouncedValue( input );
      }, time);
    
      return () => {
        clearTimeout(timeout);
      }
    }, [input])
    

    return debouncedValue;
}

export default useDebouncedValue;