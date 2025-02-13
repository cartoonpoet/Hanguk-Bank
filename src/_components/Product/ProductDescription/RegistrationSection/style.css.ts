import styled from 'styled-components'

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    gap: 8px;
    background: var(--Sucess-Secondary, #EAF6EC);
    padding: 40px 20px 20px 20px;
    justify-content: center;
`

export const SubTitle = styled.h2`
    color: var(--Black-Default, #000);
    font-size: 16px;
    font-style: normal;
    font-weight: 500;
    line-height: 150%; /* 24px */
    text-align: center;
`

export const Title = styled.h2`
    color: var(--Sucess-Default, #28A745);
    text-align: center;
    font-size: 24px;
    font-style: normal;
    font-weight: 700;
    line-height: 120%; /* 28.8px */
`

export const List = styled.ul`
    padding: 20px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
`
export const ListItem = styled.li`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    flex: 1;
`

export const Ellipse = styled.span`
    width: 80px;
    height: 80px;
    flex-shrink: 0;
    border-radius: 100%;
    background: white;
    display: flex;
    justify-content: center;
    align-items: center;
`

export const ListItemSubTitle = styled.h2`
    color: var(--Neutral-Label, #4E5968);
    font-size: 16px;
    font-style: normal;
    font-weight: 500;
    line-height: 150%; /* 24px */
    padding-top: 8px;
`
export const ListItemTitle = styled.h2`
    color: var(--Sucess-Default, #28A745);
    font-size: 16px;
    font-style: normal;
    font-weight: 700;
    line-height: 150%; /* 24px */
`
export const ListItemText = styled.h2`
    color: var(--Black-Default, #000);
    text-align: center;
    font-size: 16px;
    font-style: normal;
    font-weight: 700;
    line-height: 150%; /* 24px */
`

export const ButtonContainer = styled.div`
    display: flex;
    padding: 20px 20px 0 20px;
    gap: 10px;
    align-items: center;
`
export const Button = styled.button`
    display: flex;
    flex: 1;
    padding: 14px 16px;
    justify-content: center;
    align-items: center;
    border-radius: 12px;
    background: rgba(40, 167, 69, 0.20);
    color: var(--Black-Default, #000);
    font-size: 18px;
    font-style: normal;
    font-weight: 600;
    line-height: 100%; /* 18px */
`
export const IconButton = styled.div`
    display: flex;    
    padding: 14px 16px;
    justify-content: center;
    align-items: center;
    border-radius: 12px;
    background: var(--White-Default, #FFF);
`
