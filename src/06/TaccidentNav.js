const TaccidentNav = (props) => {
    // console.log(props.c)
    
    const handelClick = (item) => {
        props.setSel(item)
    }

    const liTag = props.c.map((item, idx)=>
        <li key={`li${idx}`}>
            <button onClick={()=>handelClick(item)}>
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
