import { useState } from 'react';
import { Link } from 'react-router-dom';
import './Dashboard.css';

const Dashboard = () => {
  const [activeTab, setActiveTab] = useState('courses');

  const courses = [
    {
      id: 1,
      title: 'HTML & CSS',
      progress: 75,
      lessons: [
        { title: 'Introduction to HTML', completed: true },
        { title: 'CSS Basics', completed: true },
        { title: 'Responsive Design', completed: false }
      ]
    },
    {
      id: 2,
      title: 'JavaScript',
      progress: 45,
      lessons: [
        { title: 'JavaScript Fundamentals', completed: true },
        { title: 'DOM Manipulation', completed: false },
        { title: 'ES6 Features', completed: false }
      ]
    },
    {
      id: 3,
      title: 'Python',
      progress: 30,
      lessons: [
        { title: 'Python Basics', completed: true },
        { title: 'Data Structures', completed: false },
        { title: 'Object-Oriented Programming', completed: false }
      ]
    }
  ];

  return (
    <div className="dashboard">
      <div className="dashboard-header">
        <h1>My Learning Dashboard</h1>
        <div className="dashboard-tabs">
          <button
            className={activeTab === 'courses' ? 'active' : ''}
            onClick={() => setActiveTab('courses')}
          >
            My Courses
          </button>
          <button
            className={activeTab === 'progress' ? 'active' : ''}
            onClick={() => setActiveTab('progress')}
          >
            Progress
          </button>
          <button
            className={activeTab === 'ai-help' ? 'active' : ''}
            onClick={() => setActiveTab('ai-help')}
          >
            AI Assistant
          </button>
        </div>
      </div>

      <div className="dashboard-content">
        {activeTab === 'courses' && (
          <div className="courses-grid">
            {courses.map(course => (
              <div key={course.id} className="course-card">
                <h3>{course.title}</h3>
                <div className="progress-bar">
                  <div
                    className="progress"
                    style={{ width: `${course.progress}%` }}
                  ></div>
                </div>
                <p>Progress: {course.progress}%</p>
                <div className="lessons-list">
                  {course.lessons.map((lesson, index) => (
                    <div
                      key={index}
                      className={`lesson ${lesson.completed ? 'completed' : ''}`}
                    >
                      {lesson.title}
                    </div>
                  ))}
                </div>
                <Link to={`/course/${course.id}`} className="btn btn-primary">
                  Continue Learning
                </Link>
              </div>
            ))}
          </div>
        )}

        {activeTab === 'progress' && (
          <div className="progress-section">
            <h2>Learning Progress</h2>
            <div className="progress-stats">
              <div className="stat-card">
                <h3>Courses Enrolled</h3>
                <p>{courses.length}</p>
              </div>
              <div className="stat-card">
                <h3>Average Progress</h3>
                <p>
                  {Math.round(
                    courses.reduce((acc, course) => acc + course.progress, 0) /
                      courses.length
                  )}
                  %
                </p>
              </div>
              <div className="stat-card">
                <h3>Completed Lessons</h3>
                <p>
                  {courses.reduce(
                    (acc, course) =>
                      acc + course.lessons.filter(l => l.completed).length,
                    0
                  )}
                </p>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'ai-help' && (
          <div className="ai-help-section">
            <h2>AI Learning Assistant</h2>
            <div className="ai-chat">
              <div className="chat-messages">
                <div className="message ai">
                  Hello! I'm your AI learning assistant. How can I help you today?
                </div>
              </div>
              <div className="chat-input">
                <input
                  type="text"
                  placeholder="Ask me anything about your courses..."
                />
                <button className="btn btn-primary">Send</button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Dashboard; 