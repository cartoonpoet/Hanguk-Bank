'use client'

import Button from "@/app/_component/Button/page";
import {URL} from '@/_constants/url'
import useCommonStore from "@/_hooks/useCommonStore";

export default function App() {
  const { setMode } = useCommonStore();
  return <div className="flex flex-col justify-center items-center h-dvh gap-10">
    <div onClick={() => setMode('simple')}><Button name="간편모드" type="Fill" status="Default" size="Large" href={URL.home}/></div>
    <div onClick={() => setMode('voice')}><Button name="음성모드" type="Soft" status="Default" size="Large" href={URL.home}/></div>
    <div onClick={() => setMode('ai')}><Button name="AI모드" type="Outline" status="Default" size="Large" href={URL.home}/></div>
  </div>
}
