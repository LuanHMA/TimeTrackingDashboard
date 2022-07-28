import { Card } from "../components/Card";
import data from '../data.json';
import { ImageList } from '../components/ImageList';

export function DailyPage(){
    return(
        <>
            {
                data.map(({title,timeframes,bgColor},index)=>{
                    return(
                        <Card 
                            key={index} 
                            title={title} 
                            current={timeframes.daily.current} 
                            previous={timeframes.daily.previous} 
                            bgColor={bgColor} 
                            source={ImageList[index]}
                        />
                    )
                })
            }
        </>
    )
}