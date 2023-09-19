import MyDiv1 from "./MyDiv1";
import { useState } from "react";
const MyDiv = () =>{
    //let n = 0;

    const [n, setN] = useState(0); //초기값 0
    const handleClick = (check) =>{
        //n = n+1;
        if(check) //check가 true면 증가
            setN(n+1); //n+=1을 setter함수로 바꾸는 것
        else { //check가 false면 감소
            if(n > 0) setN(n-1);
        }
    }
    

    return (
        <main className="container">
            <article>
                <header><h1>probs div1</h1></header>
                <MyDiv1 n={n}/>   
                <footer>
                    <span onClick={()=>handleClick(true)}>💙</span>
                    <span>{n}</span>
                    <span onClick={()=>handleClick(false)}>😫</span>
                </footer>
            </article>
        </main>
    );
}

export default MyDiv;
