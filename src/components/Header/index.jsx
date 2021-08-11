import SearchInput from '../SearchInput';
import logo from '../../assets/logo.svg';
import './index.css';

const Header = ({ onSearch }) => (
    <header className="Header">
        <div className="Header-container">
            <img src={logo} className="Header-logo" alt="logo" />
            <SearchInput onSearch={onSearch} />
        </div>
    </header>
);

export default Header;
