import '../Search/search.css'
import { useState,useEffect } from 'react'

export default function search({setSelectCity,setUserinput}){ 
    const [isDropdown,setIsDropdown] = useState(false)  
    useEffect(()=>{
        console.log('clicked',isDropdown);
    },[isDropdown])

    return(
        <section className='search-cotainer'>
            <div className='city-search' onClick={()=>setIsDropdown(!isDropdown)}>不限區域</div>
            <div className='city'>
                {['高雄','屏東'].map((city,index)=>{
                    return <div key={index} className='city-item'>{city}</div>
                })}
            </div>
            <input onChange={(element)=>setUserinput(element.target.value)} className='attractions' type="text" placeholder="搜尋景點 例如：日月潭、安平古堡" />
            <button>搜尋</button>
        </section>
    )
}