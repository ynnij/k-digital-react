import { useEffect, useState } from "react";
import LottoNums from "./LottoNums";
const Lotto = () => {
    const [nums, setNums] = useState();
    
    //버튼 클릭
    const handleClick = () => {
        let temp = [];
        while (temp.length < 7) {
            let n = Math.floor(Math.random() * 45) + 1;
            if (!temp.includes(n)) temp.push(n);
        }
        setNums(temp);
    }

    //nums가 바뀔 때마다 콘솔 출력
    useEffect(() => {
        console.log("nums:",nums);
    }, [nums]);

    return (
        <main className="container">
            <article>
                <header>
                    <h1>로또생성기</h1>
                </header>
                {/*nums에 초기값이 없기 때문에 nums가 없을 때 처리 필요*/}
                {nums? <LottoNums nums={nums}/> : "숫자가 없습니다."} 
                <footer>
                    <button onClick={handleClick}>생성하기</button>
                </footer>
            </article>
        </main>
    );
}

export default Lotto;