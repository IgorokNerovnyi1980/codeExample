import React, {
  forwardRef,
} from 'react'
import styled from 'styled-components'
import {
  Droppable, Draggable,
} from 'react-beautiful-dnd'

import Task from './Task'

const Wrapper = styled.div`
    min-width:30rem;
    max-height:100%;
    margin:${props => props.theme.secondaryPad};
    padding:${props => props.theme.secondaryPad};
    background-color:${props => props.theme.darkColdBg};
    border-radius:${props => props.theme.mainBR};
`
const Label = styled.input`
    width:100%;
    background-color:${props => props.theme.lightColdBg};;
    padding:${props => props.theme.secondaryPad};
    color:${props => props.theme.greetingsBG};
    text-align:center;
    font-weight:600;
    font-size:${props => props.theme.accentFZ};
`
const Content = styled.div``

const Column = ({
  tasks, column, columnIndex,
}, ref) => (
  <Draggable
    draggableId={column.id}
    index={columnIndex}
  >
    {provided => (

      <Wrapper
        {...provided.draggableProps}
        ref={provided.innerRef}

      >
        <Label
          type="text"
          value={column.label}
          disabled

          {...provided.dragHandleProps}
        />
        <Droppable
          droppableId={column.id}
          type="task"
        >
          {taskProvided => (
            <Content
              ref={taskProvided.innerRef}
              {...taskProvided.droppableProps}
            >
              {tasks.map((task, index) => (
                <Task

                  key={task.id}
                  task={task}
                  TaskIndex={index}
                />
              ))}
              {taskProvided.placeholder}
            </Content>
          )}
        </Droppable>

      </Wrapper>
    )}
  </Draggable>
)
export default Column
