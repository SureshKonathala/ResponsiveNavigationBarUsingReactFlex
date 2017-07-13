import * as React from "react";

export class Label extends React.Component<any,any>{

  constructor(props:any){
    super();
  };

  componentWillMount(){
  };

  getValue(){
    return this.state.content;
  };

  render(){
    this.state={content: this.props.text? this.props.text : this.props.children};
    return(
      <div className='labeled-field'>
        <div className='label'>{this.props.label}</div>
        <div>{ this.state.content }</div>
      </div>
    );
  };

};
