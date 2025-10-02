import logo from "../assets/images/logo_original.png"

const Header = () => {
    return (
        <nav className="flex items-center">
            <img src={logo} alt="Met Club" className="h-26 w-26" />
            <div className="text-xl font-semibold">
                <h2 className="text-2xl">Met Club</h2>
                <h2>আবহাওয়া চক্র</h2>
            </div>
        </nav>
    );
};

export default Header;