import React, { createContext } from 'react';
import Rest from '../Rest/Rest';



export const ApiContext = createContext(null)


const ExpressContext = ({ children }) => {

    const allContext = Rest();
    return (
        <div>

            <ApiContext.Provider value={allContext}>
                {children}
            </ApiContext.Provider>

        </div>
    );
};

export default ExpressContext;