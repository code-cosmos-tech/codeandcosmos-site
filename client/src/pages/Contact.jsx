import { useState } from "react";
import { toast } from "react-toastify";

export function Contact() {
  const [user, setUser] = useState({
    email: "",
    message: ""
  });

  const handleInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setUser({
      ...user,
      [name]: value
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch("https://codeandcosmos-site.onrender.com/form/contact", {
      method: "POST",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(user)
    });
    const data = await response.json();
    if (response.ok) {
      setUser({ email: "", message: "" });
      toast.success(data.msg, {
        position: "bottom-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
    } else {
      toast.error(data.msg, {
        position: "bottom-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      })
    }
  }

  return <>
    <section id="contact" className="contact">
      <div className="section-container contact-section">
        <h3>Get in Touch</h3>
        <p className="text-muted">Reach out to us for custom projects, collaborations, or freelance work.</p>
        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <input type="email" name="email" placeholder="Your Email" value={user.email} onChange={handleInput} required autoComplete="off" />
          </div>
          <div className="form-group">
            <textarea name="message" rows="5" placeholder="Your Message" value={user.message} onChange={handleInput} required autoComplete="off"></textarea>
          </div>
          <button className="cta-btn">Send Message</button>
        </form>
      </div>
    </section>

  </>
}
