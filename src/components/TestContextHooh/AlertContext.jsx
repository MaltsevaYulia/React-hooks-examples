import {createContext, useContext, useState } from 'react';

// const { createContext } = require("react")

const Context = createContext()

export const useMyContext = () => useContext(Context);

export const AlertContext = ({ children }) => {
    const [isShow, setIsShow] = useState(false)
    return (
      <Context.Provider value={{ isShow, setIsShow }}>
        {children}
      </Context.Provider>
    );
}