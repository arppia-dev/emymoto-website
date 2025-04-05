import React, { useState } from 'react'

const Newsletter: React.FC = () => {
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (email) {
      // Simulate API call or handle subscription logic
      setSubmitted(true)
    }
  }

  return (
    <div className="newsletter">
      {submitted ? (
        <p>Thank you for subscribing to our newsletter!</p>
      ) : (
        <form onSubmit={handleSubmit}>
          <label htmlFor="email">Subscribe to our Newsletter:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            required
          />
          <button type="submit">Subscribe</button>
        </form>
      )}
    </div>
  )
}

export default Newsletter
