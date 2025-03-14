
import { stayFlexyProgram as program } from '../utils/index.js'
import StretchCard from './StretchCard.jsx'
import { useState } from 'react'

export default function Grid (){

    const isLocked = false;
    const [selectedDay, setSelectedDay] = useState(0);
    const completedDays = [];
    const [completed, setCompleted] = useState(null);

    const handleComplete = (index, data) => {
        const newObj={
        ...completed,
        [index]: {
            ...data,
            isCompleted: true
        }}
        setCompleted(newObj); 
        localStorage.setItem('completed', JSON.stringify(newObj));
        setSelectedDay(selectedDay + 1);
        localStorage.setItem('selectedDay', selectedDay + 1);
    }


    return (
        <div className="grid-flex-plan">
            { Object.keys(program).map((day, index) => {
                const type = index % 3 === 0 ? 'Legs' : index % 3 === 1 ? 'Arms' : 'Back';


                const flexPlan = program[index]
                const daynum = ((index / 8) <=1) ? '0' + (index + 1) : index + 1;

                if ((localStorage.getItem('selectedDay') === null ? index === selectedDay : index === parseInt(localStorage.getItem('selectedDay')))) {
                    return(
                        <StretchCard key={index} flexPlan={flexPlan} type={type} index={index} daynum={daynum} handleComplete={handleComplete}
                        />
                    )
                } console.log(localStorage.getItem('selectedDay'))

                return (
                    <>
                    <button key={index} className={'day ' + (isLocked ? 'inactive' : '')} onClick={()=>{
                        setSelectedDay(index); {console.log({selectedDay})}
                    }} >
                        <p>Day {daynum}</p>
                        {isLocked ? (
                            <i className='fa-solid fa-lock'></i>
                        ) : (
                            <i class="fa-solid fa-unlock"></i>
                            )
                        }
                        <div>
                            <h4><b>{type}</b></h4>
                        </div>
                    </button>
                    </>
                )
            })}
        </div>
    )
}