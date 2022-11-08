import '../Search/search.css'

export default function search({}){

    function test(){
        console.log('excuting');
    }
    return(
        <section className='search-cotainer'>
            <div className='city'>不限區域</div>
            <input className='attractions' type="text" placeholder="搜尋景點 例如：日月潭、安平古堡" />
            <button onClick={()=>test()}>搜尋</button>
        </section>
    )
}