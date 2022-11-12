import { useParams } from "react-router-dom";
import { useState,useEffect } from "react";

import axios from "axios";


export default function deatilPage(){
    let [api,setApi]=useState([])
    let {id}=useParams();
    console.log(id);
    useEffect( ()=>{
        console.log('no call api now');
        let getAPI = async ()=>{
            let list = await axios('https://tdx.transportdata.tw/api/basic/v2/Tourism/Activity?%24top=200&%24format=JSON').then((api)=>api.data)
            let specificAPI = list.filter((data)=>data.ActivityID===id)
            //取得資料存入state
            console.log(specificAPI);
            setApi(specificAPI)
        }
        getAPI()
    },[])
    //期望用來處理找到對應資料 -- （討論）
    // let specificAPI = useMemo(()=>{
    //     return api.filter((data)=>data.ActivityID===id)
    // },[])
    return (
        <div>welcome to detail</div>
    )
}