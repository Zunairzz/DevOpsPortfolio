import profileImg from "../assets/profile.jpg";

const Hero = () => {
    return (
        <header id="hero" className="hero">
            {/* Ambient Background Elements */}
            <div className="hero-bg-elements">
                <div className="circle circle-1"></div>
                <div className="circle circle-2"></div>
            </div>

            <div className="container hero-container">
                <div className="hero-text">
                    <span className="greeting">Hello, I'm</span>
                    <h1>
                        M. Zunair Sarwar<br />
                        <span className="accent">Full Stack Developer</span>
                    </h1>
                    <p className="tagline">
                        Building <span className="highlight">scalable</span>,{" "}
                        <span className="highlight">secure</span>, and{" "}
                        <span className="highlight">high-performance</span> web applications.
                    </p>
                    <p>
                        Full Stack Developer with 3+ years of experience specializing in
                        Java Spring Boot, RESTful APIs, and modern web applications. I build
                        robust backend systems and clean, intuitive frontends that solve
                        real-world business problems.
                    </p>
                    <div className="cta-group">
                        <a href="#projects" className="btn btn-primary">
                            View Projects
                        </a>
                        <a href="#contact" className="btn btn-outline">
                            Hire Me
                        </a>
                    </div>
                </div>
                <div className="hero-image">
                    <img src={profileImg} alt="Profile photo of Full Stack Developer" />
                </div>
            </div>
        </header>
    );
};

export default Hero;
