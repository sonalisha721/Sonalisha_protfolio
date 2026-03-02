const Navbar = ({ scrollToSection, refs }) => {
    return (
        <nav className="fixed top-0 w-full h-20 bg-[#111] flex gap-5 justify-center items-center z-[100]">
            <button
                className="text-white text-base hover:text-gray-300"
                onClick={() => scrollToSection(refs.homeRef)}
            >
                Home
            </button>

            <button
                className="text-white text-base hover:text-gray-300"
                onClick={() => scrollToSection(refs.aboutRef)}
            >
                About
            </button>

            <button
                className="text-white text-base hover:text-gray-300"
                onClick={() => scrollToSection(refs.projectsRef)}
            >
                Projects
            </button>

            <button
                className="text-white text-base hover:text-gray-300"
                onClick={() => scrollToSection(refs.contactRef)}
            >
                Contact
            </button>
        </nav>
    );
};

export default Navbar;
