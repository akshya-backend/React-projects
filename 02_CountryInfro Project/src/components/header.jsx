
import { useTheme } from '../hooks/useTheme';

export default function Header() {
  const [isDarkmode , setMode]= useTheme();  

  return (
  <header className={`header-container ${isDarkmode ? 'dark' : ' '}`}>
      <div className="header-content">
        <h2 className="title">Where in the world?</h2>
        <p className='isDarkmode-changer' onClick={() => {
          document.body.classList.toggle('dark');
          setMode(!isDarkmode);
          localStorage.setItem('isDarkMode', !isDarkmode);
        }}><i className={`fa-regular fa-${isDarkmode ? 'sun' : 'moon'}`}></i>&nbsp;&nbsp;{isDarkmode ? 'Light Mode' : 'Dark Mode'}</p>
      </div>
    </header>

  )
}
