import TailSelect from "../common/TailSelect";
import getcode from './getcode.json';

const Ultra = ({dt, area, m, tItem}) => { 
    const category = m==1?'초단기예보':'단기예보';

    const opItem = getcode.filter((item)=>item.예보구분==category)
                        .map((i)=>[i.항목값+'-'+i.단위,i.항목명+" ("+i.항목값+")"]);

    let title = `[${category}]`
    title += ` ${area} (${dt.substring(0, 4) + "-" + dt.substring(4, 6) + "-" + dt.substring(6,)})`;

    const handleSel = (e) => { 
        console.log(e.target.value.split('-'));
    }
    return (
        <div className="p-10 grid grid-cols-1 md:grid-cols-2 items-center content-center">
            <h1 className="text-lg font-bold">
                {title}
            </h1>
            <TailSelect id={'sel'} opItem={opItem} handleChange={handleSel}/>

                        
        </div>
    );
}

export default Ultra;
