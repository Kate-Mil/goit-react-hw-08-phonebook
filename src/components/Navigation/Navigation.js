import { NavLink } from 'react-router-dom';
// import { useAuth } from 'hooks';

export const Navigation = () => {
  //   const { isLoggedIn } = useAuth();

  return (
    <nav>
      <ul>
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          {/* {isLoggedIn &&  */}
          <NavLink to="/contacts">Contacts</NavLink>
          {/* } */}
        </li>
      </ul>
    </nav>
  );
};
