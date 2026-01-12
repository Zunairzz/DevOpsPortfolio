const Services = () => {
    return (
        <section id="services" className="section">
            <div className="container">
                <h2 className="section-title">What I Do</h2>
                <div className="services-grid">
                    <div className="service-card">
                        <div className="icon-box">
                            <i className="fas fa-server"></i>
                        </div>
                        <h3>Backend Development</h3>
                        <p>
                            Designing secure, scalable backend systems using Java Spring Boot,
                            REST APIs, and microservices architecture.
                        </p>
                    </div>

                    <div className="service-card">
                        <div className="icon-box">
                            <i className="fas fa-laptop-code"></i>
                        </div>
                        <h3>Full Stack Applications</h3>
                        <p>
                            Developing complete web applications using React.js on the
                            frontend and Spring Boot or Node.js on the backend.
                        </p>
                    </div>

                    <div className="service-card">
                        <div className="icon-box">
                            <i className="fas fa-project-diagram"></i>
                        </div>
                        <h3>System Integration</h3>
                        <p>
                            Integrating third-party services, payment gateways, courier APIs,
                            and enterprise platforms.
                        </p>
                    </div>

                    <div className="service-card">
                        <div className="icon-box">
                            <i className="fas fa-rocket"></i>
                        </div>
                        <h3>Automation & CI/CD</h3>
                        <p>
                            Automating builds, testing, and deployments to ensure fast and
                            reliable software delivery.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Services;
