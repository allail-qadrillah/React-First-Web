import { useEffect } from "react"

export default function Home() {

  useEffect(() => {
    document.title = 'Home'
  }, [])

  return (
    <section className="section">
      <h1 className="section-title">🏡Home</h1>
      <p className="section-description">ini adalah website pertama yang gua buat pake <a href="https://reactjs.org/" target='_blank'>React.js</a> gua belajar buatnya pas liburan ketika masi semester 5 yang kumulai dari tanggal 10 Desember 2022 sampe 10 Januari 2023. wuahaha lama bat yaak, lama karena suka nunda - nunda aja sih hahaa 💀</p>
      <p className="section-description">jadi di web ini gua cman nampilin berita terkini tentang antariksa aja sih, simple kan?
        tapi ada banyak hal yang udah gua pelajari mengenai Library JavaScript React.js ni kaya
        <ul className="section-list">
          <li> Fundamental JSX dan Babel</li>
          <li> Event Handler</li>
          <li> React State</li>
          <li> React useEffect</li>
          <li> Fetching Data</li>
          <li> Memulai React dengan CRA</li>
          <li> React Router</li>
          <li> Use Params</li>
          <li> Deploy ke server sehingga lu bisa liat web ini.</li>
        </ul>
      </p>
      <p className="section-description">semua yang udah gua pelajarin gua catat di <a href="https://alkaline-shake-acf.notion.site/React-js-8ca4cae2b512420985fc9e6e4ba40edf" target='_blank'>Notion</a> ya walaupun yang bisa paham cman gua sendiri aja si wkwk😶‍🌫️.</p>
    </section>
  )
}