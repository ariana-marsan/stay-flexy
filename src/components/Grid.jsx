
import { stayFlexyProgram as program } from '../utils/index.js'
import StretchCard from './StretchCard.jsx'

export default function Grid (){

    const isLocked = true;
    const selectedDay = 0;


    return (
        <div className="grid-flex-plan">
            { Object.keys(program).map((day, index) => {
                const type = index % 3 === 0 ? 'Legs' : index % 3 === 1 ? 'Arms' : 'Back';


                const flexPlan = program[index]
                if (index === selectedDay){
                    return(
                        <StretchCard key={index} />
                    )
                }

                return (
                    <>
                    <button key={index} className="day">
                        <p>Day {((index / 8) <=1) ? '0' + (index + 1) : index + 1}</p>
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