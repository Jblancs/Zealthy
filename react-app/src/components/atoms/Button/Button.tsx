import React from 'react'
import * as S from './Button.styles'

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
  color = 'black',
  disabled = false,
  padding = '2px 10px',
  backgroundColor = '#99ccff',
  fontSize = '12px'
}) => {
  return (
    <S.Button
      onClick={onClick}
      disabled={disabled}
      color={color}
      padding={padding}
      bgcolor={backgroundColor}
      fontSize={fontSize}
    >
      {children}
    </S.Button>
  )
}

export default Button
