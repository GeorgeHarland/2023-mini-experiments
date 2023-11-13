import styled from 'styled-components';

export const SingleParticle = styled.div`
  position: absolute;
  width: 5px;
  height: 5px;
  background-color: radial-gradient(circle at 30% 30%, #9a60ff, #5d3cb6);
  box-shadow: 0 0 15px #9a60ff, 0 0 30px #5d3cb6, inset 0 0 15px #9a60ff;
  border-radius: 50%;
  pointer-events: none;
`
