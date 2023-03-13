import { useEffect } from 'react';
import { useHistory } from 'react-router-dom';

const AuthenticatedComponent = () => {
  const history = useHistory();

  // Check if the user is authenticated, if not redirect to login
  useEffect(() => {
    const isAuthenticated = true; // Replace with your own logic to check if the user is authenticated
    if (!isAuthenticated) {
      history.push('/tabs/tab2'); // Redirect to login page if user is not authenticated
    }
  }, [history]);

  return (
    <div>
      <h1>Authenticated Users Only</h1>
      <p>This is a protected route that can only be accessed by authenticated users.</p>
    </div>
  );
};

export default AuthenticatedComponent;
