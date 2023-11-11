import styled from 'styled-components'

export const Wrapper = styled.button`
  position: relative;
  background: #555;
  color: #ddd;
  font-size: 1.5em;
  letter-spacing: 0.1em;
  font-weight: 300;
  padding: 5px 20px;
  border: none;
  border-radius: 10px;
  cursor: pointer;

  :hover {
    background: linear-gradient(45deg, #ff0000, #ff7300, #fffb00, #48ff00, #00ffd5, #002bff, #7a00ff, #ff00c8, #ff0000);
  }
`