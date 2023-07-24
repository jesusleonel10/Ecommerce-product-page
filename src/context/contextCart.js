import React, {useState} from 'react';

// Creamos contexto = estado global.
const ContextCart = React.createContext();

//Este componente permite usar el contexto para cualquier archivo
const ProviderCart = ({children}) => {
    const [cart, setCart] = useState({});
    
    return (
        <ContextCart.Provider 
            value={
                {cart, setCart}
            }
        >
        {children}
        </ContextCart.Provider>
    );
}
 
export {ContextCart, ProviderCart}