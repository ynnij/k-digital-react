import MyComN from "./MyComN";

const MyCom = () => {
    let n = undefined;
    
    let tag;
    if (n === undefined) {
        tag = <div>값이 없습니다.</div>
    }
    else {
        tag =<MyComN n={n} n1={n*2}/>
    }

    return (
        <main className="container">
            <article>
                <header>MyCom</header>
                
                { //변수 처리
                /* {tag} */
                }

                { //삼항 연산자
                /* {
                    n === undefined 
                    ? <div>값이 없습니다.</div> 
                    : <MyComN n={n} n1={n*2}/>
                } */
                
                //falsy 연산
                n && <MyComN n={n} n1={n*2} /> //n이 undefined면 false처리됨
                }
            </article>
        </main>
    );
}

export default MyCom;