import styled from "styled-components";

const Wrapper = styled.div`
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100vw;
  z-index: 999;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  color: black;
  padding: 1rem;
  background-color: gainsboro;

  button {
    position: absolute;
    top: 0;
    right: 20px;
    border: none;
    font-size: 32px;
  }

  p {
    width: 250px;
  }

 
`;

export default Wrapper;
