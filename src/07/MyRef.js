import { useState, useEffect, useRef } from "react";
import Hh1 from "../common/Hh1";

const MyRef = () => {
    const [cnt, setCnt] = useState(0); //cnt 0으로 초기화
    const title = 'useRef Hook : 변수제어';
    
    //Ref 변수
    const cnt2 = useRef(0); // 괄호 안에 초기값
    const txt1 = useRef();//Ref form -> 새로 고침했을 때 커서가 input에 가도록

    const handleClickRef = () =>{
        cnt2.current = cnt2.current+1; //ref변수 사용 시 .current 사용!! -> 값은 재랜더링이 일어날 때 값이 반영된다.
        console.log(cnt2.current); 
    }

    //useState, useEffect
    const handleClick = () => {
        setCnt(cnt+1);
        console.log(cnt); // 변경하기 전 출력됨 
    }

    // 컴포넌트 생성 시 한 번 호출
    useEffect(()=>{ 
        setCnt(100) 
        txt1.current.focus(); //txt1에 focus 주기
    },[]); // DependencyList 비었을 때
    
    // 변경된 값 출력하기
    useEffect(()=>{
        console.log('useEffect : ',cnt);
    },[cnt])

    
    const handleChange = () =>{
        console.log("handleChange", txt1.current.value);
        setCnt(parseInt(txt1.current.value)); //input에 들어있는 값은 전부 text!!
    }
    return (
        <main className="container">
            <article>
                <Hh1 title={title}/>
                <div className="grid">
                    <div>state 변수 : {cnt}</div>
                    <div>ref 변수 : {cnt2.current}</div>
                </div>
                <footer>
                    <div className="grid">
                        <button onClick={handleClick}>state 변수 증가</button>
                        <button onClick={handleClickRef}>ref 변수 증가</button>
                    </div> 
                </footer>
                
            </article>
            <article>
                <Hh1 title='useRef Hook : Form 제어'/>
                <form>
                    <input ref={txt1} type='number' id='txt1' name='txt1' placeholder="숫자입력" onChange={handleChange}/> {/* ref에 Ref 변수 연결!! : txt1에 input 전체가 들어감 */}
                </form>
            </article>
        </main>
    );
}

export default MyRef;
