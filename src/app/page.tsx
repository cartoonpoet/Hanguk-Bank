// import {redirect} from "next/navigation";
'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function App() {
  // redirect('/home')
  const router = useRouter();

  useEffect(() => {
    router.push('/home');
  }, [router]);

  return null; // 초기 화면에서는 아무것도 렌더링하지 않음
}
