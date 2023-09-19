import style from './Lotto.module.css';
import { useState } from 'react';

const Lotto = () => {
    let numArr = [];
    //let lottoTag = [];
    
    //state 사용 문법
    const [lottoTag, setLottoTag] = useState([]);

    const getNum = () => {
        numArr = [];
        while(numArr.length<7){
            let n = Math.floor(Math.random()*45)+1;
            if(!numArr.includes(n))
                numArr.push(n);
        }
        console.log(numArr);

        // lottoTag = numArr.map((item)=>
        //     <div className={style.lottonum}>1</div>
        // ); 
        
        setLottoTag(numArr.map((item)=>
            <div className={style.lottonum}>{item}</div>
        ));

    }
    
    return (
        <main className="container">
            <article>
                <header>
                    <h1>로또생성기</h1>
                </header>
                <div className={style.lottobox}>
                   {lottoTag}
                </div>
                <footer>
                    {/* <button onClick={getNum}>생성하기</button> */}
                    <button onClick={()=>getNum()}>생성하기</button> 

                </footer>
            </article>
        </main>
    );
}

export default Lotto;