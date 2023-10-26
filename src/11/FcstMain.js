import { useRef, useState, useEffect } from "react";
import ButtonBlue from "../common/ButtonBlue";
import getxy from './getxy.json';
import { Link } from "react-router-dom";

const FcstMain = () => {
    //state 변수 만들기
    const [dt, setDt] = useState(); //날짜
    const [area, setArea] = useState(); //지역
    const [x, setX] = useState(); //해당 지역 X 좌표
    const [y, setY] = useState(); //해당 지역 y 좌표

    //select 옵션 만들기
    const optionTag = getxy.map((item) =>
        <option key={item.행정구역코드} value={item.행정구역코드}>{item["1단계"]}</option>);

    //입력폼
    const dtRef = useRef();
    const selRef = useRef();

    //날짜 변경 시 발생
    const handleDtChange = () => {
        setDt(dtRef.current.value.replaceAll('-', ''));
    }

    //셀렉트 박스 변경 시 발생 : 지역 선택
    const handleSelChange = () => {
        if (selRef.current.value == '') return;
        //1. 셀렉트 박스 값 가져오기
        //2. getxy에서 sel값과 행정구역코드가 같은 자료 추출
        //3. 상태변수 area, x, y 변경
        let result = getxy.filter((item) => item.행정구역코드 == selRef.current.value)[0];

        setArea(result["1단계"]);
        setX(result["격자 X"]);
        setY(result["격자 Y"]);
    }

    const handleFcstClick = (e) => {
        e.preventDefault();
        alert("정보를 모두 선택해주세요")
    }
    //컴포넌트 생성 시 
    useEffect(() => {
        dtRef.current.focus();
    }, []);

    //dt 상태변수가 변경된 경우
    useEffect(() => {
        console.log(dt)
    }, [dt]);

    // area, x, y 상태변수가 변경되었을 경우
    useEffect(() => {
        console.log(area, x, y)
    }, [area, x, y])  //DependencyList에 여러 개 쓸 수 있다.

    return (
        <div className="mx-10 p-5 shadow-lg	">
            <form>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                    <h1 className="text-xl font-bold col-span-1 md:col-span-2 mb-4">단기예보 선택</h1>
                    <input type="date" id="date" name="date" ref={dtRef} onChange={handleDtChange} />
                    <div className="mb-4">
                        <select id="sel" ref={selRef} className="h-full" onChange={handleSelChange}>
                            <option value=''>선택</option>
                            {optionTag}
                        </select>
                    </div>
                    {
                        (dt === undefined) | (x === undefined)
                            ? <ButtonBlue caption="초단기예보" handleClick={handleFcstClick} />
                            : <Link to={`/ultra/${dt}/${area}/${x}/${y}`}>
                                <ButtonBlue caption="초단기예보" />
                            </Link>
                    }
                    {
                        (dt === undefined) | (x === undefined)
                            ? <ButtonBlue caption="단기예보" handleClick={handleFcstClick} />
                            : <Link to={`/vilage/${dt}/${area}/${x}/${y}`}>
                                <ButtonBlue caption="단기예보" />
                            </Link>
                    }

                </div>
            </form>
        </div>
    )
}

export default FcstMain
