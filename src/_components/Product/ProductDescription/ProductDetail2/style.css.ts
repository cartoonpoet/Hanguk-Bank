import styled from 'styled-components'

export const Container = styled.div`
    padding: 40px 20px;
    display: flex;
    flex-direction: column;
    gap: 24px;
`

export const MainWrapper = styled.div`
    color: var(--Black-Default, #000);
    font-size: 24px;
    font-style: normal;
    font-weight: 700;
    line-height: 120%; /* 28.8px */
`

export const SubWrapper = styled.div`
    color: var(--Black-Default, #000);
    font-size: 18px;
    font-style: normal;
    font-weight: 500;
    line-height: 160%; /* 28.8px */
    display: flex;
    gap: 20px;
    flex-direction: column;
`

export const DescriptionWrapper = styled.div`
    color: var(--Neutral-Default, #6B7684);
    font-size: 16px;
    font-style: normal;
    font-weight: 500;
    line-height: 150%; /* 24px */
    display: flex;
    gap: 8px;
    flex-direction: row;
`

export const SavingsIconWrapper = styled.div`
    display: flex;
    justify-content: center;
`