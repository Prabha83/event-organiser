import Link from "next/link";
import { useIsAuthenticated } from "../providers/AuthProvider";

export default function NavHeader() {
  const isAuthenticated = useIsAuthenticated();
  return (
    <nav className="navbar is-transparent no-shadow" role="navigation" aria-label="main navigation">
      <div className="navbar-brand">
        <a className="navbar-item" href="https://bulma.io">
          <img
            src="https://bulma.io/images/bulma-logo.png"
            alt="Bulma: Free, open source, and modern CSS framework based on Flexbox"
            width="112"
            height="28"
          />
        </a>

        <a role="button" className="navbar-burger" aria-label="menu" aria-expanded="false">
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>
      <div id="navbarBasicExample" className="navbar-menu">
        <div className="navbar-start">
          <Link href="/">
            <a className="navbar-item">Home</a>
          </Link>
          <Link href="/about">
            <a className="navbar-item">About</a>
          </Link>
          <Link href="/conferences">
            <a className="navbar-item">Conferences</a>
          </Link>
        </div>
        <div className="navbar-end">
          <div className="navbar-item">
            <div className="buttons">
              {isAuthenticated ? (
                <Link href="/users/signout">
                  <a className="button is-primary">
                    <strong>Logged in</strong>
                  </a>
                </Link>
              ) : (
                <>
                  <Link href="/users/signup">
                    <a className="button is-primary">
                      <strong>Sign up</strong>
                    </a>
                  </Link>
                  <Link href="/users/signin">
                    <a className="button is-light">Sign in</a>
                  </Link>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
