"use client"

import { useEffect, useState } from "react";

import Modal from "@/components/Modal";
import AuthModal from "@/components/AuthModal";



const ModalProvider = () => {
    const [isMounted, setIsMounted] = useState(false);

    //Mount가 True일 때 업로드 된다. 서버사이드 랜더링이 되면 errors를 발생시키는 트릭..?
    //서버사이드 랜더링일때 랜더링이 되지 않도록
    useEffect(()=>{
        setIsMounted(true);
    },[])

    //mounted가 false일 때,
    if(!isMounted){
        return null;
    }

    //mounted가 true일 때,
    return (
        <>
        <AuthModal></AuthModal>
        </>
    );
}
export default ModalProvider;