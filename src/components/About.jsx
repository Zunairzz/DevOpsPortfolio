

const About = () => {
    return (
        <section id="about" className="section about-section">
            <div className="ab-container">
                <div className="about-wrapper">
                    {/* Left: Content */}
                    <div className="about-content">
                        <div className="section-header-left">
                            <h2 className="section-title-left">About Me</h2>
                            <div className="title-bar"></div>
                        </div>

                        <p className="about-text-lg">
                            I am a <span className="highlight">Full Stack Developer</span> with a strong focus on backend engineering
                            and system architecture. I build scalable, secure, and reliable web applications.
                        </p>

                        <p className="about-text">
                            My experience includes building enterprise-level diagnostic systems, e-commerce platforms, and
                            financial reporting tools. I enjoy working on scalable systems, clean APIs, and event-driven
                            architectures while ensuring performance, security, and maintainability.
                        </p>

                        <div className="about-stats">
                            <div className="stat-item">
                                <span className="stat-number">3+</span>
                                <span className="stat-label">Years Experience</span>
                            </div>
                            <div className="stat-item">
                                <span className="stat-number">15+</span>
                                <span className="stat-label">Projects Completed</span>
                            </div>
                            <div className="stat-item">
                                <span className="stat-number">5+</span>
                                <span className="stat-label">Happy Clients</span>
                            </div>
                        </div>

                        <div className="about-cta">
                            <a href="#contact" className="btn btn-primary">Let's Talk</a>
                            <a href="#projects" className="btn btn-outline">View Projects</a>
                        </div>
                    </div>

                    {/* Right: Terminal Visual */}
                    <div className="about-visual">
                        <div className="terminal-window">
                            <div className="terminal-header">
                                <div className="terminal-dot red"></div>
                                <div className="terminal-dot yellow"></div>
                                <div className="terminal-dot green"></div>
                                <span className="terminal-title">developer@portfolio:~/about</span>
                            </div>
                            <div className="terminal-body">
                                <div className="code-line">
                                    <span className="prompt">$</span> <span className="cmd">cat</span> <span className="arg">skills.json</span>
                                </div>
                                <div className="code-block">
                                    <span className="bracket">{`{`}</span>
                                    <div className="indent">
                                        <span className="key">"role"</span>: <span className="string">"Full Stack Engineer"</span>,<br />
                                        <span className="key">"focus"</span>: <span className="string">"Scalability & Performance"</span>,<br />
                                        <span className="key">"stack"</span>: <span className="bracket">[</span>
                                        <div className="indent-2">
                                            <span className="string">"React"</span>, <span className="string">"Node.js"</span>,<br />
                                            <span className="string">"Docker"</span>, <span className="string">"AWS"</span>
                                        </div>
                                        <span className="bracket">]</span>,<br />
                                        <span className="key">"passion"</span>: <span className="string">"Building cool stuff"</span>
                                    </div>
                                    <span className="bracket">{`}`}</span>
                                </div>
                                <div className="code-line typing">
                                    <span className="prompt">$</span> <span className="cursor">_</span>
                                </div>
                            </div>
                        </div>
                        <div className="visual-bg"></div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
