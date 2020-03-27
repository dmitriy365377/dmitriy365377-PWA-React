import React, { useState } from 'react';
import { DragDropContext } from 'react-beautiful-dnd';
import Column from './components/column/column.component'
import { Container } from './app.styled'
import { connect } from 'react-redux'


const App = (props) => {
  console.log(props)
  const [state, setState] = useState(props.store.cart)
  console.log(state)


  const onDragEnd = (result) => {
    const { destination, source, draggableId } = result;

    if (!destination) {
      return
    }

    if (
      destination.droppableId === source.draggableId &&
      destination.index === source.index
    ) {
      return
    }

    const start = state.columns[source.droppableId];
    const finish = state.columns[destination.droppableId];


    if (start === finish) {
      const newTaskIds = Array.from(start.taskIds);
      newTaskIds.splice(source.index, 1);
      newTaskIds.splice(destination.index, 0, draggableId);

      const newColumn = {
        ...start,
        taskIds: newTaskIds
      };

      const newState = {
        ...state,
        columns: {
          ...state.columns,
          [newColumn.id]: newColumn
        }
      }

      setState(newState);
      return;
    }

    // Перенос от одной колонки в другую
    const startTaskIds = Array.from(start.taskIds);
    startTaskIds.splice(source.index, 1);
    const newStart = {
      ...start,
      taskIds: startTaskIds,
    };

    const finishTaskIds = Array.from(finish.taskIds);
    finishTaskIds.splice(destination.index, 0, draggableId);
    const newFinish = {
      ...finish,
      taskIds: finishTaskIds,
    }

    const newState = {
      ...state,
      columns: {
        ...state.columns,
        [newStart.id]: newStart,
        [newFinish.id]: newFinish
      }
    };
    setState(newState);
  };

  return (
    <DragDropContext
      onDragEnd={onDragEnd}
    >
      <Container>
        {state.columnOrder.map((columnId) => {
          const column = state.columns[columnId];
          const tasks = column.taskIds.map((taskId) => state.tasks[taskId]);
          return <Column key={column.id} column={column} tasks={tasks} />;
        })
        }
      </Container>
    </DragDropContext>
  )
}

const mapStateToProps = (store) => ({
  store: store
})

export default connect(mapStateToProps, null)(App);
