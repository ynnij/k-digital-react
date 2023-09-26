import Hh1 from "../common/Hh1";
import data from './dataTaccident.json';
import TaccidentNav from "./TaccidentNav";
import { useEffect, useState } from "react";

const Taccident = () => {
    //console.log(data.data)
    // 대분류는 한번만 만들어지면 됨
    // c1에서 선택한 대분류에 해당하는 중분류 만들기 -> useState 사용
    // 중분류도 마찬가지로 누를 때마다 변경


    // 대분류
    /*  // includes 사용해서 c1 배열 만들기
    let c1 =[]
    data.data.map((item)=>{
        if(!c1.includes(item.사고유형_대분류)) 
            c1.push(item.사고유형_대분류);
    })
    */
    //Set 써서 c1 배열 만들기
    let c1 = data.data.map((item) => item.사고유형_대분류);
    c1 = [...new Set(c1)] // 배열의 중복제거 Set(), 타입을 다시 array로 바꾸기 위해 spread 연산자 [... ] 사용 

    // 대분류 선택
    const [sel1, setSel1] = useState();

    // 중분류
    const [c2, setC2] = useState();

    // 중분류
    const [sel2, setSel2] = useState();

    // divTag
    const [divTag, setDivTag] = useState();

    // 대분류 선택에 따른 c2 생성
    useEffect(() => {
        if (!sel1) return; // 제일 처음 sel1이 undefined일 때 처리해주기
        //console.log(sel1);

        let temp = data.data
            .filter((item) => item.사고유형_대분류 == sel1)
            .map((item) => item.사고유형_중분류);

        setC2(temp);
        setDivTag(""); // 대분류가 바뀔 때 divTag 초기화
    }, [sel1]);

    // sel2
    useEffect(() => {
        if(!sel1 || !sel2) return;  // sel1, sel2가 undefined 일 때 처리 
        let temp = data.data.filter((item) =>
            item.사고유형_대분류 == sel1 &&
            item.사고유형_중분류 == sel2
        );

        //결과 Object
        temp = temp[0];

        //object 전체 순회
        let k = Object.keys(temp).filter((item)=>
            (item!=='사고유형_대분류' && item!=='사고유형_중분류'));

        temp = k.map((item, idx)=><div key={`div${idx}`}>{item}:{temp[item]}</div>)
        setDivTag(temp);
    }, [sel2])


    return (
        <main className="container">
            <article>
                <Hh1 title="도로교통공단_사고유형별 교통사고 통계" />
                <TaccidentNav title="사고유형 대분류" c={c1} setSel={setSel1} />
                {/* c2가 있을 때만 중분류 출력하도록 처리 */}
                {c2 && <TaccidentNav title="사고유형 중분류" c={c2} setSel={setSel2} />}
                <div className="grid">
                    {divTag}
                </div>
            </article>
        </main>
    )
}

export default Taccident
