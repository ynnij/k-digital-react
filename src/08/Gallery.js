import { TbCameraPin } from "react-icons/tb";
import ButtonBlue from "../common/ButtonBlue";
import { useRef, useEffect, useState } from "react";
import GalleryCard from "./GalleryCard2";

function Gallery() {
    const txt1 = useRef();
    const [keyword, setKeyword] = useState();
    const [item, setItem] = useState();
    const [cards, setCards] = useState();

    const getData = (keyword) => {
        const check = /[ㄱ-ㅎ|ㅏ-ㅣ|가-힣]/; //한글 찾는 정규표현식
        if (check.test(keyword)) //한글이 포함되어 있으면 인코딩

            keyword = encodeURI(keyword);

        let url = "https://apis.data.go.kr/B551011/PhotoGalleryService1/gallerySearchList1"
            + "?serviceKey=CoH8CpU2TWroFJZ6%2B0R%2F5zT4hHenblS1o5PpxZ8GrL5AwTUYGhMaGTi%2FD6sPkk%2FI1dwGPgStpnALZuXQ%2BBeV7Q%3D%3D"
            + "&numOfRows=10"
            + "&pageNo=1&MobileOS=ETC&MobileApp=AppTest"
            + "&arrange=A" // A=촬영일, B=제목, C=수정일
            + `&keyword=${keyword}`
            + "&_type=json";

        fetch(url)
            .then((resp) => resp.json())
            .then((data) => setItem(data.response.body.items.item))
            .catch((err) => console.log(err));
    }

    const handleOk = (e) => {
        e.preventDefault();
        if (txt1.current.value === '') return;
        setKeyword(txt1.current.value);
    }

    const handleCancel = (e) => {
        e.preventDefault();
        txt1.current.value = '';
        setKeyword('');
        setItem('');
        txt1.current.focus();
    }

    useEffect(() => {
        txt1.current.focus();
    }, []);

    useEffect(() => {
        if (!keyword) return;
        getData(keyword);
    }, [keyword]);

    useEffect(() => {
        if (!item) return;

        setCards(item.map((i, idx) =>
            <GalleryCard
                key={`gallerycard${idx}`}
                img={i.galWebImageUrl.replace("http", "https")}
                title={i.galTitle}
                content={i.galPhotographyLocation}
                sptag={i.galSearchKeyword.split(',')}
                refv={txt1} />
        ));

    }, [item])


    return (
        <main className="container">
            <article>
                <header className="flex justify-center items-center">
                    <div className="text-2xl font-bold">
                        한국관광공사_관광사진 정보
                    </div>
                    <div>
                        <TbCameraPin className="text-3xl font-bold ml-1" />
                    </div>
                </header>
                <form>
                    <div className="grid ">
                        <div>
                            <input ref={txt1} type="text" id="text1" name="text1" placeholder="키워드를 입력하세요." />
                        </div>
                        <div className="grid">
                            <ButtonBlue caption="확인" handleClick={handleOk} />
                            <ButtonBlue caption="취소" handleClick={handleCancel} />
                        </div>
                    </div>
                </form>
            </article>
            <section>
                {item &&
                    <div className="grid grid-cols-1 md:grid-cols-2  lg:grid-cols-3 gap-4 lg:gap-38">
                        {cards}
                    </div>
                }
            </section>

        </main>
    )
}

export default Gallery
