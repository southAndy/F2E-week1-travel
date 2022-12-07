import { useState } from "react"
import  firestore  from "../../firebase.config";
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth'


import './register.scss'
import { async } from "@firebase/util";
export default function registerPage(){
    // const account = useRef();
    // const password = useRef()
    const [account,setAccount]=useState('');
    const [password,setPassword] = useState('');

    const handleAccount = (e)=>{
        setAccount(e.target.value) 
    }
    const handlePassword = (e)=>{
        setPassword(e.target.value) 
    }
    const handleRegister = async(e)=>{
        e.preventDefault()
        //account / password = !password
        if(!account||!password){
            return alert('請記得都要填寫')
        }
        try{
           const authentication = getAuth();
           const response =  await createUserWithEmailAndPassword(authentication,account,password)
            console.log(response);
        }catch(error){
            console.log(error);
            if(error.message){
                return alert(error.message)
            }
        }
    }
    return ( 
    <>
    
    <form className='register'  onSubmit={handleRegister}>
                    <label  >信箱：</label>
                    {/* 確保 state 跟UI 有掛勾的 */}
                    <input type="text" value={account} placeholder='example@com.tw' onChange={handleAccount}/>
                    <label  >密碼：</label>
                    <input type="password" value={password} onChange={handlePassword} />
                    <button type="submit" className="submit" >註冊</button>
                </form>
    </>)
}