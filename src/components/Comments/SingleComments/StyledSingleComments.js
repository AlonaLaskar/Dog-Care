import styled from 'styled-components';

const StyledSingleComments = styled.div`
  display: flex;
  flex-direction: row;
  margin: 1rem 0;
  background-color: pink;

  .ion-card-title {
    font-size: 1.2rem;
  }

  .ion-text {
    font-size: 1rem;
    color: #a1a1a1;
  }

  .ion-label {
    margin-top: 0.5rem;
    ion-textarea {
      font-size: 1rem;
      color: #333;
    }
  }

  ion-button {
    margin-top: 1rem;
    --border-radius: 10px;
    --background: #fff;
    --border-color: #ddd;
    --color: #222;
    --padding-top: 0.5rem;
    --padding-bottom: 0.5rem;
    --padding-start: 1rem;
    --padding-end: 1rem;
    --box-shadow: none;

    &:hover {
      --background: #e9e9e9;
      --border-color: #c9c9c9;
      --color: #222;
    }

    &:active {
      --background: #e1e1e1;
      --border-color: #b1b1b1;
      --color: #111;
    }

    ion-icon {
      font-size: 1.2rem;
    }

    &[disabled] {
      opacity: 0.6;
      pointer-events: none;
    }
  }
`;

export default StyledSingleComments;
