import NavbarLinks from "./NavbarLinks.jsx";

export default function Navbar() {

  return (
    <nav className="flex justify-between p-8 bg-slate-700 text-white">
      <span>Mon Blog</span>
      <ul className="flex gap-4">
        <NavbarLinks />
      </ul>
    </nav>
  )
}


