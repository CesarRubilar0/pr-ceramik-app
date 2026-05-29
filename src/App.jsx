import { useEffect, useState } from 'react'
import { pieces, reviews, events } from './data'

function App() {
  const [activeIndex, setActiveIndex] = useState(0)
  const activePiece = pieces[activeIndex]

  useEffect(() => {
    const interval = window.setInterval(() => {
      setActiveIndex((current) => (current + 1) % pieces.length)
    }, 7000)

    return () => window.clearInterval(interval)
  }, [])

  return (
    <main className="page-shell">
      <header className="hero-section">
        <div>
          <div className="hero-eyebrow">pr.ceramik</div>
          <h1 className="hero-title">Cerámica subrealista con sello propio, lista para vender</h1>
          <p className="hero-copy">
            Obras creadas para exposiciones, ferias y colecciones. Ella no hace personalizados: cada pieza es un hallazgo original del estudio.
          </p>
          <div className="hero-actions">
            <a
              className="button"
              href="https://www.instagram.com/pr.ceramik/?locale=uken1"
              target="_blank"
              rel="noreferrer"
            >
              Mensaje por Instagram
            </a>
            <a
              className="button-alt"
              href="https://www.instagram.com/pr.ceramik/?locale=uken1"
              target="_blank"
              rel="noreferrer"
            >
              Ver Instagram
            </a>
          </div>
        </div>

        <div className="hero-card">
          <div className="hero-art">
            <img src={activePiece.image} alt={activePiece.title} />
          </div>
        </div>
      </header>

      <section className="carousel-card">
        <div className="section-title">
          <span />
          <h2>Piezas destacadas</h2>
        </div>
        <div className="carousel-preview">
          <img src={activePiece.image} alt={activePiece.title} />
        </div>
        <div className="carousel-meta">
          <h3>{activePiece.title}</h3>
          <p>{activePiece.subtitle}</p>
          <p>{activePiece.description}</p>
        </div>
        <div className="carousel-controls">
          {pieces.map((piece, index) => (
            <button
              type="button"
              className={index === activeIndex ? 'control-button active' : 'control-button'}
              key={piece.id}
              onClick={() => setActiveIndex(index)}
            >
              {piece.title}
            </button>
          ))}
        </div>
      </section>

      <section>
        <div className="section-title">
          <span />
          <h2>Galería</h2>
        </div>
        <div className="gallery-grid">
          {pieces.map((piece) => (
            <article className="gallery-card" key={piece.id}>
              <img src={piece.image} alt={piece.title} />
              <div className="gallery-caption">
                <h3>{piece.title}</h3>
                <p>{piece.subtitle}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="card-grid">
        <article className="info-card">
          <div className="section-title">
            <span />
            <h2>Por qué pr.ceramik</h2>
          </div>
          <p className="info-copy">
            Todo se exhibe tal como se crea: piezas listas para venta, con estética subrealista y acabados cuidadosos. Ideal para ferias, espacios creativos y coleccionistas.
          </p>
        </article>
      </section>

      <section>
        <div className="section-title">
          <span />
          <h2>Reseñas</h2>
        </div>
        <div className="reviews-grid">
          {reviews.map((review) => (
            <article className="review-card" key={review.name}>
              <p className="review-copy">“{review.note}”</p>
              <div className="review-author">
                <span>{review.name}</span>
                <span>{review.role}</span>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section>
        <div className="section-title">
          <span />
          <h2>Próximos eventos</h2>
        </div>
        <div className="events-grid">
          {events.map((event) => (
            <article className="event-card" key={event.title}>
              <h3 className="event-title">{event.title}</h3>
              <div className="event-meta">
                <span>{event.date}</span>
                <span>{event.location}</span>
              </div>
              <p className="event-copy">{event.summary}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="contact-panel">
        <div>
          <div className="section-title">
            <span />
            <h2>Contacto</h2>
          </div>
          <p className="contacts-note">
            La vía principal es Instagram. También puede agregarse WhatsApp si se desea un canal directo adicional.
          </p>
        </div>
        <div className="contact-buttons">
          <a className="button" href="https://www.instagram.com/pr.ceramik/?locale=uken1" target="_blank" rel="noreferrer">
            Instagram
          </a>
          <a className="button-alt" href="https://www.instagram.com/pr.ceramik/?locale=uken1" target="_blank" rel="noreferrer">
            Información y eventos
          </a>
        </div>
      </section>

      <footer>
        © 2026 pr.ceramik • Piezas de cerámica subrealista para venta y ferias.
      </footer>
    </main>
  )
}

export default App
