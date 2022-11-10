import axios from "axios"

const touristAPI = axios.create({
    baseURL:'https://tdx.transportdata.tw/api/basic/v2/Tourism',
    
})


export default touristAPI