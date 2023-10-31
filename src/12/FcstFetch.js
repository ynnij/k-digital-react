import { useParams } from "react-router-dom";
import Ultra from "./Ultra";
import { useEffect, useState } from "react";

const FcstFetch = () => {
    //fetch한 데이터 저장할 상태변수 
    const [data, setData] = useState([]);

    //파라미터
    const dt = useParams().dt;
    const area = useParams().area;
    const x = useParams().x;
    const y = useParams().y;
    const m = useParams().m;

    //환경변수 값 가져오기
    const apikey = process.env.REACT_APP_API_KEY;

    useEffect(() => {
        let url = `http://apis.data.go.kr/1360000/VilageFcstInfoService_2.0`;

        //초단기, 단기 구분해서 url 생성
        if (m === '1') {
            url += '/getUltraSrtFcst';
            url += `?serviceKey=${apikey}`
                + `&numOfRows=60&pageNo=1`
                + `&base_date=${dt}`
                + `&base_time=0630`
                + `&nx=${x}&ny=${y}&dataType=JSON`;
        }
        else {
            url += '/getVilageFcst';
            url += `?serviceKey=${apikey}`
                + `&numOfRows=60&pageNo=1`
                + `&base_date=${dt}`
                + `&base_time=0500`
                + `&nx=${x}&ny=${y}&dataType=JSON`;
        }
        fetch(url)
            .then((resp) => resp.json())
            .then((data) => setData(data.response.body.items.item))
            .catch((err) => console.log(err));
    }, []);

    useEffect(() => {
        console.log(data);
    }, [data])

    return (
        <div>
            <Ultra dt={dt} area={area} m={m} tItem={data} />
        </div>
    )
}

export default FcstFetch
