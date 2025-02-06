import styled from 'styled-components'
import React from 'react'

const StyledTag = styled.div`
    display: flex;
    padding: 10px 16px;
    justify-content: center;
    align-items: center;
    gap: 4px;
    border-radius: 8px;
    background: var(--Brand-Secondary, #E6F2FF);
    color: var(--Brand-Default, #007BFF);
    text-align: center;
    font-size: 16px;
    font-style: normal;
    font-weight: 600;
    line-height: 100%; /* 16px */
`

interface TagProps {
  children: React.ReactNode
}

const Tag = ({ children }: TagProps) => {
  return <StyledTag>{children}</StyledTag>
}

export default Tag