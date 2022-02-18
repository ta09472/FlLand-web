import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";
export default function NavBar() {
  const router = useRouter();
  return (
    <>
      <nav className="NavBar">
        <Link href="/">
          <a>
            <Image src="/logo.png" layout="fixed" height="80%" width="100%" />
          </a>
        </Link>
        <div className="menu">
          <Link href="/about">
            <a
              className="menu-item"
              style={{
                color: router.pathname === "/about" ? "#d63031" : "#636e72",
              }}
            >
              about
            </a>
          </Link>
          <Link href="/works">
            <a
              className="menu-item"
              style={{
                color: router.pathname === "/works" ? "#d63031" : "#636e72",
              }}
            >
              works
            </a>
          </Link>
          <Link href="/contact">
            <a
              className="menu-item"
              style={{
                color: router.pathname === "/contact" ? "#d63031" : "#636e72",
              }}
            >
              contact
            </a>
          </Link>
        </div>
      </nav>
      <style jsx>
        {`
          .NavBar {
            animation-duration: 2s;
            animation-name: slidein;
          }
          nav {
            display: flex;
            justify-content: space-between;
            margin-top: 2em;
            margin-bottom: 1em;
          }
          @keyframes slidein {
            from {
              opacity: 0;
              margin-top: 2em;
              width: 300%;
            }

            to {
              opacity: 1;
              margin-top: 2em;
              width: 100%;
            }
          }
          a {
            color: #636e72;
          }
          .menu {
            display: flex;
            justify-content: space-between;
            align-items: center;
          }
          .menu-item {
            margin-left: 5em;
            transition: 500ms;
          }
          .menu-item:hover {
            color: #d63031;
            transition: 500ms;
          }
        `}
      </style>
    </>
  );
}
