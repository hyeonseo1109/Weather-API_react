import { date } from "./date";
import App from "./App";

function FilteredByDate(data) {
    const eachDate =  data.list.eachDate( (item) => item.dt_txt.includes({date}) );
    const eachTime = eachDate.map( (el) => el.main.temp);

    return (
        <>
            <p>{eachTime}</p>
        </>
    )
} 



export default FilteredByDate;
