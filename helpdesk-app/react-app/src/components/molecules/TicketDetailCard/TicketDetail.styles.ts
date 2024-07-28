import styled from 'styled-components'

export const CardContainer = styled.div`
display: flex;
flex-direction: column;
min-width: 1000px;
gap: 30px;
font-size: 25px;
`

export const TicketHeader = styled.div`
    font-size: 40px;
    font-weight: bold;
    border-bottom: 1px solid #bfbfbf;
    padding: 40px 0;
`

export const CreatedByContainer = styled.div`
display: flex;
width: 100%;
`

export const CreatedBySection = styled.div`
width: 40%;
`

export const DescriptionContainer = styled.div`
display: flex;
flex-direction: column;
width: 100%;
gap: 10px;
`

export const DescriptionSection = styled.div`
font-size: 20px;
width: 80%;
border: 1px solid #bfbfbf;
border-radius: 10px;
min-height: 150px;
padding: 10px
`
