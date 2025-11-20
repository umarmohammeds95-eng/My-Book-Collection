import React from 'react'

export default function BookCard({ title, author, genre, year, description }) {
  return (
    <article className="card">
      <div className="card-header">
        <h2 className="card-title">{title}</h2>
        <span className="card-year">{year}</span>
      </div>
      <p className="card-author"><em>by {author}</em></p>
      <p className="card-genre">Genre: <strong>{genre}</strong></p>
      <p className="card-desc">{description}</p>
    </article>
  )
}
