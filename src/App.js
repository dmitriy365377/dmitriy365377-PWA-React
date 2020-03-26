import React from 'react';
import Column from './components/column/column.component'
import './App.css';



const App = (props) => {
  const { initialData } = props
  return (
    <>
      {initialData.columnOrder.map((columnId) => {
        const column = initialData.columns[columnId];
        const tasks = column.taskIds.map((taskId) => initialData.tasks[taskId]);
        debugger
        return <Column key={column.id} column={column} tasks={tasks} />;
      })
      }
    </>
  )
}

export default App;
