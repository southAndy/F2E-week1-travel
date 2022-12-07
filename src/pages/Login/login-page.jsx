// import {setDoc,getDocs,doc,collection} from "@firebase/firestore";
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth'

import { useRef,useState } from "react";

import  firestore  from "../../firebase.config";


import './login.scss';
import banner from "../../assets/images/banner-mountain.png"
import { async } from '@firebase/util';


export default function loginPage(){

    //驗證使用者身份
    const [loginAccount,setLoginAccount] =useState('')
    const [loginPassword,setLoginPassword] =useState('')
    
    const handleAccount = (e)=>{
        setLoginAccount(e.target.value)
    }
    const handlePassword = (e)=>{
        setLoginPassword(e.target.value)
    }


    const handleAction = async(e) => {
        e.preventDefault()
        if(!loginAccount||!loginPassword){
            return alert('請記得填寫欄位')
        }
        try{
            const authentication = getAuth();
            console.log(authentication);
            let response = await signInWithEmailAndPassword(authentication, loginAccount, loginPassword)
            console.log(response);
            window.location.href='/';
        }catch(error){
            console.log(error);
            if(error.message){
                return alert(error.message)
            }
        }
    }

    return(
        <> 
            <section className='login-wrapper'>
                <form className='login' onSubmit={handleAction} >
                    <label  >帳號：</label>
                    <input type="text"  value={loginAccount} placeholder='example@com.tw' onChange={handleAccount}/>
                    <label  >密碼：</label>
                    <input type="password" value={loginPassword} onChange={handlePassword} />
                    <button type="submit"  className="submit" >登入</button>
                    <a href={'/register'}>註冊會員</a>
                </form>
                <div className='bg'>
                    <img src={banner} alt="" />
                </div>
            </section>
        </>
    )
};