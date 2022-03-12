import styled from "styled-components";

const Wrapper = styled.div`
    padding-bottom: 20px;

  .movie-container {
    display: flex;
    flex-direction: row;
  }

  .movie-container  > div {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      padding-left: 2rem;
    }

    .movie-container > img {
      max-width: 450px;
      width: 100%;

    }

    .actor-container {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(80px, 1fr));
      gap: 1rem;
    }

    .actor-container img {
      width: 100%;
      border-radius: 0.5rem;
      aspect-ratio: 1.5/2;
      object-fit: cover;
    }

    .actor-container p {
      font-size: 12px;
    }

    .rating-container{
        display: grid;
        place-items: center;
        font-size: 28px;
        padding: 1rem;
        margin-top: 1.5rem;
        background-color: gainsboro;
        border-radius: 0.5rem;
        width: 100%;
    }


    @media screen and (max-width: 992px) {
      .movie-container {
        flex-direction: column;
        max-width: 600px;
        margin-inline: auto;
      }

      .movie-container > div {
        padding-left: 0;
        padding-top: 2rem;
      }
      .movie-container > img {
          max-width: 100%;
      }
    }

  
`;
export default Wrapper;
