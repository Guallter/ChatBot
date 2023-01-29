import styled from 'styled-components';

export const Container = styled.div`
  height: 100px;
  display: flex ;
  justify-content: space-between;
  background-color: #111; 
  box-shadow: 0 0 20px 3px;

  > svg {
    position: fixed;
    color: white;
    width: 30px;
    height: 30px;
    margin-top: 32px;
    margin-left: 32px;
    cursor: pointer;


  }
  
`;
export const ContainerNav = styled.div`
  width: 100%;
  grid-area: nav;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 30px 0 30px;
  
`;








