import {createContext, useState} from "react";

export const NavigationContext = createContext({
    value: '0',
    navHandler: () => {},
    popupIndex: null,

});

const NavigationContextProvider = (props) => {

    const [value, setValue] = useState(0);
    const [popUpIndex,setPopupIndex] = useState(null);

    const navHandler = (val) => {
        setValue(val);
    }

    const popupHandler = (pIndex) => {
        setPopupIndex(pIndex)
    }


    return (
        <NavigationContext.Provider value={{value: value,popupIndex: popUpIndex, navChangeHandler: navHandler,popupChangeHandler: popupHandler}}>
            {props.children}
        </NavigationContext.Provider>
    )
}

export default NavigationContextProvider;