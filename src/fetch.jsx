
// import key from './key';
// import { date } from './date';


// export async function urlFetch(lat, lon) {

//     const url = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&units=metric&lang=kr&appid=${key}`;
    
//     try {
//         const res = await fetch(url);
//         const data = await res.json();

//         const eachDate =  data.list.filter( (item) => item.dt_txt.includes(date) );
//         const eachTime = eachDate.map( (el) => ({
//             time: el.dt_txt.split(" ")[1].slice(0, 5),
//             temp: el.main.temp,
//             }));

//         return {eachDate, eachTime};

//     } catch (err) {
//         console.error('에러:', err);
//         return { eachDate: [], eachTime: [] };
//     }

    
// }

// export default urlFetch;


import { useState, useEffect } from 'react';
import useLocation from './location';
import key from './key';
import { date } from './date';

export default function useFetch() {
    const { location } = useLocation();
    const [eachTime, setEachTime] = useState([]);

    useEffect(() => {
        if (!location.lat || !location.lon) return;

        const url = `https://api.openweathermap.org/data/2.5/forecast?lat=${location.lat}&lon=${location.lon}&units=metric&lang=kr&appid=${key}`;

        fetch(url)
            .then(res => res.json())
            .then(data => {
                const eachDate = data.list.filter(item => item.dt_txt.includes(date));
                const eachTime = eachDate.map(el => ({
                    time: el.dt_txt.split(" ")[1].slice(0, 5),
                    temp: el.main.temp,
                }));
                setEachTime(eachTime);
            })
            .catch(err => {
                console.error('에러:', err);
            });

    }, [location]);

    return { eachTime };
}