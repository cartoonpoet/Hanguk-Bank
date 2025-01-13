import React, {createContext, useState, ReactNode} from 'react';
import {AiStoreTypes, ModeProp} from "@/app/ai/_hooks/AiStoreTypes";
import {Scene} from '@soulmachines/smwebsdk'

const init = {
    scene: null,
    mode: 'WorkList',
}

export const AiContext = createContext<AiStoreTypes>(init as AiStoreTypes);

const AiContextProvider = ({children}: { children: ReactNode }) => {
    const [scene, setScene] = useState<Scene | null>(null);
    const [mode, setMode] = useState<ModeProp>('WorkList');

    return (
        <AiContext.Provider value={{scene, setScene, mode, setMode}}>
            {children}
        </AiContext.Provider>
    )
}


export default AiContextProvider;