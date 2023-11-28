import Link from "next/link";

const NavBar = () => {
  return (
    <div className="navbar">
      <span className="logo">Learning TypeScript</span>
      <div className="links">
        <Link href="/">Home</Link>
        <Link href="#">About</Link>
        <Link href="#">Contact</Link>
      </div>
    </div>
  );
};
export default NavBar;
