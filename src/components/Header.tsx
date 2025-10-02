import logo from "../assets/images/logo_original.png"

const Header = () => {
    return (
        <nav className="flex items-center">
            <img src={logo} alt="Met Club" className="h-96 w-96" />
        </nav>
    );
};

export default Header;