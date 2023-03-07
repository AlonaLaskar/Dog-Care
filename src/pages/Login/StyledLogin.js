import styled from 'styled-components';

const StyledLogin = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;

  h1 {
    color: ${({ theme }) => theme.colors.pageTitle};
    margin: 0;
    padding: 0 0 20px;
  }

  .form {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    max-width: 440px;
    gap: 20px;

    .form-group {
      display: flex;
      position: relative;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      width: 100%;
      gap: 10px;

      label {
        color: ${({ theme }) => theme.colors.forms.labelColor};
      }

      .error {
        color: ${({ theme }) => theme.colors.forms.errorColor};
      }
    }

    .form-buttons {
      display: flex;
      justify-content: space-between;
      align-items: center;
      gap: 20px;
      width: 100%;

      .primary-button {
        background-color: ${({ theme }) => theme.colors.forms.primaryButtonColor};
        color: ${({ theme }) => theme.colors.forms.primaryButtonTextColor};
      }

      .secondary-button {
        background-color: ${({ theme }) => theme.colors.forms.secondaryButtonColor};
        color: ${({ theme }) => theme.colors.forms.secondaryButtonTextColor};
        text-decoration: underline;
      }
    }

    .form-social,
    .form-social .form-buttons {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      gap: 20px;
      width: 100%;

      h3 {
        color: ${({ theme }) => theme.colors.forms.labelColor};
        font-weight: 400;
      }

      .social-button {
        width: 100%;
        display: flex;
        justify-content: center;
        border-radius: none;
        align-items: center;
        gap: 10px;
        font-size: 1.1rem;

        &#google {
          border-radius: 0;
          background-color: #4285f4;
          color: white;
        }

        &#facebook {
          border-radius: 0;
          background-color: #3b5998;
          color: white;
        }
      }
    }
  }
`;

export default StyledLogin;
