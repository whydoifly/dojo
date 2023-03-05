import { Link } from 'react-router-dom';
import { useLogout } from '../hooks/useLogout';
import { useAuthContext } from '../hooks/useAuthContext';

// styles
import './NavBar.css';
import Temple from '../assets/temple.svg';

export default function NavBar() {
  const { logout, isPending } = useLogout();
  const { user } = useAuthContext();

  return (
    <div className='navbar'>
      <ul>
        <li className='logo'>
          <img src={Temple} alt='dojo logo' />
          <span>The Dojo</span>
        </li>
        {!user && (
          <>
            <li>
              <Link to='/login'>Login</Link>
            </li>
            <li>
              <Link to='/signup'>Signup</Link>
            </li>
          </>
        )}

        {user && (
          <li>
            <button className='btn' onClick={logout} disabled={isPending}>
              {isPending ? 'Logging out...' : 'Logout'}
            </button>
          </li>
        )}
      </ul>
    </div>
  );
}
