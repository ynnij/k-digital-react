import ButtonBlue from "../common/ButtonBlue"


const Div3 = ({n,setN}) => {
    const clickAdd=()=>{
        setN(n+1)
    }
    const clickMinus = () =>{
        setN(n-1)
    }
  return (
    <div className="bg-green-200 rounded p-5">
        <h1>Div3</h1>
        <div className="grid grid-cols-2">
            <ButtonBlue handleClick={clickAdd} caption={'증가'} />
            <ButtonBlue handleClick={clickMinus} caption={'감소'}/>
        </div>
    </div>
  )
}

export default Div3
