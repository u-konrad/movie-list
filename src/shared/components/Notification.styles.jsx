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

  .showing {
    animation: showing 0.5s ease-in-out;
  }

  .hiding {
    animation: hiding 0.5s ease-in-out;
  }

  @keyframes showing {
    0% {
      opacity: 0;
      transform: translateY(100%);
    }
    100% {
      opacity: 1;
      transform: translateY(0);
    }
  }

  @keyframes hiding {
    0% {
      opacity: 1;
      transform: translateY(0);
    }
    100% {
      opacity: 0;
      transform: translateY(100%);
    }
  }
`;

export default Wrapper