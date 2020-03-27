import React  from 'react';
import { connect,useDispatch } from 'react-redux';
import { DragDropContext } from 'react-beautiful-dnd';
import Column from './components/column/column.component';
import { Container } from './app.styled';



const App = ({ card }) => {
  const { tasks, columns, columnOrder } = card
   
  const dispatch = useDispatch()
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

    const start = card.columns[source.droppableId];
    const finish = card.columns[destination.droppableId];


    if (start === finish) {
      const newTaskIds = Array.from(start.taskIds);
      newTaskIds.splice(source.index, 1);
      newTaskIds.splice(destination.index, 0, draggableId);

      const newColumn = {
        ...start,
        taskIds: newTaskIds
      };

      const newState = {
        ...card,
        columns: {
          ...card.columns,
          [newColumn.id]: newColumn
        }
      } 

      dispatch({ type: 'UPDATE_COLUMNS', payload: newState })
       
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
      ...card,
      columns: {
        ...card.columns,
        [newStart.id]: newStart,
        [newFinish.id]: newFinish
      }
    };
    
    dispatch({ type: 'UPDATE_COLUMNS', payload: newState });
  };

  return (
    <DragDropContext
      onDragEnd={onDragEnd}
    >
      <Container>
        {columnOrder.map((columnId) => { 
          const column = columns[columnId];
          const tasks = column.taskIds.map((taskId) => card.tasks[taskId]);
          return <Column key={column.id} column={column} tasks={tasks} />; 
        })
        }
      </Container>
    </DragDropContext>
  )
}

const mapStateToProps = (store) => ({
  card: store.card
})

export default connect(mapStateToProps, null)(App);
