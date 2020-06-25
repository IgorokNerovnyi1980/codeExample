import React from 'react'
import styled from 'styled-components'
import {
  Draggable,
} from 'react-beautiful-dnd'

const Wrapper = styled.div`
    width:100%;
    margin-top:0.5rem;
    padding:${props => props.theme.secondaryPad};
    background-color:${props => (props.isDragging ? props.theme.darkHotBg : props.theme.lightHotBg)};
    border-radius:${props => props.theme.mainBR};
    transition:background-color 0.2s ease;
    p{
        color:${props => props.theme.mainBG};  
    }
`

const Task = ({
  task, index,
}) => (
  <Draggable
    draggableId={task.id}
    index={index}
  >
    {(provided, snapshot) => (

      <Wrapper
        {...provided.draggableProps}
        {...provided.dragHandleProps}
        ref={provided.innerRef}
        isDragging={snapshot.isDragging}
      >
        <p>{task.content}</p>
      </Wrapper>
    )}
  </Draggable>
)
export default Task
