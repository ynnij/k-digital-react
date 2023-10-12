//ref 변수 넘겨서 태그 눌렀을 때 검색창에 값 들어가도록 
function GalleryCard(props) {
    const handleClick = (item) =>{
        console.log(item)
        props.refv.current.value = item;
    }
    let tag = props.sptag.map((t,idx)=>
                <span key={`sp${idx}`} onClick={()=>handleClick(t)} className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                    # {t}
                </span>
    );
    return (
        <div className="max-w-sm rounded overflow-hidden shadow-lg">
            <img className="w-full h-60 object-cover hover:h-full" src={props.img} alt={props.title + '_image'} />
            <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2">{props.title}</div>
                <p className="text-gray-700 text-base">
                    {props.content}
                </p>
            </div>
            <div className="px-6 pt-4 pb-2">
                {tag}
            </div>
        </div>
    )
}

export default GalleryCard
