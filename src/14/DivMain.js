import Div1 from "./Div1"
import { DivAtom, DivAtom2 } from "./DivAtom";
import { useRecoilValue } from "recoil"; // Atom 값을 가져오는 것

const DivMain = () => {
  const n = useRecoilValue(DivAtom);
  const n2 = useRecoilValue(DivAtom2);
  return (
    <div className="container mt-10 bg-green-950 rounded-lg text-white p-5">
      DivMain
      <h1 className="text-white">n = {n}</h1>
      <h1 className="text-white">n2 = {n2}</h1>
      <Div1 />
    </div>
  )
}

export default DivMain
