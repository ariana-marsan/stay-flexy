
import { stayFlexyProgram as program } from '../utils/index.js'
import StretchCard from './StretchCard.jsx'
import { useState, useEffect } from 'react'

export default function Grid (){

    const [completed, setCompleted] = useState(null);
    const [selectedDay, setSelectedDay] = useState(null);
    const complatedDays = Object.keys(completed || {}).filter((value) => {
        const entry = completed[value];
        return entry.isComplete;
    });

    function handleSave (index, data) {
        const newObj = { 
            ...completed,
            [index]: {
                ...data,
                isComplete: !!data.isComplete || !!completed?.[index]?.isComplete
            }
        }
        setCompleted(newObj);
        localStorage.setItem('completed', JSON.stringify(newObj));
        setSelectedDay(null)
    } 

    const handleComplete = (index, data) => {
        const newObj={ ...data }
        newObj.isComplete = true;
        handleSave(index, newObj);

        setSelectedDay(index + 1);
        localStorage.setItem('selectedDay', index + 1);
    }

    useEffect(() => {
        if (!localStorage) { return }
        let savedData = {}
        if ( localStorage.getItem('completed') ) {
            savedData = JSON.parse(localStorage.getItem('completed'));
        }
        setCompleted(savedData);
    }, [])


    return (
        <div className="grid-flex-plan">
            { Object.keys(program).map((day, index) => {

                const isLocked = index === 0 ? false : !complatedDays.includes(( `${index - 1}`));

                const type = index % 3 === 0 ? 'Legs' : index % 3 === 1 ? 'Arms' : 'Back';


                const flexPlan = program[index]
                const daynum = ((index / 8) <=1) ? '0' + (index + 1) : index + 1;

                if (index === selectedDay) {
                    return(
                        <StretchCard key={index} flexPlan={flexPlan} type={type} index={index} daynum={daynum} handleComplete={handleComplete}
                        />
                    )
                }

                return (
                    <>
                    <button key={index} className={'day ' + (isLocked ? 'inactive' : '')} onClick={()=>{
                        if (isLocked) { return }
                        setSelectedDay(null);
                        setSelectedDay(index);
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