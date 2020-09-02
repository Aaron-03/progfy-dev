import React, { useContext, useEffect, Fragment } from "react";
import { useRouter } from 'next/router';
import UserAuthContext from "../../contexts/authenticate/UserAuthContext";

const AdminProtectedRoute = ({ children, path = '/' }) => {

  const { customer, authenticate, getUserAuthenticated } = useContext(UserAuthContext);

  const router = useRouter();
  
  useEffect(() => {

    getUserAuthenticated();

    if(!authenticate && customer && customer.kind === 'admin') {
      router.push(path);
    }

  }, [authenticate]);

  return (
    <Fragment>
      {
        authenticate
        ? children
        : null
      }
    </Fragment>
  );
};

export default AdminProtectedRoute;
