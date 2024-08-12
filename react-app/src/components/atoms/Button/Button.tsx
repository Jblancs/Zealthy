import React from 'react'
import './Button.css'

interface ButtonProps {
  children: React.ReactNode
  onClick?: () => void
  color?: string
  disabled?: boolean
  padding?: string
  backgroundColor?: string
  fontSize?: string
}

const Button: React.FC<ButtonProps> = ({
  onClick,
  children,
  disabled = false,
  color = 'black',
  padding = '2px 10px',
  backgroundColor = '#99ccff',
  fontSize = '12px'
}) => {

  const style = {
    color: color || 'black',
    padding: padding || '2px 10px',
    backgroundColor: disabled ? '#bfbfbf' : backgroundColor,
    fontSize: fontSize || '12px',
  };

  return (
    <button
      onClick={onClick}
      disabled={disabled}
      style={style}
      className='button-atom'
    >
      {children}
    </button>
  )
}

export default Button
