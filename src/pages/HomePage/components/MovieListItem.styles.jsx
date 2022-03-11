import styled from "styled-components";

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  transition: all 0.3s ease-in-out;
  cursor: pointer;

  &:hover{
    transform: scale(1.05);
  }


 img {
   width: 200px;
  }
`;

export default Wrapper;
