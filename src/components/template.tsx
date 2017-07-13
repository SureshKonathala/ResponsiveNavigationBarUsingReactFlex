import * as React from "react";
import * as ReactDOM from "react-dom";

import { Label } from "./Label";
import { Image } from "./Image";
import employeeIdBarStore from "./../stores/EmployeeIdBarStore";
import * as Actions from "./../actions/EmployeeIdBarActions";

import "./../sass/EmployeeIdBarComponent.scss";

  export function getXML(state:any){

      let empEntry = state.list[state.index];
      console.log('img'+empEntry.img);

    return (
        <div className='ebarcontainer'>

          <div className='topsec'>
            <span className='navleft' onClick={Actions.previousAction}>&lt;</span>
            <div className='leftsec'>
              <Image className='imgsec' id={'empIconId'} src={empEntry.img} />
              <span className='namesec'>{empEntry.lastName+', '+empEntry.firstName}</span>
            </div>
            <span className='navright' onClick={Actions.nextAction}>&gt;</span>
          </div>

          <div className='fieldssec'>
            <Label label={"Position ID"} text={empEntry.positionId}/>
            <Label label={"Hire Date"} text={empEntry.hireDate}/>
            <Label label={"Status"} text={empEntry.status}/>
          </div>

          <div className='nav'>
            <span onClick={Actions.previousAction}>&lt;</span>
            <span>{state.index + 1} of {state.list.length}</span>
            <span onClick={Actions.nextAction}>&gt;</span>
          </div>

        </div>
      );
}
