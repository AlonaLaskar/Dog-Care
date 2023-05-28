import styled from 'styled-components';

const StylesProfileCard = styled.div`
  border-radius: 20px;

  .card-container {
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 1fr;
    height: 550px;
  }
  .card-container > .image-container {
    grid-column: 1/2;
    grid-row: 1/2;
    overflow: hidden;
    height: 100%;

    
  }
  .card-container > .image-container > ion-img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  .card-container > .details-container {
    grid-column: 1/2;
    grid-row: 1/2;
    align-self: end;
    margin: 20px;
    padding: 20px;
    background-color: rgba(255, 255, 255, 0.5);
    border-radius: 10px;
    backdrop-filter: blur(5px);
  }
  .card-container > .details-container > .name {
    color: #333;
    font-size: 1.5rem;
    font-weight: 600;
  }
  .card-container > .details-container > .address {
    color: #333;
    font-size: 1rem;
    font-weight: 400;
  }
  .card-container > .details-container > .bio {
    color: #333;
    font-size: 1rem;
    font-weight: 400;
    font-family: 'Nunito';
    font-style: normal;
    font-weight: 600;
    font-size: 16px;
    line-height: 115.4%;
    /* or 14px */
    display: flex;
    align-items: center;
  }
    .card-container > .details-container > .date {
    color: #333;
    font-size: 1rem;
    font-weight: 400;
    font-family: 'Nunito';
    font-style: normal;
    font-weight: 600;
    font-size: 16px;
    line-height: 115.4%;
    /* or 14px */
    display: flex;
    align-items: center;
    }
    .card-container > .details-container > .time {
    color: #333;
    font-size: 1rem;
    font-weight: 400;
    font-family: 'Nunito';
    font-style: normal;
    font-weight: 600;
    font-size: 16px;
    line-height: 115.4%;
    /* or 14px */
    display: flex;
    align-items: center;
    }
  .card-container > .details-container > .price {
    color: #333;
    font-size: 0.9rem;
    font-weight: bold;
  }

  ion-card-header {
    padding: 0;
  }
`;

export default StylesProfileCard;
