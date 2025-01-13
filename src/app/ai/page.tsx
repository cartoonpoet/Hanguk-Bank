'use client'
import {useContext} from "react";
import AiAvatar from '@/app/ai/_component/AiAvatar/page'
import {AiContext} from './_hooks/useAiContext'
import WorkList from "@/app/ai/_component/WorkList/page";
import From from "@/app/ai/_component/From/page";
import To from "@/app/ai/_component/To/page";
import AiContextProvider from "@/app/ai/_hooks/useAiContext";

const AI = () => {
    const {mode} = useContext(AiContext)
    return <div>
        <AiAvatar/>
        {mode === 'WorkList' && <WorkList/>}
        {mode === 'From' && <From/>}
        {mode === 'To' && <To/>}
    </div>
};

const Page = () => {
    return <AiContextProvider><AI/></AiContextProvider>
};

export default Page;