import React from 'react';
import ReactDOM from 'react-dom';
import '@atlaskit/css-reset';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import initialData from './initial.data';
import result from './components/12312';

ReactDOM.render(
  <React.StrictMode>
    <App initialData={initialData} result={result} />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();




// import { DragDropContext } from 'react-beautiful-dnd';
// import Column from './components/column/column.component'


// class App extends React.Component {
//   state = initialData;

//   onDragEnd = result => {
//     //
//   }

//   render() {
//     return (
//       <DragDropContext onDragEnd={this.onDragEnd}>
//         {this.state.columnOrder.map((columnId) => {
//           const column = this.state.columns[columnId];
//           const tasks = column.taskIds.map((taskId) => this.state.tasks[taskId]);
//           return <Column key={column.id} column={column} tasks={tasks} />;
//         })
//         }
//       </DragDropContext>
//     )
//   }
// }



// ReactDOM.render(<App initialData={initialData} />, document.getElementById('root'))

