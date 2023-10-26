import { useParams } from "react-router-dom";
import { useState, useEffect, useRef } from "react";
import getcode from './getcode.json'
import FcstTable from "./FcstTable";
const VilageFcst = () => {
    const dt = useParams().dt;
    const area = useParams().area;
    const x = useParams().x;
    const y = useParams().y;

    const [items, setItems] = useState([]);
    const [selItems, setSelItems] = useState([]);
    const selRef = useRef();

    useEffect(() => {
        const url = `http://apis.data.go.kr/1360000/VilageFcstInfoService_2.0/getUltraSrtFcst`
            + `?serviceKey=CoH8CpU2TWroFJZ6%2B0R%2F5zT4hHenblS1o5PpxZ8GrL5AwTUYGhMaGTi%2FD6sPkk%2FI1dwGPgStpnALZuXQ%2BBeV7Q%3D%3D`
            + `&numOfRows=60&pageNo=1`
            + `&base_date=${dt}`
            + `&base_time=0630`
            + `&nx=${x}&ny=${y}&dataType=JSON`

        fetch(url)
            .then((resp) => resp.json())
            .then((data) => {
                console.log(data.response.body.items.item)
                setItems(data.response.body.items.item);
            })
            .catch((err) => console.log(err));
    }, []);

    // 옵션 만들기
    const r1 = getcode.filter((item) => item.예보구분 == '단기예보');
    const options = r1.map((item) =>
        <option key={item.항목값} value={item.항목값}>{item.항목명} ({item.항목값})</option>
    );

    const handleChange = () => {
        if (selRef.current.value == '') {
            setSelItems([]);
            return;
        }
        setSelItems(items.filter((item) => item.category == selRef.current.value))
    }

    return (
        <div className="mx-10 p-5 shadow-lg	grid grid-cols-1 md:grid-cols-2 items-center content-center ">
            <h1 className="text-lg font-bold">
                [단기예보] {area} ({dt.substring(0, 4) + "-" + dt.substring(4, 6) + "-" + dt.substring(6,)})
            </h1>
            <select ref={selRef} onChange={handleChange}>
                <option value={''}>선택</option>
                {options}
            </select>

            <div className="mt-4 col-span-2">
            
                    {(selItems.length != 0) &&
            <FcstTable selItems={selItems} r1={r1} sel={selRef.current.value} />}
            </div>
        </div>
    )
}

export default VilageFcst
