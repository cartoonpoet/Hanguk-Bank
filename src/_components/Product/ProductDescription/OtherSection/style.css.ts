import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    padding: 40px 20px;
    background: var(--Sucess-Secondary, #EAF6EC);
    gap: 20px;
`

export const CardWrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
`

export const Title = styled.h2`
    color: var(--Black-Default, #000);
    font-size: 20px;
    font-style: normal;
    font-weight: 700;
    line-height: 120%; /* 24px */
`

export const Card = styled.div`
    padding: 20px;
    background: white;
    border-radius: 16px;
    display: flex;
    flex-direction: column;
    gap: 4px;
`

export const CardTitle = styled.h2`
    font-size: 18px;
    font-style: normal;
    font-weight: 700;
`

export const CardDescription = styled.p`
    color: var(--Neutral-Label, #4E5968);
    font-size: 16px;
    font-style: normal;
    font-weight: 500;
    line-height: 150%; /* 24px */
`