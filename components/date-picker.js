import Style from '../styles/date.module.css'
import { DayPicker } from 'react-day-picker';
import 'react-day-picker/dist/style.css';




 function Datepicker(){

    return(
        <div className={Style.container} >
            <DayPicker  className={Style.dayContainer}  />
        </div>
        
    )
}

export {Datepicker}