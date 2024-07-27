// Style your elements here
import styled from 'styled-components'

export const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100vh;
  overflow: auto;
  padding: 20px 30px 20px 30px;
`
export const MainHeading = styled.h1`
  color: #1e293b;
  font-family: 'Roboto';
  font-size: 40px;
`
export const WebsiteDescription = styled.p`
  color: #334155;
  font-family: 'Roboto';
  font-size: 20px;
  margin-top: 2px;
  text-align: center;
`
export const ReactImage = styled.img`
  height: 50%;
  width: 60%;
`
export const DescriptionContainer = styled.div`
  width: 60%;
  text-align: start;
`
export const Button = styled.button`
  background-color: #1f81ff;
  border-width: 0px;
  border-radius: 8px;
  padding: 8px 15px 8px 15px;
  cursor: pointer;
  color: #ffffff;
  margin-top: 10px;
`
