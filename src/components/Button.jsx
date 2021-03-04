import React from 'react'

export const Button = props => {
  return (
    <button
      onClick={props.onClick}
      className={props.isLarge ? 'large-button calc-button' : 'calc-button'}
    >
      {props.content}
    </button>
  )
}
