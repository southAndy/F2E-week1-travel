import testPitcture from "../../assets/images/Picture.png";
import icon from "../../assets/images/locationIcon.png"


import '../Card/card.scss'

export default function card({id=1,image=null,title='測試標題',locationName='台灣'}){
    return (
        <a className="card-container" href={`/detail/${id}`}>
            <div className="card-image">
                <img src={image?.length===0?testPitcture:image} alt="活動圖片" />
            </div>
            <p className="card-title">{title}</p>
            <div className="card-location">
                <div className="icon-box">
                    <img src={icon} alt="座標圖樣" />
                </div>
                <span>{locationName}</span>
            </div>
        </a>
    )
}