import Div3 from "./Div3"
import { DivAtom4 } from "./DivAtom"
import { useRecoilValue } from "recoil";

const Div2 = () => {
  const n4 = useRecoilValue(DivAtom4)
  return (
    <div className="bg-green-500 rounded p-5" >
        Div2
        <p className="text-white">n4 = {n4}</p>
        <Div3 />
    </div>
  )
}

export default Div2
