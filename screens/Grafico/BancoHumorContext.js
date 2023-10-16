import React, { createContext, useState } from 'react';

export const BancoHumorContext = createContext();

export default function BancoHumorProvider(props) {
    const [bancoHumor, setBancoHumor] = useState([0, 0, 0, 0, 0, 0, 0]);

    return (
        <BancoHumorContext.Provider value={{ bancoHumor, setBancoHumor }}>
            {props.children}
        </BancoHumorContext.Provider>
    );
}