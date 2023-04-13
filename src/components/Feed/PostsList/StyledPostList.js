import styled from 'styled-components';

const StyledPostList = styled.div`
  position: absolute;
  top: 40%;
  left: 0;
  right: 0;
  bottom: 0;
  overflow: auto;  
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