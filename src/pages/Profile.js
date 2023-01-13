import { useEffect } from "react"

export default function Profile() {

  useEffect(() => {
    document.title = 'Profile'
  }, [])

  return (
    <section className="section">
      <h1 className="section-title">Kenapa Pake React❓</h1>
      <p className="section-description">emang apa bedanya sama web lu yang sebelumnya sob?</p>
      <p className="section-description">bedanya adalah tiap element dibungkus didalam komponent, jadi lu ngubuat web kaya main lego.
        dan ketika berpindah ke halaman lain webnya nga payah reload lagi jadi langsung ada aja gitu halamannya tanpa minta requests ke server lagi🙆🏻‍♂️
      </p>
    </section>
  )
}