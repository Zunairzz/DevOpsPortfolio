const Contact = () => {
    return (
        <section id="contact" className="section">
            <div className="container">
                <div className="contact-wrapper">
                    {/* LEFT SIDE: INFO */}
                    <div className="contact-info">
                        <h3>Let’s Connect</h3>
                        <p>
                            Open to full-time roles, freelance projects, and long-term
                            collaborations. Feel free to reach out — I usually reply within 24
                            hours.
                        </p>

                        <div className="contact-details">
                            <a href="mailto:zunairsarwar1@gmail.com" className="contact-link">
                                <div className="icon-box-small">
                                    <i className="fas fa-envelope"></i>
                                </div>
                                <span>zunairsarwar1@gmail.com</span>
                            </a>

                            <a
                                href="https://linkedin.com/in/zunair-sarwar-401323221"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="contact-link"
                            >
                                <div className="icon-box-small">
                                    <i className="fab fa-linkedin"></i>
                                </div>
                                <span>LinkedIn Profile</span>
                            </a>

                            <a
                                href="https://github.com/Zunairzz"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="contact-link"
                            >
                                <div className="icon-box-small">
                                    <i className="fab fa-github"></i>
                                </div>
                                <span>GitHub Profile</span>
                            </a>
                        </div>
                    </div>

                    {/* RIGHT SIDE: FORM */}
                    <form
                        action="https://formspree.io/f/xpqqwlln"
                        method="POST"
                        className="contact-form"
                    >
                        <div className="form-group">
                            <label htmlFor="name">Name</label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                placeholder="Your Name"
                                required
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="email">Email</label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                placeholder="Your Email"
                                required
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="subject">Subject</label>
                            <input
                                type="text"
                                id="subject"
                                name="subject"
                                placeholder="Project / Opportunity"
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="message">Message</label>
                            <textarea
                                id="message"
                                name="message"
                                rows="5"
                                placeholder="Tell me about your project..."
                                required
                            ></textarea>
                        </div>

                        <button type="submit" className="btn btn-primary btn-block">
                            Send Message
                        </button>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default Contact;
