import React from 'react';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-b from-gray-900 to-gray-800 py-12 border-t border-yellow-500/50">
      <div className="max-w-6xl mx-auto px-6">
        {/* Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo/Brand Section */}
          <div className="col-span-1">
            <h3 className="text-white text-3xl font-serif font-bold mb-4">Linktree</h3>
            <p className="text-white text-sm">Connect all your links in one place with Linktree..</p>
          </div>

          {/* Navigation Links - Company */}
          <div className="col-span-1">
            <h4 className="text-2xl font-semibold text-white mb-4">Company</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="text-slate-300 text-md hover:text-yellow-500 transition-colors duration-300">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/careers" className="text-slate-300 text-md hover:text-yellow-500 transition-colors duration-300">
                  Careers
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-slate-300 text-md hover:text-yellow-500 transition-colors duration-300">
                  Blog
                </Link>
              </li>
            </ul>
          </div>

          {/* Navigation Links - Support */}
          <div className="col-span-1">
            <h4 className="text-2xl font-semibold text-white mb-4">Support</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/help" className="text-slate-300 text-md hover:text-yellow-500 transition-colors duration-300">
                  Help Center
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-slate-300 text-md hover:text-yellow-500 transition-colors duration-300">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link href="/faq" className="text-slate-300 text-md hover:text-yellow-500 transition-colors duration-300">
                  FAQ
                </Link>
              </li>
            </ul>
          </div>

          {/* Newsletter Signup */}
          <div className="col-span-1">
            <h4 className="text-xl font-semibold text-slate-200 mb-4">Stay Connected</h4>
            <p className="text-sm text-slate-400 mb-4">Subscribe to our newsletter for exclusive updates.</p>
            <div className="flex gap-2">
              <input
                type="email"
                placeholder="Your email"
                className="w-full p-3 border border-gray-300 rounded-md text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-yellow-500"
              />
              <button className="bg-yellow-400 text-black px-4 py-2 rounded-md hover:bg-yellow-600 transition-colors duration-300">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="w-full h-1 bg-yellow-500/80 rounded-full my-8"></div>

        {/* Social Media Icons & Copyright */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          {/* Social Media Icons */}
          <div className="flex gap-4">
            {/* Twitter Icon */}
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
              <div className="w-10 h-10 flex items-center justify-center rounded-full bg-slate-400 hover:bg-yellow-500/70 transition-all duration-300">
                <svg className="w-5 h-5 text-black hover:text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z" />
                </svg>
              </div>
            </a>
            {/* Instagram Icon */}
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
              <div className="w-10 h-10 flex items-center justify-center rounded-full bg-slate-400 hover:bg-yellow-500/70 transition-all duration-300">
                <svg className="w-5 h-5 text-black hover:text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.366.062 2.633.326 3.608 1.301.975.975 1.24 2.242 1.301 3.608.058 1.266.07 1.646.07 4.85s-.012 3.584-.07 4.85c-.062 1.366-.326 2.633-1.301 3.608-.975.975-2.242 1.24-3.608 1.301-1.266.058-1.646.07-4.85.07s-3.584-.012-4.85-.07c-1.366-.062-2.633-.326-3.608-1.301-.975-.975-1.24-2.242-1.301-3.608-.058-1.266-.07-1.646-.07-4.85s.012-3.584.07-4.85c.062-1.366.326-2.633 1.301-3.608.975-.975 2.242-1.24 3.608-1.301 1.266-.058 1.646-.07 4.85-.07M12 0C8.741 0 8.332.014 7.052.072 5.771.13 4.407.396 3.392 1.411 2.378 2.426 2.112 3.79 2.054 5.071 1.996 6.351 1.982 6.76 1.982 12s.014 5.649.072 6.929c.058 1.281.324 2.645 1.339 3.66 1.015 1.015 2.379 1.281 3.66 1.339 1.28.058 1.689.072 6.929.072s5.649-.014 6.929-.072c1.281-.058 2.645-.324 3.66-1.339 1.015-1.015 1.281-2.379 1.339-3.66.058-1.28.072-1.689.072-6.929s-.014-5.649-.072-6.929c-.058-1.281-.324-2.645-1.339-3.66C21.622.396 20.258.13 18.977.072 17.697.014 17.288 0 12 0z" />
                  <path d="M12 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zm0 10.162a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 11-2.88 0 1.44 1.44 0 012.88 0z" />
                </svg>
              </div>
            </a>
            {/* LinkedIn Icon */}
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
              <div className="w-10 h-10 flex items-center justify-center rounded-full bg-slate-400 hover:bg-yellow-500/70 transition-all duration-300">
                <svg className="w-5 h-5 text-black hover:text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 110-4.124 2.062 2.062 0 010 4.124zm1.777 13.019H3.558V9h3.556v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </div>
            </a>
          </div>

          {/* Copyright Notice */}
          <div className="text-center">
            <p className="text-sm text-slate-500">© 2025 Linktree. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;