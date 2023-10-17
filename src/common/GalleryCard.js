function GalleryCard(props) {
    let tag = props.sptag.map((t,idx)=>
                <span key={`sp${idx}`} className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                    # {t}
                </span>
    );
    return (
        <div className="max-w-sm rounded overflow-hidden shadow-lg">
            <img className="w-full h-60 object-cover" src={props.img} alt={props.title + '_image'} />
            <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2">{props.title}</div>
                <p className="text-gray-700 text-base truncate">
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
