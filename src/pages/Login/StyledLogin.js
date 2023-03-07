
import styled from 'styled-components';

const StyledLogin = styled.div`
h1 {
  font-size: 2rem;
  margin-bottom: 1rem;
  text-align: center;
}

ion-input {
  margin-bottom: 1rem;
  background-color: #FFC0CB;
}

.error {
  color: red;
  margin-bottom: 1rem;
}

ion-button {
  display: block;
  margin: 1rem auto;
  width: 80%;
  max-width: 20rem;
}

ion-button.ion-color-danger {
  --background: #EA4335;
  --background-activated: #D62A20;
}

ion-button.ion-color-danger:hover {
  --background: #D62A20;
  --background-activated: #EA4335;
}




`;


export default StyledLogin;
