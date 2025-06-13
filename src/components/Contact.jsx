import { useContact } from "./ContactProvider"
import { useState } from "react"
import { toast } from "react-toastify"
import "./Contact.css";
import Button from "./Button";

export function Contact() {
    const { tab, handleContact } = useContact();
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
            method: 'POST',
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
            });
        }
    }

        return <section className="center-contact">
            <section className={tab ? "contact slideUp" : "contact slideDown"}>
                <div className="close">
                    <button className="btn contact-btn" onClick={handleContact}>close</button>
                </div>
                <div className="contact-head">
                    <h1>
                        Partner with us and give your brand the competitive edge.
                    </h1><br />
                    <p>Get in touch to find out how we can help.</p>
                </div>
                <div className="submition">
                    <form onSubmit={handleSubmit}>
                        <input type="email" placeholder="Your email" name="email" id="email" value={user.email} onChange={handleInput} autoComplete="off" />
                        <textarea name="message" rows={8} id="message" placeholder="Your message" value={user.message} onChange={handleInput} autoComplete="off"></textarea>
                        <Button text="submit"/>
                    </form>
                </div>
                <div className="contact-socials">
                    <a className="foot-link" href="https://www.instagram.com/code_cosmos_tech/" target="_blank">Instagram</a>
                    <a className="foot-link" href="https://x.com/codecosmostech" target="_blank">Twitter</a>
                </div>
            </section>
        </section>
    }