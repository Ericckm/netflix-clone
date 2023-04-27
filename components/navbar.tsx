const Navbar = () => {
  return (
    <nav className="fixed z-40 w-full ">
      <div className="flex flex-row items-center px-4 py-6 transition duration-500 md:px-16 bg-zinc-900 bg-opacity-90">
        <img src="/images/logo.png" alt="Logo" />
      </div>
    </nav>
  );
};

export default Navbar;
