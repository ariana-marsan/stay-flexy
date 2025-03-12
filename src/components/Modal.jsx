
import ReactDom from 'react-dom';

export default function Modal(props) {

    const { showStretchDescription, handleCloseModal } = props;
    const { name, description } = showStretchDescription || {};

    return ReactDom.createPortal((
        <div className='modal-container'>
        <button className='underlay' onClick={handleCloseModal} />
            <div className='modal'>
                <div className='modal-name'>
                    <h6>Name:</h6>
                    <h2>{name}</h2>
                </div>
                <div className='modal-description'>
                    <h6>Description:</h6>
                    <p>{description}</p>
                </div>
            </div>
        </div>
    )
    ,document.getElementById("portal"))
}