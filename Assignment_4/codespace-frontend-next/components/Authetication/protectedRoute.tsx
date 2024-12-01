import { ReactNode, useContext, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useAuth } from '../contexts/AuthContext';

interface ProtectedRouteProps {
  roles:string[],
  children: ReactNode; 
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ roles,children }) => {
  const { state ,dispatch} = useAuth();
  const {user,isAuthenticated}=state;
  const router = useRouter();

  useEffect(() => {
    if (!isAuthenticated) {
      router.push('/login'); 
      return;
    }
    const userHasAccess = user && roles.includes(user.role);
    if(!userHasAccess)
    {
        console.log("Inside the Protected route page");
        dispatch({type:"NOT_AUTHORISED",})
        router.push('/unauthorised');
        return;
    }

  }, [isAuthenticated, user, router]);

  if ( !isAuthenticated || !user) {
    return <div>Loading...</div>; 
  }

  return <>{children}</>;
};

export default ProtectedRoute;
