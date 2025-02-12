import styled from "styled-components";

export const Wrapper = styled.div`
    display: flex;
    padding: 4px 0 0 20px;
    align-items: center;
`

export const Item = styled.div<{selected:boolean}>`
    display: flex;
    padding: 16px;
    justify-content: center;
    align-items: center;
    text-align: center;
    flex: 1;
    font-size: 18px;
    font-style: normal;
    font-weight: 700;
    line-height: 160%; /* 28.8px */
    color: ${({ selected }) => selected ? 'var(--Black-Default, #000);' : 'var(--Neutral-Default, #6B7684);'}
`