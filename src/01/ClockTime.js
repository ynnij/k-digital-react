import { useState, useEffect } from "react";
const ClockTime = () => {
    //일반 변수로 처리 => 재렌더링이 되지 않음
    // let time = new Date().toLocaleTimeString();
    // setInterval(()=>{
    //     time = new Date().toLocaleTimeString();
    //     console.log(time); 
    // }, 1000);

    // 상태 관리 필요 -> useState 사용(리액트가 상태를 관리하기 시작)
    const [time, setTime] = useState(new Date().toLocaleTimeString()); 
    
    // useEffect : 맨 처음 한번만 실행
    useEffect(()=>{
         const t = setInterval(()=>{
             setTime(new Date().toLocaleTimeString());
             // console.log(time); //콘솔에 바뀐 값 출력되지 않음
         }, 1000);  
         
         return ()=>{clearInterval(t)}; //setInterval하면 clearInterval 해주어야함
                                    // clear는 return에서 해주면 된다.
     },[]);

    //useEffect : 특정 변수가 바뀔 때마다 실행
    useEffect(()=>{
        console.log(time);
    },[time]);
    
    return (
        <>
            <p>
                Hello React !!
            </p>
            <div>
                현재시간 : {time} 
            </div>
        </>
    )
}
export default ClockTime;
