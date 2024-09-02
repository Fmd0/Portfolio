import {createContext, MutableRefObject, useContext, useRef} from "react";

const PagesRefContext = createContext<{[key: string]: MutableRefObject<null> }>({});


export const PagesRefProvider = ({ children }) => {

    const value = {
        "/": useRef(null),
        "/contact": useRef(null),
    }


    return (
        <PagesRefContext.Provider value={value}>
            {children}
        </PagesRefContext.Provider>
    )
}


export const usePagesRefContext = () => useContext(PagesRefContext);
