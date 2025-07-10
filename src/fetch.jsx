
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


// import { useState, useEffect } from 'react';
// import useLocation from './location';
// import key from './key';
// import { date } from './date';

// export default function useFetch() {
//     const { location } = useLocation();
//     const [eachTimes, setEachTimes] = useState([]);
//     const [eachDates, setEachDates] = useState([]);

//     useEffect(() => {
//         if (!location.lat || !location.lon) return;

//         const url = `https://api.openweathermap.org/data/2.5/forecast?lat=${location.lat}&lon=${location.lon}&units=metric&lang=kr&appid=${key}`;

//         fetch(url)
//             .then(res => res.json())
//             .then(data => {
//                 const eachDate = data.list.filter(item => item.dt_txt.includes(date)).map(el => ({
//                     date: el.dt_txt.slice(0, 10)
//                 }));
//                 setEachDates(eachDate);
//                 const eachTime = eachDate.map(el => ({
//                     time: el.dt_txt.split(" ")[1].slice(0, 5),
//                     temp: el.main.temp,
//                 }));
//                 setEachTimes(eachTime);
//             })
//             .catch(err => {
//                 console.error('에러:', err);
//             });

//     }, [location]);

//     return { eachTimes, eachDates };
// }



import { useState, useEffect } from 'react';
import useLocation from './location';
import key from './key';
import { date } from './date';
// import { tomorrowDate, afterTwoDayDate, afterThreeDayDate, afterFourDayDate } from './date';

export default function useFetch() {
    const { location } = useLocation();
    const [firstDate, setFirstDate] = useState([]);
    const [ imgUrl, setImgUrl ] = useState([]);

    useEffect(() => {
        if (!location.lat || !location.lon) return;

        const url = `https://api.openweathermap.org/data/2.5/forecast?lat=${location.lat}&lon=${location.lon}&units=metric&lang=kr&appid=${key}`;

        fetch(url)
            .then(res => res.json())
            .then(data => {
                const first = data.list.filter(item => item.dt_txt.includes(date));
                setFirstDate(first);
                const imageIcon = first.map(el => `https://openweathermap.org/img/wn/${el.weather[0].icon}.png`);
                setImgUrl(imageIcon);
            })
            .catch(err => {
                console.error('에러:', err);
            });

    }, [location]);
    return { firstDate, imgUrl };
}