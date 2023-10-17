import { useParams } from "react-router-dom"
const RoutePage1 = () => {
    const item = useParams().item;
    return (
        <article>
            page1 : {item}
        </article>
    )
}

export default RoutePage1
