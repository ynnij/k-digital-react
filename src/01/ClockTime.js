import { useState } from "react";
const ClockTime = () => {
    let time = new Date().toLocaleTimeString();
    
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
