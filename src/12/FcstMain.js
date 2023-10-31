import { useEffect, useRef, useState } from 'react';
import TailH1 from '../common/TailH1';
import TailSelect from '../common/TailSelect';
import ButtonBlue from '../common/ButtonBlue';
import getxy from './getxy.json';
import { Link } from 'react-router-dom';
const FcstMain = () => {
    //상태변수
    const [dt,setDt] = useState();
    const [area, setArea] = useState();
    const [x, setX] = useState();
    const [y, setY] = useState();
    const dtRef = useRef();

    const opItem = getxy.map((item)=> [item['격자 X']+"-"+item['격자 Y']+"-"+item['1단계'],
                                         item['1단계']]);
    
    //default 날짜 오늘로 지정
    useEffect(()=>{
        const today = new Date(new Date().setDate(new Date().getDate()));
        let defualtDay = today.getFullYear()+'-'
        +('0'+(today.getMonth()+1)).slice(-2)+'-'
        +('0'+(today.getDate())).slice(-2);
        
        // 오늘 날짜를 input의 기본값으로 설정
        dtRef.current.value = defualtDay;
        setDt(defualtDay.replaceAll('-',''));  
    },[])
    
    useEffect(()=>{
        console.log(dt,x,y,area);
    },[dt,x,y,area]);
    
    //이벤트 처리
    const handleDtChange = (e) => {
        console.log(e.target.value); //useRef 사용하지 않고 target 사용하는 방법
        setDt(e.target.value.replaceAll('-',''));
    }
    
    const handleSelChange = (e) => {
        let temp = e.target.value.split('-');
        setX(temp[0]);
        setY(temp[1]);
        setArea(temp[2]);
    }

    const handleBtClick = (e) =>{
        e.preventDefault();
    }

    return (
        <section className="p-10">
            <form>
                <h1 className="text-xl font-bold col-span-1 md:col-span-2 mb-4">기상청 예보 정보 입력</h1>
                <div className="grid grid-cols-1 gap-2 md:grid-cols-2">
                    <div>
                        <input ref={dtRef} type='date' id='dt' name='dt' onChange={handleDtChange} />
                    </div>
                    <div className='mb-4'>
                        <TailSelect id={'sel'} opItem={opItem} handleChange={handleSelChange}/>
                    </div>
                    {
                        x ? 
                        <Link to={`/fetch/${dt}/${area}/${x}/${y}/1`}>
                            <ButtonBlue caption={'초단기예보'}/>
                        </Link>
                        : <ButtonBlue caption={'초단기예보'} handleClick={handleBtClick}/>
                    }
                    {
                        x? 
                        <Link to={`/fetch/${dt}/${area}/${x}/${y}/2`}>
                            <ButtonBlue caption={'단기예보'} />
                        </Link>
                        : <ButtonBlue caption={'단기예보'} handleClick={handleBtClick} />
                    }
                    

                </div>
            </form>
        </section>
    )
}

export default FcstMain
