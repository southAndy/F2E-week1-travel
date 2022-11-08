import Search from "../../components/Search/search"
import { useState,useEffect } from "react"

import banner from "../../assets/images/banner-mountain.png";
import logo from "../../assets/images/taiwanLogo.png";

export default function homePage(){
    //初次載入頁面呼叫API
    useEffect(()=>{
        console.log('no call api now');
    },[])
    const [api,setApi] = useState([]);
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
       <Search/>
    </>
       
       
    )
}