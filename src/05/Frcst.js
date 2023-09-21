import { useState } from "react";
import Hh1 from "../common/Hh1";
import data from "./dataFrcst.json"; // json 파일을 import > object로 들어옴
import style from './Frcst.module.css'
const Frcst = () => {

    //교수님 dtcn 코드
    /*
    let dtcn ={};
    let dtkey = ["frcstOneDt","frcstTwoDt","frcstThreeDt","frcstFourDt"];
    let cnkey = ["frcstOneCn","frcstTwoCn","frcstThreeCn","frcstFourCn"];
    dtkey.map((item,idx)=>dtcn[data[item]]=data[cnkey[idx]])
    */
    
    // 내가 구현한 dtcn 코드
    let dtcn ={};
    let nth = ["One","Two","Three","Four"];
    nth.forEach(i=>{
        dtcn[data[`frcst${i}Dt`]] = data[`frcst${i}Cn`]; //날짜(key):지역미세먼지(value)
    });
    console.log(dtcn);

    //날짜가 클릭되었을 때 실행할 함수
    //cnTag는 날짜 클릭할 때마다 바뀌기 때문에 state 사용
    const [cnTag, setCnTag] = useState();
    const handleClick = (dt) =>{
        let temp = dtcn[dt].split(',')
        temp = temp.map((item,idx)=>{
            let temp2 = item.replaceAll(' ','').split(':');
            let scss
            if (temp2[1]==="높음") scss = style[`cnH`]
            else if(temp2[1]==="보통") scss = style[`cnM`]
            else scss = style['cnL'];

            return (
                <div key={`cn${idx}`} >
                    <span className={style.sp1}>{temp2[0]}</span>
                    <span className={[scss]}>{temp2[1]}</span>
                </div>)
        })
        
        setCnTag(temp)
    }

    //날짜 영역 만들기
    const dtTag = Object.keys(dtcn).map((dt,idx)=> {
        return <div 
        key={`dt${idx}`} 
        className={style.dtcnkey}
        onClick={()=>handleClick(dt)} //전달값 있을 때는 콜백함수로 작성
        >{dt}</div>
    })

    return (
        <main className="container">
            <article>
                <Hh1 title="미세먼지 확인" />
                <div className="grid">
                {dtTag}
                </div>
                <div className="grid">
                {cnTag} {/*cnTag는 바뀜 */}
                </div>
            </article>
        </main>
    )
}

export default Frcst
