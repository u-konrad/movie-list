import styled from "styled-components";

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  transition: all 0.3s ease-in-out;
  cursor: pointer;

  @media screen and (max-width: 768px) {
    flex-direction: column;
  }

  &:hover{
    transform: scale(1.03);
  }

 img {
   width: 200px;
  }

  .genre-container span:not(:last-of-type){
    margin-right: 0.5rem;
  }
`;

export default Wrapper;
