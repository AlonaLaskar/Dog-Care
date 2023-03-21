export const usernameValidate = {
    required: {
      value: true,
      message: 'Please enter username',
    },
    minLength: {
      value: 6,
      message: 'Username must be at least 6 characters long',
    },
    pattern: {
      value: /^[a-zA-Z0-9]+$/,
      message: 'Username must be alphanumeric',
    },
  };
  
  export const emailValidate = {
    required: {
      value: true,
      message: 'אנא הזן אימייל',
    },
    pattern: {
      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
      message: 'האימייל שהזנת אינו תקין',
    },
  };
  
  export const passwordValidate = {
    required: {
      value: true,
      message: 'אנא הזן סיסמא',
    },
    minLength: {
      value: 6,
      message: 'הסיסמא חייבת להכיל אות קטנה וגדולה ומינימום אורך 6 תווים'
    },
  };
  