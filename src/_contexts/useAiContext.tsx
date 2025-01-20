import React, {createContext, useState, ReactNode} from 'react';
import { Account, AiStoreTypes, ModeProp, WorkProp } from '@/_types/AiStoreTypes'
import {Scene} from '@soulmachines/smwebsdk'

const initSelectedTo = {
    accountType: '우리',
    name: '김손자',
    accountNumber: '1002-345-678910',
}

const init = {
    scene: null,
    mode: 'WorkList',
    selectedTo: initSelectedTo,
    work: null,
}

export const AiContext = createContext<AiStoreTypes>(init as AiStoreTypes);

const AiContextProvider = ({children}: { children: ReactNode }) => {
    const [scene, setScene] = useState<Scene | null>(null);
    const [mode, setMode] = useState<ModeProp>('WorkList');
    const [selectedTo, setSelectedTo] = useState<Account>(initSelectedTo);
    const [work, setWork] = useState<WorkProp>(null);


    return (
        <AiContext.Provider value={{scene, setScene, mode, setMode, selectedTo, setSelectedTo, work, setWork}}>
            {children}
        </AiContext.Provider>
    )
}


export default AiContextProvider;