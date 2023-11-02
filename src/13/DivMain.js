import { useEffect, useState } from "react"
import Div1 from "./Div1"

const DivMain = () => {
  const [n,setN] = useState(0);  
  const [n2,setN2] =useState(n);

  useEffect(()=>{
    setN2(n*2)
  },[n])

  return (
    <div className="container mt-10 bg-green-950 rounded-lg text-white p-5">
      DivMain
      <h1 className="text-white">n = {n}</h1>
      <h1 className="text-white">n2 = {n2}</h1>
      <Div1 n ={n} setN={setN}/>
    </div>
  )
}

export default DivMain
