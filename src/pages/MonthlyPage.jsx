import { Card } from "../components/Card";
import data from '../data.json';

export function MonthlyPage(){
    return(
        <>
            {
                data.map(({title,timeframes,bgColor,imgSource},index)=>{
                    return(
                        <Card key={index} title={title} current={timeframes.monthly.current} previous={timeframes.monthly.previous} bgColor={bgColor} source={imgSource}/>
                    )
                })
            }
        </>
    )
}