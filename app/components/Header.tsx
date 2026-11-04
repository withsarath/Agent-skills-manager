import Link from "next/link";

export default function Header() {
  return (
    <div className="navbar bg-base-100 shadow-sm">
      <Link href={"/"} className="btn btn-ghost text-xl">
        daisyUI
      </Link>
      <div className="flex-1"></div>
      <ul className="menu menu-horizontal p-0">
        <li>
          <Link href="/skills">Skills</Link>
        </li>
        <li>
          <Link href="/about">About</Link>
        </li>
        <li>
          <Link href="/register">Register</Link>
        </li>
        <li>
          <Link href="/login">Login</Link>
        </li>
      </ul>
    </div>
  );
}
