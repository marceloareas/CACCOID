import styled from 'styled-components';

export const ToastContainer = styled.div`
  background-color: #FFF7BC;
  border: none;
  padding: 8px 16px;
  border-radius: 4px;
  font-size: 16px;
  max-width: 100%;
  margin: 0 auto;
  text-align: center;
  box-sizing: border-box;
  align-items: center;
  display: flex;
  gap: 8px;

  img{
    height: 20px;
    width: 20px;
  }
`;

export const ToastWrapper = styled.div`
  width: 100%;
  background-color: transparent;
  padding: 8px;
`;