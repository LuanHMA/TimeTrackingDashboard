import { Card } from "../components/Card";
import data from '../data.json';
import { ImageList } from '../components/ImageList';

export function MonthlyPage(){
    return(
        <>
            {
                data.map(({title,timeframes,bgColor},index)=>{
                    return(
                        <Card key={index} title={title} current={timeframes.monthly.current} previous={timeframes.monthly.previous} bgColor={bgColor} source={ImageList[index]}/>
                    )
                })
            }
        </>
    )
}