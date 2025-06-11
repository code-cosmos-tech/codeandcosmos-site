import { useNavigate } from "react-router";

export function Error() {
  const navigate = useNavigate()
  return <>
    <section>
      <div className="error-hero">
        <h1 className="e404">404</h1>
        <div className="error-msg">
          <p>Sorry, this page does not exist.</p>
          <button className="btn contact-btn" onClick={() => navigate('/')}>Go home</button>
        </div>
      </div>
    </section>
  </>
}
