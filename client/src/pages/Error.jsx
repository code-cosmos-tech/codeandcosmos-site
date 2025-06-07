import { NavLink } from "react-router";

export function Error() {
  return (
    <div className="error-wrapper">
      <div className="glow-background" />
      <div className="error-container">
        <h1 className="error-404">404</h1>
        <h2 className="error-heading">This page drifted into a black hole.</h2>
        <p className="error-text">
          The cosmos is vast, but the page you're seeking doesn't seem to exist.
        </p>
        <NavLink to="/" className="home-link">Teleport Back Home</NavLink>
      </div>
    </div>
  );
}
