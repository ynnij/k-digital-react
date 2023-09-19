import MyDiv11 from "./MyDiv11";
//const MyDiv1 = (props) => {
const MyDiv1 = ({n}) => {
    return (
        <>
            <div>
                MyDiv1
            </div>
            {/* <MyDiv11 n1 = {props.n} /> */}
            <MyDiv11 n1 = {n} />
        </>
    );
}

export default MyDiv1;