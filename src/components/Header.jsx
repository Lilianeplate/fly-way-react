import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlane, faSearch, faUsers, faComment } from '@fortawesome/free-solid-svg-icons';
import styles from './Header.module.css';  // Importação do CSS Module

function Header() {
  return (
    <div className={styles.headerContainer}>
      <div className={styles.headerContent}>
        <img src="src/assets/FlyWay-p.png" alt="Logo" />
        
        {/* Container do Input e Ícone */}
        <div className={styles.searchContainer}>
          <FontAwesomeIcon icon={faSearch} className={styles.searchIcon} />
          <input type="search" placeholder="O que você procura?" className={styles.searchInput} />
        </div>

        <button>
        <FontAwesomeIcon icon={faUsers} />
          Quem somos
        </button>
        <button>
        <FontAwesomeIcon icon={faPlane}/>
          Objetivos
        </button>
        <button>
          <FontAwesomeIcon icon={faComment} />
          Fale com a gente
        </button>
      </div>
    </div>
  );
}

export default Header;
