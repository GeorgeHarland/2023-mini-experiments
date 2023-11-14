import styled, { keyframes } from 'styled-components'

const fluctuateSize = keyframes`
  0% {
    transform: scale(1);
    opacity: 1;
  }
  50% {
    transform: scale(0.2);
    opacity: 0;
  }
  100% {
    transform: scale(1);
    opacity: 1;
  }
`;

export const FadeInButton = styled.button`
  position: relative;
  animation: ${fluctuateSize} 2s ease infinite;
  opacity: 0;
  cursor: pointer;
`