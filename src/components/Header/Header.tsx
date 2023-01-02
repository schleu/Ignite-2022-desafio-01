import styles from './Header.module.css'
import LogoIcon from '../../assets/logo.svg'

const Header = () => {

    return (
        <div className={styles.header}>
            <img src={LogoIcon} />            
        </div>
    )
}

export default Header;