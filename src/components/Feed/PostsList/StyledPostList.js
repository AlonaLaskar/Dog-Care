import styled from 'styled-components';

const StyledPostList = styled.div`

  // position: absolute;
  // left: 1.5%;;
  // top: 30%;
  // right: 0;
  // bottom: 0;

  /* overflow: auto; */
  

  div[data-test-id="virtuoso-item-list"] {
    > div {
      &:nth-of-type(1){
        ion-card {
          margin-top:10px;
        }
      }
    }
  }
  
  .title {
    font-size: 18px;
    font-weight: bold;
    color: black;
    margin: 10px;
  }
  
  .no-posts {
    font-size: 18px;
    font-weight: bold;
    color: black;
    margin: 10px;
  }
`;

export default StyledPostList;
