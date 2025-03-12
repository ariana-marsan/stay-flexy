
import { stayFlexyProgram as program } from '../utils/index.js'
import StretchCard from './StretchCard.jsx'
import { useState } from 'react'

export default function Grid (){

    const isLocked = true;
    const [selectedDay, setSelectedDay] = useState(0);


    return (
        <div className="grid-flex-plan">
            { Object.keys(program).map((day, index) => {
                const type = index % 3 === 0 ? 'Legs' : index % 3 === 1 ? 'Arms' : 'Back';


                const flexPlan = program[index]
                const daynum = ((index / 8) <=1) ? '0' + (index + 1) : index + 1;
                const icon = <i class="fa-solid fa-unlock"></i>

                if (index === selectedDay){
                    return(
                        <StretchCard key={index} flexPlan={flexPlan} type={type} index={index} daynum={daynum} icon={icon}
                        />
                    )
                }

                return (
                    <>
                    <button key={index} className={'day ' + (isLocked ? 'inactive' : '')} >
                        <p>Day {daynum}</p>
                        {isLocked ? (
                            <i className='fa-solid fa-lock'></i>
                        ) : (
                                {icon}
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