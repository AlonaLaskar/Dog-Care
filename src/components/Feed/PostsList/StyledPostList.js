import styled from 'styled-components';

const StyledPostList = styled.div`



  /* overflow: auto; */

  max-width:600px;
  margin:auto;

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