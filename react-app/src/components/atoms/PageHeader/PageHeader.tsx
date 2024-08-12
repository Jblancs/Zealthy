import React from 'react'
import './PageHeader.css'

interface PageHeaderProps {
    children: React.ReactNode;
  }

const PageHeader: React.FC<PageHeaderProps> = ({children}) => {
    return (
        <div className='page-header'>
            {children}
        </div>
    )
}

export default PageHeader
