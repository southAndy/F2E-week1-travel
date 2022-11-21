import Search from "../../components/Search/search"
import { useState,useEffect, useMemo } from "react";
import {useSearchParams} from 'react-router-dom'

import axios from "axios";


export default function Result({}){
    const [data,setData] = useState([])
    const [userInput,setUserinput] = useState('')
    const [selectCity,setSelectCity] = useState('')
    const [queryList] = useSearchParams()
    console.log(queryList.get('keyword'))

    const API_LIST = ['https://tdx.transportdata.tw/api/basic/v2/Tourism/Activity?%24top=200&%24format=JSON','https://tdx.transportdata.tw/api/basic/v2/Tourism/ScenicSpot/Taipei?%24top=30&%24format=JSON','https://tdx.transportdata.tw/api/basic/v2/Tourism/Restaurant?%24top=30&%24format=JSON'];
    useEffect(()=>{
        setSelectCity(queryList.get('city'))
        setUserinput(queryList.get('keyword'))
    },[])
    useEffect( ()=>{
        console.log('trigger useEffect');
        let getAPI = async ()=>{
            let list = await axios(`https://tdx.transportdata.tw/api/basic/v2/Tourism/Activity/${queryList.get('city')}?%24top=200&%24format=JSON`).then((api)=>api.data)
            console.log(list);
            setData(list)
        }
        getAPI()
     
    },[])
    //初次載入頁面呼叫API
    const renderSpot = useMemo(()=>{
        return data.filter((data)=>{
            if(data.ActivityName.includes(queryList.get('keyword'))){
                return true
            }else{
                return false
            }
        })
    },[])
    
    return (
        <section>
            <Search cityValue={queryList.get('city')} keyWord={queryList.get('city')} selectCity={selectCity} setSelectCity={setSelectCity} setUserinput={setUserinput}/>
            {renderSpot.map((data)=>{return (<div>{data.ActivityName}</div>)})}
        </section>
    )
}