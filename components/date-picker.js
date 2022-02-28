import Style from '../styles/date.module.css'
import { DayPicker } from 'react-day-picker';
import 'react-day-picker/dist/style.css';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import { useStore } from '../components/state'




 function Datepicker(){

    const checkInText = useStore(state => state.checkInText)
    const setCheckInText = useStore(state => state.setCheckInText)

    const show = useStore(state => state.show)
    const setShow = useStore(state => state.setShow)

    return(
        <div className={Style.container} >
            <div className={Style.checkInContainer} >
                <CalendarTodayIcon  color='primary' />
                {checkInText}
            </div>

            <div className={Style.dayContainer} >
                <DayPicker  />
            </div>
            
            
        </div>
        
    )
}

export {Datepicker}