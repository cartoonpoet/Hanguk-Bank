import styled from "styled-components";

export const Container = styled.div`
    padding: 40px 20px;
    display: flex;
    flex-direction: column;
    gap: 16px;
    background: white;
`

export const TitleWrapper = styled.div`
    display: flex;
    flex-direction: column;
    color: var(--Black-Default, #000);
    font-size: 24px;
    font-style: normal;
    font-weight: 700;
    line-height: 120%; /* 28.8px */
`

export const TitleWrapperText = styled.span`
    color: var(--Sucess-Default, #28A745);
`

export const DescriptionWrapper = styled.div`
    color: var(--Black-Default, #000);
    font-size: 18px;
    font-style: normal;
    font-weight: 500;
    line-height: 160%; /* 28.8px */
    display: flex;
    flex-direction: column;
    gap: 4px
`

export const ImageWrapper = styled.div`
    display: flex;
    padding: 20px;
    justify-content: center;
    align-items: flex-start;
    align-self: stretch;
`