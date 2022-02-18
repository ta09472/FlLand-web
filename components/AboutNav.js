import Link from "next/link";
import { useRouter } from "next/router";
export default function AboutNav() {
  const router = useRouter();
  console.log(router);
  return (
    <>
      <nav className="NavBar">
        <Link href="/about">
          <a
            style={{
              color: router.pathname === "/about" ? "#d63031" : "#636e72",
            }}
            className="menu-item"
          >
            history
          </a>
        </Link>
        <div className="menu">
          <Link href="/about/team">
            <a
              className="menu-item"
              style={{
                color:
                  router.pathname === "/about/team" ? "#d63031" : "#636e72",
              }}
            >
              team
            </a>
          </Link>
          <Link href="/about/certification">
            <a
              className="menu-item"
              style={{
                color:
                  router.pathname === "/about/certification"
                    ? "#d63031"
                    : "#636e72",
              }}
            >
              certification
            </a>
          </Link>
        </div>
      </nav>
      <style jsx>
        {`
          nav {
            display: flex;
            justify-content: center;
            margin-top: 2em;
            padding-bottom: 1em;
            border-bottom: 1px solid;
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
