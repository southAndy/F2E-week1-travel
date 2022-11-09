import Search from "../../components/Search/search"
import { useState,useEffect } from "react"

import banner from "../../assets/images/banner-mountain.png";
import logo from "../../assets/images/taiwanLogo.png";
import FavoriteIcon from "../../assets/images/Frame 78.png";

import "../../components/Navbar/navbar.scss"

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
        <header>
            <nav className="nav">
                <li>
                    <div className="logo-container">
                        <img src={logo} alt="網站圖示" />
                    </div>
                    <span>遊台灣</span>
                </li>
                <li>
                    <a href={'/Favorites'} >
                        <img src={FavoriteIcon} alt="收藏按鈕" />
                    </a>
                </li>
            </nav>
        </header>
       <div>
        <img src={banner} alt="banner" />
       </div>
       <Search setSelectCity={setSelectCity} setUserinput={setUserinput} selectCity={selectCity} />
    </>
       
       
    )
}