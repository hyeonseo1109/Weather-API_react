function Format (date) {
    return String(date).padStart(2, '0');
}


    const now = new Date();
    let year =  now.getFullYear();
    let month = now.getMonth() +1 ;
    let day = now.getDate();


export const date = `${Format(year)}-${Format(month)}-${Format(day)}`;
