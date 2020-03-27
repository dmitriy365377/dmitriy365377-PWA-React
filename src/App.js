import React, { useEffect } from 'react';
import { connect, useDispatch } from 'react-redux';
import { DragDropContext } from 'react-beautiful-dnd';
import Column from './components/column/column.component';
import { Container } from './app.styled';



const App = ({ cardList }) => {
  const { columns, columnOrder } = cardList
  const dispatch = useDispatch()

  useEffect(() => {
    const fromStorage = localStorage.getItem('saved')

    if (fromStorage !== null) { 
      dispatch({
        type: 'INIT_FROM_LOCALSTORAGE',
        payload: JSON.parse(fromStorage)
      }) 
    }
  }, [])

  useEffect(() => {
    localStorage.setItem('saved', JSON.stringify(cardList))
  }, [cardList])



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

    const start = columns[source.droppableId];
    const finish = columns[destination.droppableId];


    if (start === finish) {
      const newTaskIds = Array.from(start.taskIds);
      newTaskIds.splice(source.index, 1);
      newTaskIds.splice(destination.index, 0, draggableId);

      const newColumn = {
        ...start,
        taskIds: newTaskIds
      };

      const newState = {
        ...cardList,
        columns: {
          ...columns,
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
      ...cardList,
      columns: {
        ...columns,
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
          const tasks = column.taskIds.map((taskId) => cardList.tasks[taskId]);
          return <Column key={column.id} column={column} tasks={tasks} />;
        })
        }
      </Container>
    </DragDropContext>
  )
}

const mapStateToProps = (store) => ({
  cardList: store.cardList
})

export default connect(mapStateToProps, null)(App);
