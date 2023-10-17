import { useLocation } from "react-router-dom";
import qs from 'query-string';

const RoutePage2 = () => {
    const loc = useLocation().search;
    const item = qs.parse(loc).item;
    const item2 = qs.parse(loc).item2;

    console.log(item)
    return (
        <article>
            page2 : {item}, {item2}
        </article>
    )
}

export default RoutePage2
