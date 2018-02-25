import React from 'react'
import styled from 'styled-components'

const PositionWrapper = styled.div`
  position: fixed;
  right: 23px;
  bottom: 23px;
  padding-top: 15px;
  margin-bottom: 0;
  z-index: 997;
`

const Button = styled.button`
  background-color: #f44336;
  width: 56px;
  height: 56px;
  position: relative;
  cursor: pointer;
  display: inline-block;
  overflow: hidden;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  -webkit-tap-highlight-color: transparent;
  vertical-align: middle;
  z-index: 1;
  -webkit-transition: 0.2s ease-out;
  transition: 0.2s ease-out;
  line-height: 54px;
  color: #fff;
  padding: 0;
  border-radius: 50%;
  text-align: center;
  letter-spacing: 0.5px;
  text-decoration: none;
  font-size: 1rem;
  outline: 0;
  border: none;
  text-transform: uppercase;
  box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 1px 5px 0 rgba(0, 0, 0, 0.12),
    0 3px 1px -2px rgba(0, 0, 0, 0.2);
  &:hover {
    box-shadow: 0 3px 3px 0 rgba(0, 0, 0, 0.14), 0 1px 7px 0 rgba(0, 0, 0, 0.12),
      0 3px 1px -1px rgba(0, 0, 0, 0.2);
  }
  &:active {
    transform: scale(0.95);
  }
`
const MaterialIcon = styled.i`
  line-height: 56px;
  font-size: 1.6rem;
  width: inherit;
  display: inline-block;
  text-align: center;
  color: #fff;
  font-family: 'Material Icons';
  font-weight: normal;
  font-style: normal;
  letter-spacing: normal;
  text-transform: none;
  white-space: nowrap;
  word-wrap: normal;
  direction: ltr;
  -webkit-font-smoothing: antialiased;
  text-rendering: optimizeLegibility;
`

const RoundMaterializeButton = ({ icon }) => {
  return (
    <PositionWrapper>
      <Button>
        <MaterialIcon>{icon}</MaterialIcon>
      </Button>
    </PositionWrapper>
  )
}

export default RoundMaterializeButton
