import { EventEmitter } from "events";
import dispatcher from './../dispatcher/dispatcher'

class EmployeeIdBarStore extends EventEmitter {
  constructor(){
    super();
    this.previous = this.previous.bind(this);
    this.next = this.next.bind(this);

    this.data = {
      list:[
        { firstName: 'one',
          lastName: 'onelast',
          positionId: '1111',
          hireDate: '01/01/1970',
          status: 'Active',
          img:'http://pngimg.com/uploads/face/face_PNG5660.png'
        },
        { firstName: 'two',
          lastName: 'twolast',
          positionId: '2222',
          hireDate: '01/01/1980',
          status: 'Active',
          img:'http://dreamicus.com/data/face/face-02.jpg'
        },
        { firstName: 'three',
          lastName: 'threelast',
          positionId: '3333',
          hireDate: '01/01/1985',
          status: 'Terminated',
          img:'http://www.abcnewspoint.com/wp-content/uploads/2015/06/Top-10-Countries-With-Hottest-And-Most-Beautiful-Men-In-The-World-2015-France.jpg'
        },
        { firstName: 'four',
          lastName: 'fourlast',
          positionId: '4444',
          hireDate: '01/01/1990',
          status: 'Active',
          img:'http://sportschump.net/wp-content/uploads/2015/08/The-Book-of-Eli.jpg'
        },
        { firstName: 'five',
          lastName: 'fivelast',
          positionId: '5555',
          hireDate: '01/01/1995',
          status: 'Active',
          img:'http://cdn.skim.gs/images/jtzkrsnxh7hgovmysajo/hairstyles-that-flatter-your-face-round-faces'
        }
      ],
      index:0
    };
  };

  getData(){
    return this.data;
  };

  previous(){
    console.log('in Store previous');
    if(this.data.index>0){
      this.data.index = this.data.index - 1;
    }
    this.emit("changed");
  };

  next(){
    console.log('in next');
    if(this.data.index<this.data.list.length-1){
      this.data.index = this.data.index + 1;
    }
    this.emit("changed");
  };

  handleActions(action){
    console.log(JSON.stringify(action));
    switch (action.actionType) {
      case 'PREVIOUS':{
        this.previous();
        break;
      }
      case 'NEXT':{
        this.next();
        break;
      }
    }
  }

};

const employeeIdBarStore = new EmployeeIdBarStore;

window.employeeIdBarStore = employeeIdBarStore;

dispatcher.register(employeeIdBarStore.handleActions.bind(employeeIdBarStore));

export default employeeIdBarStore;
