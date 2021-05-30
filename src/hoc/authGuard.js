import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import Loader from 'utils/loader';

export default function (ComposedComponent) {
  const AuthenticationCheck = props => {
    const [isAuth, setIsAuth] = useState(false);
    const users = useSelector(state => state.users);

    useEffect(() => {
      if (!users.auth) {
        props.history.push('/');
      } else {
        setIsAuth(true);
      }
    }, [props.users, props.history, users.auth]);

    if (!isAuth) {
      return <Loader full={true} />;
    } else {
      return <ComposedComponent users={users} {...props} />;
    }
  };
  return AuthenticationCheck;
}
