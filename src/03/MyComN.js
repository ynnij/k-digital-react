import style from "./MyCom.module.css";
const MyComN = (props) => {

    return (
        <>
            <div className={style.numDiv}>{props.n}</div>
            <div className={style.numDiv}>{props.n1}</div>
        </>
    );
}

export default MyComN;