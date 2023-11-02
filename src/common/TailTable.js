const TailTable = ({ tbItem }) => {
    const th = tbItem.th.map((item,idx) => <th className="font-semibold text-center border-blue-100" key={`th${idx}` }>{item}</th>);
    
    const tr = tbItem.tr.map((item,idx) => 
        <tr key={`tr${idx}`}>
            { item.map((i,index)=> <td className="text-center border-none" key={`td${index}`}>{i}</td>)}
        </tr>
    )
    
    return (
        <table className="table-fixed border-separate rounded-[20px] border-4 border-blue-100 overflow-hidden">
            <thead>
                <tr className='bg-blue-100'>
                    {th}
                </tr>
            </thead>
            <tbody>
                {tr}
            </tbody>
        </table>
    )
}

export default TailTable
