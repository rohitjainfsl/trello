import Logo from "../assets/trello-logo.gif";
function Header() {
  return (
    <>
      <header className="bg-[rgb(125,127,241)] text-white flex items-center justify-between px-4 py-2">
        <div className="flex-grow flex justify-center">
          <img src={Logo} alt="Trello Logo" className="w-16" />
        </div>
        <button className="ml-auto">About</button>
      </header>
    </>
  );
}

export default Header;
