import React, {
  useState,
} from 'react'
import {
  DragDropContext,
} from 'react-beautiful-dnd'
// import {
//   useSelector, useDispatch,
// } from 'react-redux'

import CenterLayout from '../DumpComponents/CenterLayout'

import Column from './Column'

const testData = {
  tasks: {
    task1: {
      id: 'task1',
      content: 'content task-1',
    },
    task2: {
      id: 'task2',
      content: 'content task-2',
    },
    task3: {
      id: 'task3',
      content: 'content task-3',
    },
    task4: {
      id: 'task4',
      content: 'content task-4',
    },
  },
  columns: {
    column1: {
      id: 'column1',
      label: 'first column',
      taskIds: ['task1', 'task2', 'task3', 'task4'],
    },
  },
  columnOrder: ['column1'],
}

const LikeTrello = () => {
  const [data, setData] = useState(testData)

  const onDragEnd = (result) => {
    const {
      destination, source, draggableId,
    } = result
    if (!destination) return
    if (destination.droppableId === source.droppableId && destination.index === source.index) return

    const column = data.columns[source.droppableId]
    const newTaskIds = Array.from(column.taskIds)
    newTaskIds.splice(source.index, 1)
    newTaskIds.splice(destination.index, 0, draggableId)
    const newColum = {
      ...column,
      taskIds: newTaskIds,
    }
    const resultData = {
      ...data,
      columns: {
        ...data.colomns,
        [newColum.id]: newColum,
      },
    }
    setData(resultData)
  }

  return (
    <DragDropContext
      onDragEnd={onDragEnd}
    >
      <CenterLayout
        width="96%"
        marginTop="0.5rem"
      // flexDirection={small ? 'column' : 'row'}
        justify="flex-start"
        align="flex-start"
      >
        {data && data.columnOrder.map((columnId) => {
          const column = data.columns[columnId]
          const tasks = column.taskIds.map(taskId => data.tasks[taskId])
          return (
            <Column
              key={column.id}
              column={column}
              tasks={tasks}
            />
          )
        })}
      </CenterLayout>
    </DragDropContext>

  )
}
export default LikeTrello
