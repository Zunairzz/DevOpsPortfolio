const Skills = () => {
    return (
        <section id="skills" className="section">
            <div className="container">
                <h2 className="section-title">Technical Skills</h2>
                <div className="skills-grid">
                    <div className="skill-category">
                        <h3>
                            <i className="fas fa-code"></i> Languages
                        </h3>
                        <ul className="skill-list">
                            <li>Java</li>
                            <li>JavaScript</li>
                            <li>SQL</li>
                            <li>PHP</li>
                            <li>C++</li>
                        </ul>
                    </div>

                    <div className="skill-category">
                        <h3>
                            <i className="fas fa-layer-group"></i> Frameworks
                        </h3>
                        <ul className="skill-list">
                            <li>Spring Boot</li>
                            <li>Node.js</li>
                            <li>React.js</li>
                            <li>JSF</li>
                            <li>JavaFX</li>
                        </ul>
                    </div>

                    <div className="skill-category">
                        <h3>
                            <i className="fas fa-database"></i> Databases
                        </h3>
                        <ul className="skill-list">
                            <li>Oracle</li>
                            <li>MySQL</li>
                            <li>MongoDB</li>
                            <li>Redis</li>
                        </ul>
                    </div>

                    <div className="skill-category">
                        <h3>
                            <i className="fas fa-cloud"></i> DevOps & Tools
                        </h3>
                        <ul className="skill-list">
                            <li>AWS</li>
                            <li>Docker</li>
                            <li>Git</li>
                            <li>CI/CD</li>
                            <li>Postman</li>
                        </ul>
                    </div>

                    <div className="skill-category">
                        <h3>
                            <i className="fas fa-exchange-alt"></i> Messaging Systems
                        </h3>
                        <ul className="skill-list">
                            <li>Kafka</li>
                            <li>RabbitMQ</li>
                            <li>ActiveMQ</li>
                            <li>MQTT</li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Skills;
