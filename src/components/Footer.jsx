import NavbarLinks from "./NavbarLinks.jsx";

export default function Footer() {

  return (
    <footer className="flex justify-around bg-slate-700 p-8 text-white">
      <span>My Blog</span>
      <ul>
        <NavbarLinks />
      </ul>
    </footer>
  )
}