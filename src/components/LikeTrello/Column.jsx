import React from 'react'
import styled from 'styled-components'
import {
  Droppable,
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
  tasks, column,
}) => (
  <Wrapper>
    <Label
      type="text"
      value={column.label}
      disabled
    />
    <Droppable droppableId={column.id}>
      {provided => (
        <Content
          ref={provided.innerRef}
          {...provided.droppableProps}
        >
          {tasks.map((task, index) => (
            <Task

              key={task.id}
              task={task}
              index={index}
            />
          ))}
          {provided.placeholder}
        </Content>
      )}
    </Droppable>

  </Wrapper>
)
export default Column
