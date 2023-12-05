import styled from "styled-components";


export const fontes = {
    primaria: "'Nunito Sans', sans-serif"
  };

  export const ContainerList = styled.section `
  margin-top: 5%;
  `
    
export const ContainerTasks = styled.section `
display: flex;
flex-wrap: wrap;
width: calc(100% - 40px);
margin: 0 auto;
justify-content: center;
gap: 20px;
margin-top:50px;


`
export const HeaderCustom = styled.header `
background-color: #B0C4DE;
margin: 0;
width: 100%;
display: flex;
justify-content: center;
padding: 20px;
text-transform: capitalize;
font-size: 20px;

 `
export  const IconDelete = styled.span ` 
text-align: end;
position: absolute;
right: 15px;
top: 8px;

`

export const ButtonSaveDesc  = styled.button `
background: green;
color: white;
border-radius: 10px;
font-size:14px;

`
export const ContainerDesc  = styled.div `
display: flex;
flex-direction:column;
`
export const ResultText = styled.span `
display: flex;
justify-content: center;
align-items: center;
font-family: ${fontes.primaria};
font-weight:600;
    
`
export const ContainerFilter = styled.div `
display:flex;
justify-content: center;
align-items: center;
margin-top: 20px;
gap: 30px;


`
export const Card  = styled.div `
    display: flex;
    flex-direction: column;
    background: white;
    border-radius: 10px;
    padding: 20px;
    box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.2);
    max-width: 205px;
    position: relative;
    width: 100%;
    max-height: 290px;
    height: 100%;
    border-top: 5px solid transparent;
`
export const BoxStatus = styled.div `
display: flex;
justify-content: center;
padding: 10px;
font-family: ${fontes.primaria};
font-weight: 400;

`
export const TextArea = styled.textarea `
 font-family: ${fontes.primaria};
 font-size: 14px;
`

export const SelectStatus = styled.select `
font-family: ${fontes.primaria};
font-weight: 700;
background-color:transparent;


`
export const ContainerTitle = styled.span `
padding: 5px;
display: flex;
justify-content: center;


`
export const DivisorCard = styled.hr `
border: 1px solid gray;

`



export const TitleCard = styled.h3 `
font-family: ${fontes.primaria};
color: black;
font-size: 18px;
text-transform: capitalize;
text-align: center;
font-weight: 700;
`