import ClockImage from "./ClockImage";
import ClockTime from "./ClockTime";
import MyComN from "../03/MyComN";
const Clock = () => { //파일명과 동일한 이름 
    return (  //return() 반드시 존재
        <div className="App">
            <header className="App-header">
                <ClockImage />
                <ClockTime />
            </header>
        </div>
    );
}

export default Clock; // 컴포넌트 명