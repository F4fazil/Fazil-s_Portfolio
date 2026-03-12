import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My career <span>&</span>
          <br /> experience
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>BS Computer Science</h4>
                <h5>University of Central Punjab</h5>
              </div>
              <h3>2020</h3>
            </div>
            <p>
              Started my journey in software development. Built PetPalace as final
              year project — an all-in-one pet care app with real-time video
              consultations using Agora.io SDK and AI-powered features.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Flutter Developer</h4>
                <h5>Full Time - Mobile Development</h5>
              </div>
              <h3>2023</h3>
            </div>
            <p>
              Built and shipped production-grade mobile apps with 99%+ crash-free
              rates. Reduced app startup time by ~35% through performance profiling.
              Architected scalable state management using Provider, Riverpod & BLoC.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Software Engineer - Mobile</h4>
                <h5>Freelance & Contract</h5>
              </div>
              <h3>NOW</h3>
            </div>
            <p>
              Delivering 5+ cross-platform apps for international clients. Implementing
              AI-powered features using Google Generative AI. Managing full project
              lifecycles from scoping to App Store deployment.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
