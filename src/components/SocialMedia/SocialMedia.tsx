import React from 'react'
import { Facebook, Twitter, Instagram } from 'lucide-react'

const SocialMedia: React.FC = () => {
  return (
    <div className="social-media">
      <a
        href="https://facebook.com"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Facebook"
      >
        <Facebook size={24} />
      </a>
      <a
        href="https://twitter.com"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Twitter"
      >
        <Twitter size={24} />
      </a>
      <a
        href="https://instagram.com"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Instagram"
      >
        <Instagram size={24} />
      </a>
    </div>
  )
}

export default SocialMedia
