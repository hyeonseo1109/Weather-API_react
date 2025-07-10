function Format (date) {
    return String(date).padStart(2, '0');
}


    const now = new Date();
    let year =  now.getFullYear();
    let month = now.getMonth() +1 ;
    let day = now.getDate();


export const date = `${Format(year)}-${Format(month)}-${Format(day)}`;
export const tomorrowDate = `${Format(year)}-${Format(month)}-${Format(day+1)}`;
export const afterTwoDayDate = `${Format(year)}-${Format(month)}-${Format(day+2)}`;
export const afterThreeDayDate = `${Format(year)}-${Format(month)}-${Format(day+3)}`;
export const afterFourDayDate = `${Format(year)}-${Format(month)}-${Format(day+4)}`;