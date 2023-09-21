import style from './Lotto.module.css'
//const LottoNums = ({nums}) => { //오브젝트로 받는 방법.
const LottoNums = (props) => {
    //console.log("LottoNums",nums); //오브젝트로 받으면 그대로 사용가능
    console.log("LottoNums", props.nums);

    const numsTag = props.nums.map((item, idx) => {
        let n = Math.floor(item / 10);

        /*
        // if-else 사용
        if (item >= 40) return <div key={'nums' + idx} className={style.lottonum5}>{item}</div>
        else if (item >= 30) return <div key={'nums' + idx} className={style.lottonum4}>{item}</div>
        else if (item >= 20) return <div key={'nums' + idx} className={style.lottonum3}>{item}</div>
        else if (item >= 10) return <div key={'nums' + idx} className={style.lottonum2}>{item}</div>
        else return <div key={'nums' + idx} className={style.lottonum1}>{item}</div>
        */
        
        /*
        //let tag = '';
        //switch case 사용
        switch (n) {
            case 0:
                tag = <div key={'nums' + idx} className={style.lottonum1}>{item}</div>
                break;
            case 1:
                tag = <div key={'nums' + idx} className={style.lottonum2}>{item}</div>
                break;
            case 2:
                tag = <div key={'nums' + idx} className={style.lottonum3}>{item}</div>
                break;
            case 3:
                tag = <div key={'nums' + idx} className={style.lottonum4}>{item}</div>
                break;
            case 4:
                tag = <div key={'nums' + idx} className={style.lottonum5}>{item}</div>
                break;
        }
        */

        // 이렇게 사용가능
        //let t = style[`lottonum${n + 1}`]
        //let tag = <div key={'nums' + idx} className={t}>{item}</div>;

        //한줄로 가능하다 
        //return <div key={'nums' + idx} className={style[`lottonum${n + 1}`]}>{item}</div>; ;
        
        let tag = <div key={'nums' + idx} className={style[`lottonum${n + 1}`]}>{item}</div>
        if(idx==6) 
            return(<>+{tag}</>)
        else return tag; 

    }); // =>{} 쓰면 return 필수


    return (
        <div className={style.lottobox}>
            {numsTag}
        </div>
    );
}

export default LottoNums;
