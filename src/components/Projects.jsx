const Projects = () => {
    return (
        <section id="projects" className="section">
            <div className="container">
                <h2 className="section-title">Featured Projects</h2>

                <div className="projects-grid">
                    {/* Project 1 */}
                    <article className="project-card">
                        <div className="project-content">
                            <h3>AirPods Diagnostic System</h3>
                            <p>
                                A cloud-enabled diagnostic application designed to test Apple
                                AirPods at scale. Processes 10,000+ device tests per month and
                                reduced manual testing effort by 40% across partner service
                                centers.
                            </p>

                            <div className="tech-stack">
                                <span>Java</span>
                                <span>Spring Boot</span>
                                <span>JavaFX</span>
                                <span>AWS</span>
                            </div>

                            <div className="project-links">
                                <a href="#" target="_blank" rel="noopener noreferrer">
                                    <i className="fab fa-github"></i> Private Repo
                                </a>
                            </div>
                        </div>
                    </article>

                    {/* Project 2 */}
                    <article className="project-card">
                        <div className="project-content">
                            <h3>MoboCheck – Device Diagnostics Platform</h3>
                            <p>
                                Enterprise-grade desktop application for diagnosing Apple and
                                Android devices. Features real-time testing, secure data
                                erasure, label printing, and cloud synchronization for device
                                history tracking.
                            </p>

                            <div className="tech-stack">
                                <span>Java</span>
                                <span>Spring Boot</span>
                                <span>JavaFX</span>
                                <span>MQTT</span>
                                <span>Event Listeners</span>
                            </div>

                            <div className="project-links">
                                <a href="#" target="_blank" rel="noopener noreferrer">
                                    <i className="fab fa-github"></i> Enterprise Project
                                </a>
                            </div>
                        </div>
                    </article>

                    {/* Project 3 */}
                    <article className="project-card">
                        <div className="project-content">
                            <h3>Omni Channel Engine (E-commerce)</h3>
                            <p>
                                A unified e-commerce platform integrating orders, inventory, and
                                courier services across multiple brands. Enabled real-time
                                inventory tracking and automated order fulfillment workflows.
                            </p>

                            <div className="tech-stack">
                                <span>Spring Boot</span>
                                <span>REST APIs</span>
                                <span>Kafka</span>
                                <span>MySQL</span>
                            </div>

                            <div className="project-links">
                                <a href="#" target="_blank" rel="noopener noreferrer">
                                    <i className="fab fa-github"></i> Code
                                </a>
                            </div>
                        </div>
                    </article>

                    {/* Project 4 */}
                    <article className="project-card">
                        <div className="project-content">
                            <h3>Financial Reporting System</h3>
                            <p>
                                Java-based financial reporting solution generating FMR reports
                                directly from Oracle databases. Streamlined monthly fund
                                reporting processes for asset management operations.
                            </p>

                            <div className="tech-stack">
                                <span>Java</span>
                                <span>Oracle</span>
                                <span>SQL</span>
                                <span>Reporting</span>
                            </div>

                            <div className="project-links">
                                <a href="#" target="_blank" rel="noopener noreferrer">
                                    <i className="fas fa-lock"></i> Internal System
                                </a>
                            </div>
                        </div>
                    </article>
                </div>
            </div>
        </section>
    );
};

export default Projects;
