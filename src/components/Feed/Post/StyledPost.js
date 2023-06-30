import styled from 'styled-components';

const StyledPost = styled.div`
  align-items: center;
  justify-content: center;
  display: flex;
  flex-direction: column;
  ion-card.postcard {
    width: 95%;
    margin-top: 0;
    margin-bottom: 10px;

    ion-card-content {
      padding: 10px;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      align-items: center;

      .cardheader {
        display: flex;
        align-items: flex-start;
        justify-content: space-between;
        gap: 12px;
        flex-direction: row;
        padding-top: 0;
        padding-inline: 0;
        width: 100%;

        ion-avatar {
          width: 50px;
          height: 50px;
          flex: 1 0 50px;
          img {
            width: 50px;
            height: 50px;
          }
        }
        .card-right-content {
          width: calc(100% - 62px);
          display: flex;
          flex-direction: column;
          .user-info {
            width: 100%;
            display: flex;
            justify-content: space-between;
            align-items: center;
            fleex-direction: row;
          }
          ion-img {
            margin: 10px 0;
            --border-radius: 10px;
            border-radius: 10px;
            overflow: hidden;
          }
        }
        ion-label.name {
          font-family: 'nunito';
          font-style: normal;
          font-weight: 600;
          font-size: 18px;
          line-height: 153.4%;
        }
        ion-label.date {
          font-family: 'nunito';
          font-style: normal;
          font-size: 12px;
        }
      }

      ion-label.postText {
        font-family: 'Nunito';
        font-style: normal;
        font-weight: 400;
        font-size: 13.5px;
        line-height: 91.9%;
        display: flex;
        color: #000000;
      }
    }

  }
`;

export default StyledPost;