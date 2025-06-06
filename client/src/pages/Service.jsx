export function Service() {
  return (
    <div className="services-page-container">
      <header className="services-header">
        <h1>Our Services</h1>
        <p className="text-muted">Explore what we can do to help your business grow.</p>
      </header>

      <section className="services-list section-container">
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
          <div className="service-card">
            <h4>Performance Optimization</h4>
            <p>Speed up your website and improve user retention with expert optimization.</p>
          </div>
          <div className="service-card">
            <h4>Maintenance & Support</h4>
            <p>Reliable ongoing support and maintenance to keep your site fresh and secure.</p>
          </div>
          <div className="service-card">
            <h4>App Development</h4>
            <p>Custom mobile and desktop app development using cutting-edge technologies.</p>
          </div>
          <div className="service-card">
            <h4>Machine Learning</h4>
            <p>Leverage AI and ML models to build intelligent, data-driven applications.</p>
            </div>
        </div>
      </section>
    </div>
  );
}
