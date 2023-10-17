import pusandata from "./pusandata.json";
import GalleryCard from "../common/GalleryCard";

function Busan() {
    const code = pusandata.map((item) =>
        
         <GalleryCard title={item.제목}
        img={item.이미지URL}
        content ={item.상세내용}
        sptag={[item.구군,item.장소]}
    />
    );

    return (
        <main className="container">
            <article>
                <header>
                    <h1 className="text-2xl font-bold">
                        부산 축제
                    </h1>
                </header>
                <div className="grid grid-cols-1 md:grid-cols-2  lg:grid-cols-3 gap-4">
                    {code}
                </div>
            </article>
            
           

        </main>
    )
}

export default Busan
