import * as React from "react";
import * as ReactDOM from "react-dom";

import { Label } from "./Label";
import { Image } from "./Image";
import employeeIdBarStore from "./../stores/EmployeeIdBarStore";
import * as Actions from "./../actions/EmployeeIdBarActions";

import "./../sass/EmployeeIdBarComponent.scss";

import * as Template from "./template";

export class EmployeeEntry {
  firstName: string;
  lastName: string;
  positionId: string;
  hireDate: string;
  status: string;
  img: string;
};

export interface EIDProps{
  empBarId: string;
};

export interface EIDState{
  list: EmployeeEntry[];
  index: number;
};

export class EmployeeIdBar extends React.Component<EIDProps,EIDState>{
  constructor(props:EIDProps){
    super();
    //this.getCompState = this.getCompState.bind(this);
    console.log('in constructor props :',props.empBarId);
  };
  componentWillMount(){
    console.log('in componentWillMount');
    employeeIdBarStore.on("changed",()=>{
      this.setState(employeeIdBarStore.getData());
    });
    this.state=employeeIdBarStore.getData();

  };

  componentDidMount(){
    console.log('in componentDidMount');
  };

  render(){
    return Template.getXML(this.state);
  };

  componentWillUnMount(){
      console.log('in componentWillUnMount');
      employeeIdBarStore.removeListener("changed",()=>{console.log('changed event listener removed !');});
  };

};
