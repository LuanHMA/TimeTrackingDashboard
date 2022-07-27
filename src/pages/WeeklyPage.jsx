import { Card } from "../components/Card";
import data from '../data.json';

export function WeeklyPage(){
    return(
        <>
            {
                data.map(({title,timeframes,bgColor,imgSource},index)=>{
                    return(
                        <Card key={index} title={title} current={timeframes.weekly.current} previous={timeframes.weekly.previous} bgColor={bgColor} source={imgSource}/>
                    )
                })
            }
        </>
    )
}