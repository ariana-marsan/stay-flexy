import React, { useState } from "react";
import Modal from "./Modal";
import { exerciseDescriptions as descriptions } from "../utils/index.js";



export default function StretchCard(props) {

  const {flexPlan, index, type, daynum, handleComplete} = props;

  const {warmup, stretching} = flexPlan || {};

  const [ showStretchDescription, setShowStretchDescription  ]= useState(null);



  return (
    <div className="stretch-container">
{
      showStretchDescription && (<Modal showStretchDescription={showStretchDescription} handleCloseModal={() => {
        setShowStretchDescription(null)
      }} />)
}

      <div className="stretch-card">
        <div className="stretch-card-header">
          <p>Day {daynum}</p>
          <i class="fa-solid fa-unlock"></i>
        </div>
        <div className="stretch-card-header">
          <h2><b>{type} Stretch</b></h2>
        </div>
      </div>

        <div className="warmup-name">
          <h2 className="warmup-title">Warmup</h2>
          <p>Sets</p>
          <p>Reps</p>
        </div>

      <div className="warmup-grid">
      {warmup.map((warmup, warmupIndex) => {
        return (
          <React.Fragment key={warmupIndex}>
            <div className="warmup-button">
              <p>{warmupIndex + 1}. {warmup.name}</p>
              <button className="help-button" onClick={() =>{
                setShowStretchDescription({
                  name: warmup.name,
                  description: descriptions[warmup.name]
                })
              }}><i className="fa-regular fa-circle-question"></i></button>
            </div>
            <p className="warmup-info">{warmup.sets}</p>
            <p className="warmup-info">{warmup.reps}</p>
            </React.Fragment>
        )
      })}

</div>

        <div className="warmup-name">
           <h2 className="warmup-title">Stretch</h2>
           <p>Sets</p>
           <p>Reps</p>
        </div>

      <div className="warmup-grid">
      {stretching.map((stretching, stretchingIndex) => {
        return (
          <React.Fragment key={stretchingIndex}>
            <div className="warmup-button">
              <p>{stretchingIndex + 1}. {stretching.name}</p>
              <button className="help-button" onClick={()=>{
                setShowStretchDescription({
                  name: stretching.name,
                  description: descriptions[stretching.name]
                })
              }}><i className="fa-regular fa-circle-question"></i></button>
            </div>
            <p className="warmup-info">{stretching.sets}</p>
            <p className="warmup-info">{stretching.reps}</p>
            </React.Fragment>
        )
      })}

      </div>

      <div>
        <button  className="button-complete" onClick={()=>{
          handleComplete(index, flexPlan);
        }}>Complete</button>
      </div>
    </div>

    
  );
}