import { useEffect, useRef, useState } from "react";
import ButtonBlue from "../common/ButtonBlue";
import pusandata from "./pusandata.json";
import GalleryCard from "../common/GalleryCard";

function Busan() {
    const sel = useRef();
    const [item, setItem] = useState();

    const getData = (cid) => {
        let url = "https://apis.data.go.kr/6260000/FestivalService/getFestivalKr"
            + "?serviceKey=CoH8CpU2TWroFJZ6%2B0R%2F5zT4hHenblS1o5PpxZ8GrL5AwTUYGhMaGTi%2FD6sPkk%2FI1dwGPgStpnALZuXQ%2BBeV7Q%3D%3D"
            + "&pageNo=1&numOfRows=10&resultType=json"
            + `&UC_SEQ=${cid}`;

        fetch(url)
            .then((resp) => resp.json())
            .then((data) => {
                console.log(data.getFestivalKr.item[0]);
                setItem(data.getFestivalKr.item[0]);

            })
            .catch((err) => console.log(err));
    }

    const code = pusandata.map((item) => {
        let cName = item.콘텐츠명.slice(0, item.콘텐츠명.lastIndexOf('('));
        return [item.콘텐츠ID, cName];
    });

    const option = code.map((item, idx) =>
        <option key={`option${idx}`} value={item[0]}>{item[1]}</option>
    );

    const handleOk = (e) => {
        e.preventDefault();

        if (sel.current.value === '') return;
        getData(sel.current.value);

    }

    const handleCancel = (e) => {
        e.preventDefault();
        setItem();
        sel.current.value ='';
        sel.current.focus();
    }

    const handleChange = () => {
        console.log(sel.current.value);
    }

    useEffect(() => {
        sel.current.focus();
    }, [])

    return (
        <main className="container">
            <article>
                <header>
                    <h1 className="text-2xl font-bold">
                        부산 축제
                    </h1>
                </header>
                <form>
                    <div className="grid grid-cols-4 gap-4">
                        <div className="col-span-2">
                            <select ref={sel} onChange={handleChange}>
                                <option value=''>축제명을 선택하세요</option>
                                {option}
                            </select>
                        </div>

                        <ButtonBlue caption="확인" handleClick={(e) => handleOk(e)} />
                        <ButtonBlue caption="취소" handleClick={(e) => handleCancel(e)} />


                    </div>


                </form>
            </article>
            <div className="flex justify-center mb-10">
                {item && <GalleryCard img={item.MAIN_IMG_NORMAL} title={item.TITLE}
                    //content={item.ITEMCNTNTS.slice(0, 100) + "..."} 
                    content ={item.ITEMCNTNTS}
                    sptag={[item.GUGUN_NM, item.USAGE_AMOUNT,item.MAIN_PLACE]} 
                    key={item.UC_SEQ}/>}
            </div>

        </main>
    )
}

export default Busan
