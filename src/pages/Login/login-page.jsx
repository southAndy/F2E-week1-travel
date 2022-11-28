import {addDoc,collection} from "@firebase/firestore";

import { useRef,useState } from "react";

import  firestore  from "../../firebase.config";
import './login.scss';
import banner from "../../assets/images/banner-mountain.png"

export default function loginPage(){
    //監測DOM
    const account = useRef()
    const password = useRef();

    
    const ref = collection(firestore,'account')

    const handleUserInfo = async (e)=>{
        e.preventDefault();
        console.log('saved',account.current.value);
        let data ={
            account:'andy',
        }
        
        try{
            addDoc(ref,data)
        }catch(error){
            console.log(error);
        }
    }
    return(
        <> 
            <section className='login-wrapper'>
                <form className='login' onSubmit={handleUserInfo}>
                    <label  >帳號：</label>
                    <input type="text" ref={account} />
                    <label  >密碼：</label>
                    <input type="password" ref={password} />
                    <button type="submit">送出</button>
                </form>
                <div className='bg'>
                    <img src={banner} alt="" />
                </div>
            </section>
        </>
    )
};