import { useEffect, useState } from "react"
import { Link } from "react-router-dom"

export default function Blog() {
  const [articles, setArticles] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    document.title = 'Blog'
    const getArticles = async () => {
      const requests = await fetch('https://api.spaceflightnewsapi.net/v3/articles')
      const response = await requests.json()

      setArticles(response)
      setLoading(false)
    }
    getArticles()
  }, [])

  return (
    <section className="section">
      <h1 className="section-title">🚀Blog Articles</h1>
      <p className="section-description">ini ada berita mengenai antariksa</p>

      {loading ? <i>mengambil articles ...</i> :
        <div className="articles">
          {articles.map(article => {

            return (
              <article key={article.id} className="article">
                <h3 className="article-title">
                  <Link to={`/blog/${article.id}`}>{article.title}</Link>
                </h3>
                <time className="article-time">{new Date(article.publishedAt).toLocaleDateString()}</time>
              </article>

            )
          })
          }
        </div>
      }

    </section>
  )
}