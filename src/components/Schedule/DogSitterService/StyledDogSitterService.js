import styled from 'styled-components';

const StyledDogSitterService = styled.div`

align-items: center;
  justify-content: center;
  display: flex;
  flex-direction: column;



  ion-card {
    position: relative;
    width: 350px;
    height: 535px;
    background: #ffffff;
    top: -18%;
    border-radius: 10px;
  }
  .dateStart {
    height: 39px;
    width: 171px;
    left: 39px;
    top: 287px;
    border-radius: 10px;
    box-sizing: border-box;
    position: absolute;
    width: 171px;
    left: calc(50% - 171px / 2 - 90.5px);
    top: 30.79%;
    bottom: 65.02%;
    background: #ffffff;
    border: 3px solid #024c71;
    border-radius: 10px;
  }
  .dateEnd {
    height: 39px;
    width: 171px;
    left: 219px;
    top: 286px;
    border-radius: 10px;
    box-sizing: border-box;
    position: absolute;
    width: 171px;
    left: calc(50% - 171px / 2 + 89.5px);
    top: 30.69%;
    bottom: 65.13%;
    background: #ffffff;
    border: 3px solid #024c71;
    border-radius: 10px;
  }

  .fromStart {
    height: 39px;
    width: 171px;
    left: 39px;
    top: 386px;
    border-radius: 10px;
    box-sizing: border-box;
    position: absolute;
    width: 171px;
    left: calc(50% - 171px / 2 - 90.5px);
    top: 46.31%;
    bottom: 54.4%;
    background: #ffffff;
    border: 3px solid #024c71;
    border-radius: 10px;
  }

  .toEnd {
    height: 39px;
    width: 171px;
    left: 219px;
    top: 385px;
    border-radius: 10px;

    box-sizing: border-box;
    position: absolute;
    width: 171px;
    left: calc(50% - 171px / 2 + 89.5px);
    top: 46.31%;
    bottom: 54.51%;

    background: #ffffff;
    border: 3px solid #024c71;
    border-radius: 10px;
  }
  ion-button {
    position: absolute;
    width: 172px;
    left: calc(50% - 172px / 2 - 0.5px);
    top: 87.76%;
    bottom: 15.13%;
    background: #fb8500;
    border-radius: 6px;
    color: #ffffff;
  }

  .From {
    position: absolute;
    left: 2.07%;
    right: 82.33%;
    top: -92.65%;
    bottom: 69.53%;

    font-family: 'Nunito';
    font-style: normal;
    font-weight: 300;
    font-size: 16px;
    line-height: 106.4%;
    /* identical to box height, or 17px */

    display: flex;
    align-items: center;
    text-align: center;
    color: #024c71;
  }
  .To {
    position: absolute;
    left: 2.07%;
    right: 44.88%;
    top: -92.65%;
    bottom: 69.53%;

    font-family: 'Nunito';
    font-style: normal;
    font-weight: 300;
    font-size: 16px;
    line-height: 106.4%;
    /* identical to box height, or 17px */

    display: flex;
    align-items: center;
    text-align: center;
    color: #024c71;
  }
  .payment {
    position: absolute;
    height: 39px;
    width: 171px;
    left: 0px;
    top: 319px;
    border-radius: 10px;
    font-family: 'Nunito';
    font-style: normal;
    font-weight: 300;
    font-size: 16px;
    line-height: 106.4%;
    span {
      position: absolute;
      left: 2.07%;
      right: 44.88%;
      top: -60.65%;
      bottom: 69.53%;
    }
    background: #ffffff;
    border: 3px solid #024c71;
    border-radius: 10px;
  }
  .MoreDoges {
    position: absolute;
    height: 39px;
    width: 171px;
    left: 0px;
    top: 380px;
    font-family: 'Nunito';
    font-style: normal;
    font-weight: 300;
    font-size: 16px;
    line-height: 106.4%;
  }
  .extension {
    position: absolute;
    height: 39px;
    width: 171px;
    left: 0px;
    top: 420px;
    font-family: 'Nunito';
    font-style: normal;
    font-weight: 300;
    font-size: 16px;
    line-height: 106.4%;
  }
  h1 {
    font-family: 'Nunito';
    font-style: normal;
    font-weight: 300;
    font-size: 26px;
    line-height: 106.4%;
  }
`;

export default StyledDogSitterService;
