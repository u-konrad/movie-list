import styled from "styled-components";

const Wrapper = styled.div`

  .hero-img {
    height: 300px;
    width:100%;
    max-width: 1000px;
    object-fit: cover;
    position: relative;
  }

  .img-container::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: black;
    opacity: 0.3;
  }

  .search-input {
    top: 50%;
    transform: translateY(-50%);
    left: 10%;
    width: 75%;
    min-width: 250px;
  }

  h1 {
    font-size: clamp(40px,10vw,64px);
    color: white;
  }
`;

export default Wrapper;
