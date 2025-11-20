import React from 'react'
import BookCard from './components/BookCard'

const books = [
  {
    title: 'To Kill a Mockingbird',
    author: 'Harper Lee',
    genre: 'Fiction',
    year: 1960,
    description: 'A powerful novel about racial injustice and moral growth in the American South.'
  },
  {
    title: 'Sapiens: A Brief History of Humankind',
    author: 'Yuval Noah Harari',
    genre: 'Non-Fiction',
    year: 2011,
    description: 'An exploration of how Homo sapiens became the dominant species and the forces that shaped human history.'
  },
  {
    title: 'The Hound of the Baskervilles',
    author: 'Arthur Conan Doyle',
    genre: 'Mystery',
    year: 1902,
    description: 'Sherlock Holmes investigates a supernatural hound on the foggy English moors.'
  },
  {
    title: '1984',
    author: 'George Orwell',
    genre: 'Fiction',
    year: 1949,
    description: 'A dystopian novel about surveillance, totalitarianism, and the erosion of truth.'
  },
  {
    title: 'The Immortal Life of Henrietta Lacks',
    author: 'Rebecca Skloot',
    genre: 'Non-Fiction',
    year: 2010,
    description: 'The story of Henrietta Lacks and the immortal cell line, and the ethical questions it raised.'
  }
]

function mostCommonGenre(list) {
  const counts = list.reduce((acc, b) => {
    acc[b.genre] = (acc[b.genre] || 0) + 1
    return acc
  }, {})
  let max = 0
  let genre = ''
  for (const g in counts) {
    if (counts[g] > max) {
      max = counts[g]
      genre = g
    }
  }
  return genre
}

export default function App() {
  const total = books.length
  const commonGenre = mostCommonGenre(books)
  const currentYear = new Date().getFullYear()

  return (
    <div className="container">
      <header className="header">
        <h1>My Book Collection</h1>
        <p className="subtitle">Books That Changed My Perspective</p>
      </header>

      <main>
        <section className="summary">
          <p><strong>Total books:</strong> {total}</p>
          <p><strong>Most common genre:</strong> {commonGenre}</p>
        </section>

        <section className="book-grid">
          {books.map((book, idx) => (
            <BookCard
              key={idx}
              title={book.title}
              author={book.author}
              genre={book.genre}
              year={book.year}
              description={book.description}
            />
          ))}
        </section>
      </main>

      <footer className="footer">
        <p>Created by: YOUR NAME HERE</p>
        <p>Contact: YOUR EMAIL HERE</p>
        <p>© {currentYear} Book Lover</p>
      </footer>
    </div>
  )
}
