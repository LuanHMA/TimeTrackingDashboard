import { Card } from "../components/Card";
import data from '../data.json';

export function DailyPage(){
    return(
        <>
            {
                data.map(({title,timeframes,bgColor,imgSource},index)=>{
                    return(
                        <Card 
                            key={index} 
                            title={title} 
                            current={timeframes.daily.current} 
                            previous={timeframes.daily.previous} 
                            bgColor={bgColor} 
                            source={imgSource}
                        />
                    )
                })
            }
        </>
    )
}