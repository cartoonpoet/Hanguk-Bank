import styled from "styled-components";

export const Container = styled.div`
    flex: 1;
    padding: 20px;
`

export const Wrapper = styled.div`
    padding: 20px;
    display: flex;
    flex-direction: column;
    gap: 20px;
    border-radius: 16px;
    border: 1px solid var(--Border-Default, #D6DBE1);
    background: var(--White-Default, #FFF);
`

export const Description = styled.div`
    color: var(--Neutral-Label, #4E5968);
    font-size: 16px;
    font-style: normal;
    font-weight: 500;
    line-height: 150%; /* 24px */
`
export const Title = styled.h2`
    color: var(--Black-Default, #000);
    font-size: 18px;
    font-style: normal;
    font-weight: 700;
    line-height: 160%; /* 28.8px */
`

export const Button = styled.button`
    border-radius: 12px;
    padding: 14px 16px;
    border: 1px solid var(--Brand-Default, #007BFF);
    color: var(--Brand-Default, #007BFF);
    font-size: 18px;
    font-style: normal;
    font-weight: 600;
    line-height: 100%; /* 18px */
`