import { useEffect, useState } from "react";
import TailSelect from "../common/TailSelect";
import getcode from './getcode.json';
import TailTable from "../common/TailTable";

const Ultra = ({dt, area, m, tItem}) => { 
    const category = m==='1'?'초단기예보':'단기예보';
    const opItem = getcode.filter((item)=>item.예보구분===category)
                        .map((i)=>[i.항목값+'-'+i.단위+'-'+i.항목명,i.항목명+" ("+i.항목값+")"]);

    const [type, setType] = useState(); // [항목값, 단위, 항목명]
    const [tbItem,setTbItem] = useState({
        'th':['항목명','예측시간', '예측값'],
        'tr':[]
    });  // TailTable로 넘길 th,tr 데이터

    const sky ={'1':'맑음 🌞','2':'구름많음 ⛅','4':'흐림 😞'}
    const pty ={'0':'없음','1':'비','2':'비/눈','3':'눈','4':'소나기','5':'빗방울','6':'빗방울눈날림','7':'눈날림'}

    let title = `[${category}]`
    title += ` ${area} (${dt.substring(0, 4) + "-" + dt.substring(4, 6) + "-" + dt.substring(6,)})`;

    const handleSel = (e) => { 
        setType(e.target.value.split('-'));
    }

    useEffect(()=>{
        let trList = [] 
        tItem.map((i)=> {
            if(i.category === type[0])
                trList.push([type[2],
                `${i.fcstTime.substring(0, 2)} : ${i.fcstTime.substring(2, 4)}`,
                `${i.category==='SKY'? sky[i.fcstValue]:
                    i.category==='PTY'?pty[i.fcstValue]:
                    i.fcstValue } ${i.category==='SKY' ? '': i.category==='PTY'?'':type[1]}`]);
        })
        setTbItem(({...tbItem, 'tr':trList}));
    },[type]);

    return (
        <div className="p-10 grid grid-cols-1 md:grid-cols-2 items-center content-center">
            <h1 className="text-lg font-bold">
                {title}
            </h1>
            <TailSelect id={'sel'} opItem={opItem} handleChange={handleSel}/>            
            <div className="col-span-2 mt-10">
                {(tbItem.tr.length!==0) && <TailTable tbItem={tbItem}/>}
            </div>    
        </div>
        
        
        
    );
}

export default Ultra;
