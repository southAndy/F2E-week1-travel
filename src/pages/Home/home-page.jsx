import Search from "../../components/Search/search"
import { useState,useEffect } from "react"

import banner from "../../assets/images/banner-mountain.png";
import logo from "../../assets/images/taiwanLogo.png";

export default function homePage(){
    const [api,setApi] = useState([]);
    //keyword: city
    const [selectCity,setSelectCity] = useState('')
    //kw:userInput
    const [userInput,setUserinput] = useState('')
    //初次載入頁面呼叫API
    // useEffect(()=>{
    //     console.log('no call api now');
    // },[])

    //監測輸入狀態
    useEffect(()=>{
        console.log(userInput,selectCity);
    },[userInput,selectCity])
    return (
    <>
        <nav>
            <div>
                <img src={logo} alt="logo" />
                <p>遊台灣</p>
            </div>
       </nav>
       <div>
        <img src={banner} alt="banner" />
       </div>
       <Search setSelectCity={setSelectCity} setUserinput={setUserinput} />
    </>
       
       
    )
}