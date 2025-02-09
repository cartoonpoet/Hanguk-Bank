import styled, { css } from 'styled-components'
import React from 'react'

type StyledTagProps = {
  type: 'Default' | 'Focus'
}

const tagTypeOfState = {
  Default: css`
      background: var(--Neutral-Tertiary, #F2F4F6);
      color: var(--Neutral-Default, #6B7684);
      border-radius: 100px;
      font-size: 14px;
  `,
  Focus: css`
      background: var(--Brand-Secondary, #E6F2FF);
      color: var(--Brand-Default, #007BFF);
      font-size: 16px;
  `,
}

const StyledTag = styled.div<StyledTagProps>`
    display: flex;
    padding: 10px 16px;
    justify-content: center;
    align-items: center;
    gap: 4px;
    ${(props:StyledTagProps) => tagTypeOfState[props.type]}
    text-align: center;
    font-style: normal;
    font-weight: 600;
    line-height: 100%; /* 16px */
`

interface TagProps extends StyledTagProps {
  children: React.ReactNode
}

const Tag = ({ children, type }: TagProps) => {
  return <StyledTag type={type}>{children}</StyledTag>
}

export default Tag