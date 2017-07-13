import * as React from "react";
import * as ReactDOM from "react-dom";

export interface compProps{
  id: string;
  name: string;
};

export interface compState{
  nameColor: string;
};

export class MyComp1 extends React.Component<compProps,compState>{

  constructor(){
    super();
    console.log('in constructor');
  };

  componentWillMount(){
    console.log('in componentWillMount');
  };

  render(){
    console.log('in render');
    return (
      <div>Hello, Suresh 22</div>
    );
  };


};
