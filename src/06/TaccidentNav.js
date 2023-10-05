import style from './Taccident.module.css'

const TaccidentNav = (props) => {
    // console.log(props.c)
    const handelClick = (item) => {
        props.setSel(item)
    }

    const liTag = props.c.map((item, idx)=>
        <li key={`li${idx}`}>
            <button className={item===props.sel?style.bt1:style.bt2} onClick={()=>handelClick(item)}>
                {item}
            </button>
        </li>);

    return (
        <nav>
            <ul>
                <li><strong>{props.title}</strong></li>
            </ul>
            <ul>
                {liTag}
            </ul>
        </nav>
    )
}

export default TaccidentNav;
