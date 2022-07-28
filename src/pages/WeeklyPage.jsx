import { Card } from "../components/Card";
import data from '../data.json';
import { ImageList } from '../components/ImageList';

export function WeeklyPage(){
    return(
        <>
            {
                data.map(({title,timeframes,bgColor},index)=>{
                    return(
                        <Card key={index} title={title} current={timeframes.weekly.current} previous={timeframes.weekly.previous} bgColor={bgColor} source={ImageList[index]}/>
                    )
                })
            }
        </>
    )
}