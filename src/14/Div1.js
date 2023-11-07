import Div2 from "./Div2"
import { DivAtom3 } from "./DivAtom";
import { useRecoilValue } from "recoil";

const Div1 = () => {
  const n3 = useRecoilValue(DivAtom3);
  return (
    <div className="bg-green-700 rounded p-5">
        Div1
        <p className="text-white">n3={n3}</p>
        <Div2/>
    </div>
  )
}

export default Div1
