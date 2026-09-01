import React from 'react'

function Footer() {
  return (
    <>
      <footer className="footer sm:footer-horizontal bg-base-150 text-base-content p-10">
        <nav>
          <h6 className="footer-title">Services</h6>
          <a className="link link-hover">Branding</a>
        </nav>
        <nav>
          <h6 className="footer-title">Legal</h6>
          <a className="link link-hover">Terms of use</a>
        </nav>
      </footer>
    </>
  )
}
export default Footer
