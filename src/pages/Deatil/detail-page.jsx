import { useParams } from "react-router-dom";
import { useState,useEffect } from "react";

import axios from "axios";

import './detail-page.scss';


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
        api.map((data)=>{return (
        <section className="detail-container" key={data.ActivityID}>
            <div>
                <h3>{data?.ActivityName}</h3>
                <div className="favorite">
                    <div>
                        <img src="" alt="" />
                    </div>
                    <span>加入最愛</span>
                </div>
            </div>
            <figure>
                <img src={data.Picture.PictureUrl1} alt="" />
            </figure>
            <main className="main">
                <section className="main-info">
                    <div className="label">
                        標籤類別
                        <div>
                            <div>{data.Class1}</div>
                            <div>{data.Class2}</div>
                        </div>
                    </div>
                    <div className="open">
                        展覽時間
                        <div>
                            <time>{data.StartTime}</time>
                            <time>{data.EndTime}</time>
                        </div>
                    </div>
                    <div className="address">
                        地址
                        <span>{data.Address}</span>
                    </div>
                    <div className="contact">
                        <a href={`tel:${data.Phone}`}>{data.Phone}</a><a href='##'>官網</a>
                    </div>
                    <div className="map">
                       {data.Position.PositionLat} {data.Position.PositionLon}
                    </div>
                </section>
                <article className="main-content">
                    {data.Description}
                </article>
            </main>
        </section>)
        })
        //主要頁面
        

        //附近景點
    )
}