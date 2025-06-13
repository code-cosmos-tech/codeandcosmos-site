import { createContext, useContext, useState } from "react";

export const Contact = createContext();

export function Provider({children}) {
    const [tab, setTab] = useState(false);

    const handleContact = () => { 
        setTab(!tab);
    }

    return <Contact.Provider value={{tab, handleContact}}>
        {children}
    </Contact.Provider>
}

export const useContact = () => {
    return useContext(Contact);
}