import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"

export default function BlogDetail() {
  const [article, setArticles] = useState()
  const [loading, setLoading] = useState(true)
  const [notFound, setNotFound] = useState(false)
  const params = useParams()

  useEffect(() => {
    const getArticles = async () => {
      const requests = await fetch(`https://api.spaceflightnewsapi.net/v3/articles/${params.id}`)

      if (!requests.ok){
        setLoading(false)
        setNotFound(true)
      }

      const response = await requests.json()

      document.title = response.title
      setArticles(response)
      setLoading(false)
    }

    getArticles()
  }, [params])

  if (notFound){
    return <h1>Artikelnya ga ada</h1>
  }

  return (
    <section className="section">
    
      {loading ? <p>mengambil detail articlenya ...</p> :
        <article className="article">
          <h2 className="article-title">{article.title}</h2>
          <time className="article-time">{new Date(article.publishedAt).toLocaleDateString()}</time>
          <img className="article-image" src={article.imageUrl}/>
          <p className="article-summary">{article.summary}</p>
          <p>Source : {' '}  
            <a className="article-source" target={`_blank`} href={article.url}>{article.newsSite}</a>
          </p>
        </article>
      }

    </section>
  )
}