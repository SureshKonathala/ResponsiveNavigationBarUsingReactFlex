import * as React from "react";
import './../sass/imageComponent.scss';

export interface ImageProps{
  src: string;
  id: string;
  className: string;
};

export class Image extends React.Component<ImageProps,any>{

  constructor(props:any){
    super();
  };

  componentWillMount(){

  };

  render(){
    this.state = {src:this.props.src};
    return(
      <div>
        {/*<img id={this.props.id} style={{width:'100px',height:'100px'}} src={this.state.src}/>*/}
        <img className={this.props.className} id={this.props.id} src={this.state.src}/>
      </div>
    );
  };

};
