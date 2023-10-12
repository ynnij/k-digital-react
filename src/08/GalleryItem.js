import GalleryCard from "../common/GalleryCard";

function GalleryItem(props) {
    console.log("galleryItem", props.item);
    const tags = props.item.map((i, idx) =>
        <GalleryCard key={`gallerycard${idx}`}
            img={i.galWebImageUrl.replace("http","https")}
            title={i.galTitle}
            content={i.galPhotographyLocation}
            sptag={i.galSearchKeyword.split(',')}/>
    )
    return (
        <div className="grid grid-cols-1 md:grid-cols-2  lg:grid-cols-3 gap-4 lg:gap-38">
            {tags}
        </div>
    )
}

export default GalleryItem
