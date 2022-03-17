import { authSelector } from 'features/auth';
import { useAppSelector } from 'hooks';
import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';

const RequireAuth: React.FC = ({ children }) => {
   const { currentUser } = useAppSelector(authSelector);
   const location = useLocation();

   if (currentUser === null) {
      return <Navigate to="/auth" state={{ from: location }} replace />;
   }

   return <>{children}</>;
};

export default RequireAuth;
