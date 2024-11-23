"use client"

import { useEffect } from "react";

export default function InstallBootstrap(){
    useEffect(()=>{
        require('bootstrap/dist/js/bootstrap.bundle.min.js')
    },[]);
    return <></>
}