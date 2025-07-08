import { createContext, useContext, useState } from "react";

export const Contact = createContext();

export function Provider({children}) {
    const [tab, setTab] = useState(false);
    const [hasInteracted, setHasInteracted] = useState(false);

    const handleContact = () => {
        setHasInteracted(true);
        setTab(!tab);
    }

    return <Contact.Provider value={{tab, handleContact, hasInteracted}}>
        {children}
    </Contact.Provider>
}

export const useContact = () => {
    return useContext(Contact);
}