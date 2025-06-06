import { useNavigate } from "react-router";

export function Home() {
  const navigate = useNavigate();
  return (
    <div className="home-container">
      
      <section id="home" className="hero">
        <div className="hero-content">
          <h2>We Build Modern Web Solutions</h2>
          <p>Crafting responsive, secure and fast websites that leave a mark.</p>
          <button className="cta-btn" onClick={() => navigate("/service")}>Get Started</button>
        </div>
      </section>

      <section id="services" className="services">
        <div className="section-container">
          <h3>Our Services</h3>
          <div className="services-grid">
            <div className="service-card">
              <h4>Web Development</h4>
              <p>Frontend, Backend, and Full-stack solutions tailored to your needs.</p>
            </div>
            <div className="service-card">
              <h4>UI/UX Design</h4>
              <p>Creating beautiful, intuitive user interfaces that enhance user experience.</p>
            </div>
            <div className="service-card">
              <h4>E-commerce & SEO</h4>
              <p>We optimize your site for both sales and search engines.</p>
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="about">
        <div className="section-container">
          <h3>About Us</h3>
          <p>
            We are a team of passionate developers and designers building modern web solutions.
            With expertise in MERN stack, we empower your online presence to stand out.
          </p>
        </div>
      </section>

      <section id="contact" className="contact">
        <div className="section-container">
          <h3>Get in Touch</h3>
          <p>Reach out to us for custom projects, collaborations, or freelance work.</p>
          <button className="cta-btn" onClick={() => navigate("/contact")}>Contact Us</button>
        </div>
      </section>
    </div>
  );
}
