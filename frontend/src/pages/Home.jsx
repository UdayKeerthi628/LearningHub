import { Link } from 'react-router-dom';
import './Home.css';

const Home = () => {
  return (
    <div className="home-container">
      <div className="hero-section">
        <h1>Welcome to Learning Hub</h1>
        <p>Your gateway to knowledge and skill development</p>
        <div className="cta-buttons">
          <Link to="/courses" className="cta-button primary">
            Browse Courses
          </Link>
          <Link to="/register" className="cta-button secondary">
            Get Started
          </Link>
        </div>
      </div>

      <div className="features-section">
        <h2>Why Choose Learning Hub?</h2>
        <div className="features-grid">
          <div className="feature-card">
            <h3>Expert Instructors</h3>
            <p>Learn from industry professionals and experienced educators</p>
          </div>
          <div className="feature-card">
            <h3>Flexible Learning</h3>
            <p>Study at your own pace, anytime and anywhere</p>
          </div>
          <div className="feature-card">
            <h3>Quality Content</h3>
            <p>Access well-structured courses with practical examples</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home; 