import styled from 'styled-components';

const StylesProfileCard = styled.div`
  border-radius: 20px;

  ion-card-content {
    padding: 0;
    position: relative;
    .image-container {
      ion-img {
        // height: 450px;
        height: calc(100vh - 273px);
        object-fit: cover;
      }
    }
    .details-container {
      // height: 450px;
      height: calc(100vh - 273px);
      display: flex;
      flex-direction: column;
      justify-content: flex-end;
      position: absolute;
      z-index: 99;
      top: 0;
      padding: 20px;
      background-image: linear-gradient(
        0deg,
        rgba(134, 134, 134, 0.72) 4.17%,
        rgba(135, 135, 135, 0.62) 45.67%,
        rgba(255, 255, 255, 0) 66.85%
      );
      width: 100%;
      color: #fff;
    }
    ion-text.name {
      font-weight: 900;
      font-size: 22px;
    }
    ion-text {
      display: inline-block;
      font-family: nunito;
      font-weight: 500;
      ion-icon {
        margin-right: 8px;
        margin-bottom: -2px;
      }
    }
  }
  h3 {
    margin-left:16px;
    margin-bottom:0;
    color:#024C71;
  }
  ion-card {
    margin-top:14px;
    margin-bottom:0;
  }

  .right {
  /* Add your custom styling for right swipe here */
}

.left {
  /* Add your custom styling for left swipe here */
}

  .swipe-indicator {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: row;
}
.swipe-indicator ion-icon {
  height: 60px;
  width: 60px;
  border-radius: 35px;
  padding: 0;
  margin: 0 10px;
  padding-top: 0;
  padding-bottom: 0;
  color: #fff;
}


.swipe-indicator.right ion-icon {
  background-color: #f19bc6;
  /* --background: #f19bc6;
    --background-activate: #f19bc6;
    --background-focused: #f19bc6; */

  }

.swipe-indicator.left ion-icon {
  background-color: #333;
  /* --background-activate: #555;
    --background-focused: #555; */
}
  


`;

export default StylesProfileCard;
