import Hh1 from "../common/Hh1";
import data from './dataTaccident.json';
const Taacident = () => {
    console.log(data.data)
    /* // includes 사용해서 c1 배열 만들기
    let c1 =[]
    data.data.map((item)=>{
        if(!c1.includes(item.사고유형_대분류)) 
            c1.push(item.사고유형_대분류);
    })
    */
    
    //Set 쓰는 방법
    let c1 = data.data.map((item)=>item.사고유형_대분류);
    c1 = [...new Set(c1)] // 배열의 중복제거 Set(), 타입을 다시 array로 바꾸기 위해 spread 연산자 [... ] 사용 
    console.log(c1)
    

    let c1Tag = c1.map((item,idx)=>
            <li key={`li${idx}`}><button>{item}</button></li>)

    return (
        <main className="container">
            <article>
                <Hh1 title="도로교통공단_사고유형별 교통사고 통계" />
                <nav>
                    <ul>
                        <li><strong>대분류</strong></li>
                    </ul>
                    <ul>
                        {c1Tag}
                    </ul>
                </nav>
            </article>
        </main>
    )
}

export default Taacident
