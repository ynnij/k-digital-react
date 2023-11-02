import Div3 from "./Div3"


const Div2 = ({n, setN}) => {
  return (
    <div className="bg-green-500 rounded p-5" >
        Div2
        <Div3  n={n} setN={setN}/>
    </div>
  )
}

export default Div2
