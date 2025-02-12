import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    background-color: white;
    padding-bottom: 20px;
`

export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 4px;
    padding: 20px;
    font-size: 18px;
`
export const Title = styled.h2`
    color: var(--Black-Default, #000);
    font-weight: 700;
`
export const Content = styled.div`
    color: var(--Neutral-Label, #4E5968);
    font-weight: 500;
`
export const ItemBanner = styled.div`
    display: flex;
    padding: 40px 20px;
    align-items: center;
    gap: 16px;
    flex-direction: row;
    font-size: 14px;
    font-style: normal;
    font-weight: 500;
    color: var(--Neutral-Default, #6B7684);
    background: var(--Neutral-On, #FAFAFB);

`