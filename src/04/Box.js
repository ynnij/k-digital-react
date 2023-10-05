import { useState, useEffect, useRef } from "react";
import style from './Box.module.css';
import Hh1 from "../common/Hh1";

const getFetch = (date) => {
    let url = `https://kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchDailyBoxOfficeList.json`
            +`?key=f5eef3421c602c6cb7ea224104795888&targetDt=${date}`
    
    fetch(url)
    .then((resp) => resp.json())
    .then((data) => {
        console.log(data.boxOfficeResult.dailyBoxOfficeList);
    })
    .catch((err) => console.log(err));

}

const Box = () => {
    //날짜 선택
    const dt = useRef();

    //선택된 날짜
    const [cdt, setCdt] = useState();

    //url

    //컴포넌트 생성 시 
    useEffect(()=>{
        //input에 포커스 
        dt.current.focus();

        //default 날짜 어제로
        const yesterday = new Date(new Date().setDate( new Date().getDate() - 1));
        let defaultDay = yesterday.getFullYear()+'-' // year
            +('0' + (yesterday.getMonth() + 1)).slice(-2)+'-' // getMonth()는 0부터 시작하기 때문에 +1 필요함 & format 맞추기 위해 0 앞에 붙이고 slice  
            +('0' + yesterday.getDate()).slice(-2); // 요일은 getDate()
        setCdt(defaultDay.replaceAll('-',''));
        dt.current.value = `${defaultDay}`;
    },[]);

    //날짜 변경되었을 때 
    const handleChange =()=>{
        setCdt(dt.current.value.replaceAll('-',''));
    }

    useEffect(()=>{
        getFetch(cdt);
    },[cdt])


    return (
        <main className="container">
            <Hh1 title="박스오피스 ver.2" />
            <article>
                <header>
                    <div htmlFor="dt" className={style.dt}>선택날짜 : {cdt}</div>
                    <form>
                        {/*<label htmlFor="dt" className={style.dt}>날짜선택</label> {/* input id와 연결하는 label의 for는 htmlFor로 작성 */}
                        <input ref={dt} type="date" id="dt" name="dt" onChange={handleChange}/>
                    </form>
                </header>
            </article>
        </main>
    )
}

export default Box
