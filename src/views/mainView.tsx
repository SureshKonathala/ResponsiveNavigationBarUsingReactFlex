import * as React from 'react';
import * as ReactDOM from 'react-dom';

//import { MyComp1 } from './../components/HelloComp';
import {Image} from './../components/Image';

import { EmployeeIdBar } from './../components/EmployeeIdBarComponent';


export class MainView1 extends React.Component<{},{}>{
  render(){
    return (
      // <MyComp1 id={'1'} name={'abc'}/>
      <div>
        <EmployeeIdBar empBarId={'PayProfileEmployeeBarId'}/>

        {/*<Image id={'empIconId'} src={'http://pngimg.com/uploads/face/face_PNG5660.png'} />*/}
      </div>
    );
  }
}
