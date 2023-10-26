const FcstTable = ({ selItems, r1, sel }) => {
    const info = r1.filter((item) =>
        item.항목값 == sel)[0];
    const tbodyTags = selItems.map((item, idx) => {
        let tag = <tr key={`tr` + idx}>
            <td className="text-center">{info.항목명}</td>
            <td className="text-center">{item.fcstTime.substring(0, 2) + " : " + item.fcstTime.substring(2, 4)}</td>
            <td className="text-center">{item.fcstValue} {info.단위}</td>
        </tr>
        return tag;
    });
    return (
        <table className="table-fixed">
            <thead>
                <tr>
                    <th className="font-semibold text-center">항목명</th>
                    <th className="font-semibold text-center">예측시간</th>
                    <th className="font-semibold text-center">예측값</th>
                </tr>
            </thead>
            <tbody>
                {tbodyTags}
            </tbody>
        </table>
    )
}

export default FcstTable
