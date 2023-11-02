import Div2 from "./Div2"

const Div1 = ({n, setN}) => {
  return (
    <div className="bg-green-700 rounded p-5">
        Div1
        <Div2 n={n} setN={setN}/>
    </div>
  )
}

export default Div1
