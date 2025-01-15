'use client'
import {useContext} from "react";
import AiAvatar from '@/app/ai/_component/AiAvatar/page'
import {AiContext} from '@/_contexts/useAiContext'
import WorkList from "@/app/ai/_component/WorkList/page";
import From from "@/app/ai/_component/From/page";
import To from "@/app/ai/_component/To/page";
import AiContextProvider from "@/_contexts/useAiContext";
import Tell from '@/app/ai/_component/Tell/page'
import Confirm from '@/app/ai/_component/Confirm/page'
import Transferred from '@/app/ai/_component/Transferred/page'

const eachModeComponent = {
    WorkList: <WorkList/>,
    From:  <From/>,
    To: <To/>,
    Tell: <Tell/>,
    Confirm: <Confirm/>,
    Transferred: <Transferred/>
}

const AI = () => {
    const {mode} = useContext(AiContext)

    return <div>
        <AiAvatar/>
        {eachModeComponent[mode]}
    </div>
};

const Page = () => {
    return <AiContextProvider><AI/></AiContextProvider>
};

export default Page;