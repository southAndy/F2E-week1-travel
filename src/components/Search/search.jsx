import '../Search/search.css'
import { useState,useEffect } from 'react'
import citiesList from "../../assets/citiesList.json";

export default function search({setSelectCity,setUserinput,selectCity}){ 
    const [isDropdown,setIsDropdown] = useState(false)  
    useEffect(()=>{
        console.log('clicked',isDropdown);
    },[isDropdown])
    function updateCity(e){
        setIsDropdown(!isDropdown)
        setSelectCity(e.target.textContent);
    }
    function sendSearch(){
        console.log('submit');
    }

    return(
        <section className='search-cotainer'>
            <div className='city-search' onClick={()=>setIsDropdown(!isDropdown)}>{selectCity?selectCity:'不限區域'}</div>
            <div className={`${isDropdown?'cities-show':'cities-none'}`}>
                {citiesList.map((cityList,index)=>{
                    return <div key={index} className='item'  onClick={(e)=>updateCity(e)}>{cityList.chineseName}</div>
                })}
            </div>
            <input onChange={(element)=>setUserinput(element.target.value)} className='attractions' type="text" placeholder="搜尋景點 例如：日月潭、安平古堡" />
            <button onClick={()=>sendSearch()}>搜尋</button>
        </section>
    )
}