import React, {
  useState, useContext,
} from 'react'
import {
  ThemeContext,
} from 'styled-components'
import {
  DragDropContext, Droppable,
} from 'react-beautiful-dnd'

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
    column2: {
      id: 'column2',
      label: 'second column',
      taskIds: [],
    },
  },
  columnOrder: ['column1', 'column2'],
}

const LikeTrello = () => {
  const theme = useContext(ThemeContext)
  const [data, setData] = useState(testData)

  const onDragStart = () => {
    document.querySelector('#header').style.transition = 'background-color 0.2s ease'
  }

  const onDragUpdate = (update) => {
    const {
      destination,
    } = update
    const opacity = destination
      ? destination.index / Object.keys(data.tasks).length
      : 0
    document.querySelector('#header').style.backgroundColor = `rgba(142, 148, 156,${opacity}`
  }

  const onDragEnd = (result) => {
    document.querySelector('#header').style.backgroundColor = theme.darkColdBg
    const {
      destination, source, draggableId,
    } = result
    if (!destination) return
    if (destination.droppableId === source.droppableId && destination.index === source.index) return

    const startColumn = data.columns[source.droppableId]
    const endColumn = data.columns[destination.droppableId]

    if (startColumn === endColumn) {
      const newTaskIds = Array.from(startColumn.taskIds)
      newTaskIds.splice(source.index, 1)
      newTaskIds.splice(destination.index, 0, draggableId)
      const newColum = {
        ...startColumn,
        taskIds: newTaskIds,
      }
      const resultData = {
        ...data,
        columns: {
          ...data.columns,
          [newColum.id]: newColum,
        },
      }
      setData(resultData)
    } else {
      const startTaskIds = Array.from(startColumn.taskIds)
      startTaskIds.splice(source.index, 1)
      const newStartColumn = {
        ...startColumn,
        taskIds: startTaskIds,
      }
      const endTaskIds = Array.from(endColumn.taskIds)
      endTaskIds.splice(destination.index, 0, draggableId)

      const newEndColumn = {
        ...endColumn,
        taskIds: endTaskIds,
      }
      const resultData = {
        ...data,
        columns: {
          ...data.columns,
          [newStartColumn.id]: newStartColumn,
          [newEndColumn.id]: newEndColumn,
        },
      }
      setData(resultData)
    }
  }

  return (
    <DragDropContext
      onDragStart={onDragStart}
      onDragUpdate={onDragUpdate}
      onDragEnd={onDragEnd}
    >
      <Droppable
        droppableId="all-columns"
        direction="horizontal"
        type="column"
      >
        {provided => (

          <CenterLayout
            width="96%"
            marginTop="0.5rem"
      // flexDirection={small ? 'column' : 'row'}
            justify="flex-start"
            align="flex-start"
            ref={provided.innerRef}
            {...provided.droppableProps}
          >
            {data && data.columnOrder.map((columnId, index) => {
              const column = data.columns[columnId]
              const tasks = column.taskIds.map(taskId => data.tasks[taskId])
              return (
                <Column
                  key={column.id}
                  column={column}
                  tasks={tasks}
                  columnIndex={index}
                />
              )
            })}
            {provided.placeholder}
          </CenterLayout>
        )}
      </Droppable>
    </DragDropContext>

  )
}
export default LikeTrello
