import { useEffect } from "react"

export default function Contact() {

  useEffect(() => {
    document.title = "Contact"
  }, [])
  return (
    <section className="section">
      <h1 className="section-title">🤙Contact</h1>
      <p className="section-description">ni kontak gua</p>
      <ul className="section-list">
        <li > <a className="contact-url" href="https://www.instagram.com/allailqadrillah_/" target='_blank'>Instagram</a></li>
        <li> <a className="contact-url" href="https://github.com/allail-qadrillah" target='_blank'>Github</a></li>
        <li> <a className="contact-url" href="https://www.linkedin.com/in/m-al-lail-qadrillah-55035625b/" target='_blank'>Linkedin</a></li>
      </ul>
    </section>
  )
}