import { useState } from 'react'
import './App.css'

function App() {
  const contactEmail = "piyushtiwary4141@gmail.com";

  const [submissionStatus, setSubmissionStatus] = useState('idle')
  const [submissionMessage, setSubmissionMessage] = useState('')

  const handleInquirySubmit = async (event) => {
    event.preventDefault()

    const form = event.currentTarget

    setSubmissionStatus('submitting')
    setSubmissionMessage('')

    try {
      const response = await fetch(
        'https://formspree.io/f/xljjjdak',
        {
          method: 'POST',
          body: new FormData(form),
          headers: {
            Accept: 'application/json',
          },
        }
      )

      const result = await response.json().catch(() => ({}))

      if (!response.ok) {
        const errors = Array.isArray(result.errors)
          ? result.errors
              .map((error) => error.message)
              .filter(Boolean)
              .join(' ')
          : ''

        throw new Error(
          errors || 'Your inquiry could not be sent. Please try again.'
        )
      }

      setSubmissionStatus('success')
      setSubmissionMessage(
        'Thank you! Your inquiry has been submitted successfully.'
      )

      form.reset()
    } catch (error) {
      setSubmissionStatus('error')
      setSubmissionMessage(
        error instanceof Error
          ? error.message
          : 'Something went wrong. Please try again.'
      )
    }
  }


  return (
    <div className="website">
      {/* Navigation bar */}
      <header className="site-header">

      <a className="brand" href="#home" aria-label="PIYVIAN Technologies home">
        <img
          src="/brand/piyvian-logo-dark.svg"
          alt="PIYVIAN TECHNOLOGIES — Engineering What's Next."
          className="brand-logo-image"
        />
      </a>


        <nav className="site-nav">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#services">Services</a>
          <a href="#contact">Contact</a>
        </nav>

        <a
          className="header-cta"
          href={`mailto:${contactEmail}?subject=Project%20Inquiry`}
        >
          Let's Talk
        </a>
      </header>

      {/* Main hero section */}
      <main>
        <section className="hero-section" id="home">
          <p className="eyebrow">AI · SOFTWARE · AUTOMATION</p>

          <h1>Engineering What's Next.</h1>

          <p className="hero-description">
            We build modern websites, AI-powered solutions, and intelligent
            automation to help businesses move forward.
          </p>

          <div className="hero-actions">
            <a
              className="button button-primary"
              href={`mailto:${contactEmail}?subject=Project%20Inquiry`}
            >
              Start a Project
            </a>

            <a className="button button-secondary" href="#services">
              Explore Services
            </a>
          </div>
        </section>

        {/* About section */}
        <section className="about-section" id="about">
          <div className="about-intro">
            <p className="eyebrow">WHY PIYVIAN</p>

            <h2>Technology should move your business forward.</h2>

            <p>
              We combine thoughtful engineering with practical problem-solving
              to build digital experiences and automation that address real
              business needs.
            </p>
          </div>

          <div className="about-grid">
            <article>
              <h3>Built around your goals</h3>
              <p>
                Solutions shaped around your requirements, priorities, and
                users.
              </p>
            </article>

            <article>
              <h3>Practical innovation</h3>
              <p>
                Websites, AI tools, and automation designed to solve meaningful
                problems.
              </p>
            </article>

            <article>
              <h3>Thoughtful engineering</h3>
              <p>
                A focus on usability, maintainability, and reliable digital
                experiences.
              </p>
            </article>
          </div>
        </section>

        {/* Services section */}
        <section className="services-section" id="services">
          <p className="eyebrow">WHAT WE DO</p>

          <h2>Technology built around your goals.</h2>

          <div className="service-list">
            <article>
              <p className="service-index">01 / WEB DEVELOPMENT</p>
              <h3>Website Development</h3>
              <p>
                Modern, responsive websites that help your business establish
                its digital presence and connect with customers.
              </p>
              <a className="service-link" href="#contact">
                Discuss a website →
              </a>
            </article>

            <article>
              <p className="service-index">02 / ARTIFICIAL INTELLIGENCE</p>
              <h3>AI Tools & Agents</h3>
              <p>
                AI-powered tools and intelligent agents that support business
                workflows and help teams work more efficiently.
              </p>
              <a className="service-link" href="#contact">
                Explore AI solutions →
              </a>
            </article>

            <article>
              <p className="service-index">03 / AUTOMATION</p>
              <h3>Business Automation</h3>
              <p>
                Streamline repetitive tasks and connect workflows to reduce
                manual effort in everyday operations.
              </p>
              <a className="service-link" href="#contact">
                Automate a workflow →
              </a>
            </article>
          </div>
        </section>

        {/* Contact section */}
        <section className="contact-section" id="contact">
          <div className="contact-layout">
            <div className="contact-copy">
              <p className="eyebrow">LET'S COLLABORATE</p>

              <h2>Have a project in mind?</h2>

              <p>
                Tell us about your idea, your goals, and the challenges you're
                trying to solve. Let's explore how PIYVIAN can help.
              </p>
            </div>

            <form className="contact-form" onSubmit={handleInquirySubmit}>
              <div className="form-row">
                <label htmlFor="client-name">Your name</label>
                <input
                  id="client-name"
                  name="name"
                  type="text"
                  placeholder="Enter your name"
                  required
                />
              </div>

              <div className="form-row">
                <label htmlFor="client-email">Email address</label>
                <input
                  id="client-email"
                  name="email"
                  type="email"
                  placeholder="you@example.com"
                  required
                />
              </div>

              <div className="form-row">
                <label htmlFor="project-service">What do you need?</label>

                <select
                  id="project-service"
                  name="service"
                  defaultValue=""
                  required
                >
                  <option value="" disabled>
                    Select a service
                  </option>
                  <option value="website">Website Development</option>
                  <option value="ai">AI Tools & Agents</option>
                  <option value="automation">Business Automation</option>
                  <option value="other">Something else</option>
                </select>
              </div>

              <div className="form-row">
                <label htmlFor="project-message">
                  Tell us about your project
                </label>

                <textarea
                  id="project-message"
                  name="message"
                  rows="5"
                  placeholder="What would you like to build?"
                  required
                />
              </div>


              <button
                className="button button-primary"
                type="submit"
                disabled={submissionStatus === 'submitting'}
              >
                {submissionStatus === 'submitting'
                  ? 'Sending...'
                  : 'Send Inquiry →'}
              </button>

              {submissionMessage && (
                <p
                  className={`form-feedback ${submissionStatus}`}
                  role="status"
                  aria-live="polite"
                >
                  {submissionMessage}
                </p>
              )}


              <p className="form-note">
                Share a few details so we can understand your needs.
              </p>
            </form>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="footer-main">
          {/* Company information */}
          <div className="footer-brand">

          <a className="brand" href="#home" aria-label="PIYVIAN Technologies home">
            <img
              src="/brand/piyvian-logo-dark.svg"
              alt="PIYVIAN TECHNOLOGIES — Engineering What's Next."
              className="brand-logo-image"
            />
          </a>


            <p>
              Engineering What's Next. We build websites, AI-powered solutions,
              and automation for real business needs.
            </p>
          </div>

          {/* Quick navigation */}
          <div className="footer-column">
            <h3>Explore</h3>
            <a href="#home">Home</a>
            <a href="#about">About Us</a>
            <a href="#services">Our Services</a>
            <a href="#contact">Contact</a>
          </div>

          {/* Services navigation */}
          <div className="footer-column">
            <h3>Our Services</h3>
            <a href="#services">Website Development</a>
            <a href="#services">AI Tools & Agents</a>
            <a href="#services">Business Automation</a>
          </div>

          {/* Contact information */}
          <div className="footer-column">
            <h3>Have a project?</h3>
            <p>Let's discuss how we can help.</p>

            <a href="mailto:hello@piyvian.com?subject=Project%20Inquiry">
              hello@piyvian.com
            </a>

            <a className="footer-contact-link" href="#contact">
              Start a Project →
            </a>
          </div>
        </div>

        <div className="footer-bottom">
          <p>
            © {new Date().getFullYear()} PIYVIAN TECHNOLOGIES. All rights
            reserved.
          </p>

          <a href="#home">Back to top ↑</a>
        </div>
      </footer>
    </div>
  );
}

export default App;
