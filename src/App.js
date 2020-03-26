import React from 'react';
import { DragDropContext } from 'react-beautiful-dnd';
import Column from './components/column/column.component'
import './App.css';



const App = (props) => {
  const { initialData } = props;

  const onDragEnd = result => {
    //
  };

  return (
    <DragDropContext
      onDragEnd={onDragEnd}
    >
      {initialData.columnOrder.map((columnId) => {
        const column = initialData.columns[columnId];
        const tasks = column.taskIds.map((taskId) => initialData.tasks[taskId]); 
        return <Column key={column.id} column={column} tasks={tasks} />;
      })
      }
    </DragDropContext>
  )
}

export default App;
