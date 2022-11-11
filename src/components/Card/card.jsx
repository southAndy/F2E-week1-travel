import testPitcture from "../../assets/images/Picture.png";
import icon from "../../assets/images/locationIcon.png"


import '../Card/card.scss'

export default function card({image=null,title='測試標題',locationName='台灣'}){
    return (
        <div className="card-container">
            <div className="card-image">
                <img src={image} alt="" />
            </div>
            <p className="card-title">{title}</p>
            <div className="card-location">
                <div className="icon-box">
                    <img src={icon} alt="" />
                </div>
                <span>{locationName}</span>
            </div>
        </div>
    )
}