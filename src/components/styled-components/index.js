
import styled from 'styled-components';


export const Wrapper = styled.div`
  display: flex;
  flex-flow: wrap;
`;
export const CloseButton = styled.div`
  position: absolute;
  top:5px;
  right:5px
`

export const Blur = styled.div`
  background-color: #ffffffd1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: absolute;
  width: 100%;
  height: 100%;
  z-index: 1;
`
export const Card = styled.div`
  width: 100%;
  position: relative;
  border-radius: 5px;
  margin: 30px;
  width: calc(50% - 60px);
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  text-align: center;
  &:hover {
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.4), 0 6px 20px 0 rgba(0, 0, 0, 0.4);
  }
`;

export const TitleWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin: 20px;
`

export const Button = styled.button`
  display: inline-block;
  border-radius: 3px;
  padding: 0.5rem 0.5rem;
  margin: 0.5rem 1rem;
  background: transparent;
  color: white;
  border: 2px solid blue;
  background: white;
  color: blue;
`;

export const ImageWrapper = styled.div`
  position: relative;
  width:100%;
  height:350px;
  overflow:hidden;
`;

export const Image = styled.img`
  position: absolute;
  top: 50%;
  left: 50%;
  margin-right: -50%;
  width:100%;
  transform: translate(-50%, -50%);
  transition: all .2s ease-in-out;
  &:hover {
    transform: scale(1.1) translate(-50%, -50%);
  }
`;
