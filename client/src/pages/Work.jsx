export function Work() {
  return <>
    <section className="work">
      <div className="work-hero">
        <h1>Here's a glimpse into what we have built.</h1>
      </div>
      <div className="urbancartel">
        <a href="https://urbancartel.vercel.app" target="_blank" >
          <div className="img-wrapper">
            <img src="https://res.cloudinary.com/dcndyvcd7/image/upload/v1769864787/Screenshot_2025-07-03_155334_di14u7.png" alt="shows Urban Cartel. An e-commerce website" />
          </div>
        </a>
        <p><b>Urban Cartel </b>An E-commerce website helping browse over 6000 categories of books.</p>
      </div>
      <div className="adminpanel">
        <a href="https://ghostpanel.onrender.com/" target="_blank">
          <div className="img-wrapper">
            <img src="https://res.cloudinary.com/dcndyvcd7/image/upload/v1769864665/Screenshot_2025-06-17_155231_dqxd83.png" alt="shows Ghost Panel. An advanced admin panel" />
          </div>
        </a>
        <p><b>Ghost Panel </b>Custom-built admin dashboard with secure login, data visualization, and real-time control panels.</p>
      </div>
      <div className="adminpanel">
        <a href="https://agro-care-ai.vercel.app/" target="_blank">
          <div className="img-wrapper">
            <img src="https://res.cloudinary.com/dcndyvcd7/image/upload/v1769868056/Screenshot_2026-01-31_193018_m4mj97.png" alt="shows Agrocare AI. An AI for farmers" />
          </div>
        </a>
        <p><b>AgroCare AI </b>An AI that helps farmers in crop yeild prediction and helps recommed irrigation schedule, fertilizer utilization, and pesticide usage</p>
      </div>
      <div className="agrocare-ai-wrapper">
        <iframe className="agrocare-ai" src="https://www.youtube.com/embed/_FPLEWNdONk" frameborder="0"></iframe>
      </div>
    </section>
  </>
}