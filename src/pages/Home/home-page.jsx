import { useState,useEffect,useMemo } from "react"
import axios from "axios";

//components
import Search from "../../components/Search/search"
import Card from "../../components/Card/card";

//assets
import banner from "../../assets/images/banner-mountain.png";
import logo from "../../assets/images/taiwanLogo.png";
import FavoriteIcon from "../../assets/images/Frame 78.png";
import locationIcon from "../../assets/images/locationIcon.png"

import "../../components/Navbar/navbar.scss"
import '../Home/home-page.scss'

export default function homePage(){
    const [allData,setAllData] = useState({
        '0': [],
        '1': [],
        '2': [],
    });
    const [api,setApi] = useState([]);
    //keyword: city
    const [selectCity,setSelectCity] = useState('')
    //kw:userInput
    const [userInput,setUserinput] = useState('')
    

    //控制 顯示 component 的變數
    const [showCategory,setShowCategory]=useState(0);
    const API_LIST = ['https://tdx.transportdata.tw/api/basic/v2/Tourism/Activity?%24top=200&%24format=JSON','https://tdx.transportdata.tw/api/basic/v2/Tourism/ScenicSpot/Taipei?%24top=30&%24format=JSON','https://tdx.transportdata.tw/api/basic/v2/Tourism/Restaurant?%24top=30&%24format=JSON'];

    //
    useEffect(() => {
        console.log(`${allData} is changed!`)
    }, [allData])

    //初次載入頁面呼叫API
    useEffect( ()=>{
        console.log('trigger useEffect');
        let getAPI = async ()=>{
            let list = await axios(API_LIST[showCategory]).then((api)=>api.data)
            //取得資料存入state
            // allData[showCategory] = list
            setAllData((prev)=>{
                console.log(prev);
                const copyObj = {...prev}
                // const copyObj = prev
                copyObj[showCategory] = list
                return copyObj
                      
            })
            setApi(list)
        }
        if(!allData[showCategory]?.length){
            getAPI()
        }else{
            setApi(allData[showCategory])
        }
    },[showCategory])
    //隨機產生首頁 banner
    let renderAttractionsBanner = useMemo(()=>{
        // let renderNumberOneTimes = Math.floor(Math.random()*api.length)
        // let renderNumberTwoTimes = Math.floor(Math.random()*api.length)
        let x =api.slice(22,23)
        console.log(x);
        return x 
    },[api])
    let renderAttractions = useMemo(()=>{
        // let renderNumberOneTimes = Math.floor(Math.random()*api.length)
        // let renderNumberTwoTimes = Math.floor(Math.random()*api.length)
        let x =api.slice(22,26)
        console.log(x);
        return x 
    },[api])

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
       <div >
        <img src={banner} alt="banner" />
       </div>
       <Search setSelectCity={setSelectCity} setUserinput={setUserinput} selectCity={selectCity} />
       <main className="main">
            <h3>{'近期活動'}</h3>
                <div className="major-attractions-city">
                    <div >
                        <img src={locationIcon} alt="座標圖樣" />
                    </div>
                    <span>{'台北 北投區'}</span>
                </div>
                {/* refactor:設計共用模組？ */}
                <figure className="major-attractions">
                    <img src={renderAttractionsBanner[0]?.Picture.PictureUrl1} alt="banner" />
                </figure>
                <figcaption className="major-attractions-title">
                    {renderAttractionsBanner[0]?.ActivityName}
                </figcaption>
                <p className="major-attractions-date">活動日期：{'2021-05-21 ~ 2021-06-20'}</p>
                <a href={`/Detail/${renderAttractionsBanner[0]}`} className='detail'>活動詳情</a>
            {renderAttractions.map((data,index)=>{
                return <Card  id={data.ActivityID} key={index} image={data.Picture.PictureUrl1} title={data.ActivityName} locationName={data.Location}/>
            })}
            <button onClick={()=>setShowCategory(0)}>1</button>
            <button onClick={()=>setShowCategory(1)}>2</button>
            <button onClick={()=>setShowCategory(2)}>3</button>
            <a className="more" href={'/result'}>+ {'更多景點'}</a>
       </main>
       <footer>
        <div>
            <img src="" alt="" />
        </div>
        <p>Front-end: southAndy</p>
       </footer>
    </>
       
       
    )
}