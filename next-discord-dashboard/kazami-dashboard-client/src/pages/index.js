import styles from '../utils/styles/home.module.scss';
import { FaDiscord } from 'react-icons/fa';
import logo from '../static/images/kazami.png';

export default function Home() {

  const handleLogin = () => {
    window.location.href="http://localhost:3001/api/auth/discord";
  };
  return <div className="page aligned-center">

    <div className='container'>
      <a href='#' className='logo'>
        <img src={logo}></img>
      </a>  
    </div>



    <div>
      <button className={styles.button} onClick={handleLogin}>
        <FaDiscord size={35} color="#7289DA" />
        <span>Login with Discord</span>
      </button>
    </div>
  </div>
}