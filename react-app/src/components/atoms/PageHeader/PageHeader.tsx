import React from 'react'
import * as S from './PageHeader.styles'

interface PageHeaderProps {
    children: React.ReactNode;
  }

const PageHeader: React.FC<PageHeaderProps> = ({children}) => {
    return (
        <S.HeaderContainer>
            {children}
        </S.HeaderContainer>
    )
}

export default PageHeader
