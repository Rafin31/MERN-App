import React, { useContext } from 'react';
import { ApiContext } from '../Context/ExpressContext';

const useRest = () => {
    const restAPI = useContext(ApiContext)
    return restAPI;
};

export default useRest;