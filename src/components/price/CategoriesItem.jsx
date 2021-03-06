import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
    width:100%;
    margin-bottom:1.5rem;
    background-color:${props => props.theme.mainBG};
    box-shadow:${props => props.theme.darkSmollBottomShdw};
    border-radius:0.5rem;
    
`
const Label = styled.h2`
    padding:${props => props.theme.mainPad};
    border-radius:${props => (props.bottomRadius ? '0.5rem' : '0.5rem 0.5rem 0 0')};
    background-color:${props => props.theme.secondaryBG};
    font-size:${props => props.theme.accentFZ};
    color:${props => props.theme.mainBG};
    text-align:center;
    cursor:pointer;

`
const Content = styled.div`
    padding:${props => props.theme.mainPad};
`
const Line = styled.div`
    position:relative;
    padding:${props => props.theme.secondaryPad};
    display:flex;
    justify-content:space-between;
    align-items:center;
    transition:0.2s;
    button{
        font-weight:${props => (props.active ? '600' : '400')};
        color:${props => (props.active ? 'green' : props.theme.greetingsBG)};
        cursor:pointer;
    }
`
const HaveMany = styled.div`
    z-index:2;
    position:absolute;
    right:30%;
    padding:${props => props.theme.secondaryPad};
    display:${props => (props.active ? 'flex' : 'none')};
    justify-content:space-between;
    align-items:center;
    background-color:${props => props.theme.mainBG};
    color:${props => props.theme.greetingsBG};

    button{
        padding:${props => props.theme.secondarySidePad};
        border:1px solid${props => props.theme.greetingsBG};
        border-radius:0.5rem;
        cursor: pointer;
        transition:0.2s;
        :active{
            transform:scale(0.95);
        }
    }
    span{
        padding:${props => props.theme.mainSidePad}; 
    }
`

const CategoriesItem = ({
  label = 'Default', content = [], currentCategory,
  fnToggle, fnSetQantity, isOpenCategory, fnToggleIsOpen,
}) => (
  <Wrapper>
    <Label
      isOpen={isOpenCategory === currentCategory}
      bottomRadius={isOpenCategory !== currentCategory}
      onClick={() => fnToggleIsOpen(currentCategory)}
    >
      {label}
    </Label>
    {(isOpenCategory === currentCategory) && (
      <Content>
        {content.map(obj => (
          <Line
            active={obj.isActive}
            key={obj.id}
          >
            <HaveMany active={obj.isActive}>
              <button
                type="button"
                onClick={() => fnSetQantity('minus', obj.id, currentCategory)}
              >
                -
              </button>
              <span>{obj.quantity}</span>
              <button
                type="button"
                onClick={() => fnSetQantity('plus', obj.id, currentCategory)}
              >
                +
              </button>
            </HaveMany>
            <button
              type="button"
              onClick={() => fnToggle(obj.id, currentCategory)}
            >
              {obj.name}
            </button>
            <button
              type="button"
              onClick={() => fnToggle(obj.id, currentCategory)}
            >
              {`${obj.price} $`}
            </button>
          </Line>
        ))}
      </Content>
    )}
  </Wrapper>
)

export default CategoriesItem
