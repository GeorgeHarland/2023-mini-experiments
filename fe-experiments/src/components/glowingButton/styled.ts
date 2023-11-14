import styled from 'styled-components'

export const GlowingButton = styled.button`
  position: relative;
  background: linear-gradient(45deg, #ff0000, #ff7300, #fffb00, #48ff00, #00ffd5, #002bff, #7a00ff, #ff00c8, #ff0000);
  /* background: linear-gradient(45deg, #000000, #ffffff, #000000, #ffffff, #000000, #ffffff); */
  color: #000;
  font-size: 1.5em;
  letter-spacing: 0.1em;
  font-weight: 300;
  padding: 5px 20px;
  border: none;
  border-radius: 10px;
  cursor: pointer;
  transition: box-shadow 0.3s ease;

  &:hover {
    box-shadow: 0 0 15px 5px rgba(255, 100, 255, 0.8);
  }

  p {
    margin: 5px 5px;
  }

  p::before {
    content: "👉";
    margin-right: 10px;
  }
`