import { useState } from 'react';
import { useParams } from 'react-router-dom';
import './CourseDetails.css';

const CourseDetails = () => {
  const { id } = useParams();
  const [activeTab, setActiveTab] = useState('content');

  // Mock course data - in a real app, this would come from an API
  const course = {
    id: parseInt(id),
    title: 'HTML & CSS',
    description: 'Learn the fundamentals of web development with HTML and CSS',
    instructor: 'John Doe',
    duration: '8 weeks',
    level: 'Beginner',
    content: [
      {
        id: 1,
        title: 'Introduction to HTML',
        type: 'video',
        duration: '15:00',
        completed: true
      },
      {
        id: 2,
        title: 'HTML Document Structure',
        type: 'reading',
        duration: '20 mins',
        completed: true
      },
      {
        id: 3,
        title: 'CSS Basics',
        type: 'video',
        duration: '20:00',
        completed: false
      }
    ],
    resources: [
      {
        title: 'HTML5 Cheat Sheet',
        type: 'pdf',
        link: '#'
      },
      {
        title: 'CSS Properties Reference',
        type: 'pdf',
        link: '#'
      }
    ],
    roadmap: [
      {
        week: 1,
        topics: ['HTML Basics', 'Document Structure', 'Text Elements']
      },
      {
        week: 2,
        topics: ['CSS Introduction', 'Selectors', 'Colors and Typography']
      },
      {
        week: 3,
        topics: ['Box Model', 'Layouts', 'Flexbox']
      }
    ]
  };

  return (
    <div className="course-details">
      <div className="course-header">
        <h1>{course.title}</h1>
        <p className="course-description">{course.description}</p>
        <div className="course-meta">
          <span>Instructor: {course.instructor}</span>
          <span>Duration: {course.duration}</span>
          <span>Level: {course.level}</span>
        </div>
      </div>

      <div className="course-tabs">
        <button
          className={activeTab === 'content' ? 'active' : ''}
          onClick={() => setActiveTab('content')}
        >
          Course Content
        </button>
        <button
          className={activeTab === 'resources' ? 'active' : ''}
          onClick={() => setActiveTab('resources')}
        >
          Resources
        </button>
        <button
          className={activeTab === 'roadmap' ? 'active' : ''}
          onClick={() => setActiveTab('roadmap')}
        >
          Learning Roadmap
        </button>
      </div>

      <div className="course-content">
        {activeTab === 'content' && (
          <div className="content-section">
            <h2>Course Content</h2>
            <div className="content-list">
              {course.content.map(item => (
                <div
                  key={item.id}
                  className={`content-item ${item.completed ? 'completed' : ''}`}
                >
                  <div className="content-info">
                    <h3>{item.title}</h3>
                    <span className="content-type">{item.type}</span>
                    <span className="content-duration">{item.duration}</span>
                  </div>
                  <button className="btn btn-primary">
                    {item.completed ? 'Review' : 'Start'}
                  </button>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab === 'resources' && (
          <div className="resources-section">
            <h2>Learning Resources</h2>
            <div className="resources-list">
              {course.resources.map((resource, index) => (
                <div key={index} className="resource-item">
                  <h3>{resource.title}</h3>
                  <span className="resource-type">{resource.type}</span>
                  <a href={resource.link} className="btn btn-outline">
                    Download
                  </a>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab === 'roadmap' && (
          <div className="roadmap-section">
            <h2>Learning Roadmap</h2>
            <div className="roadmap-timeline">
              {course.roadmap.map(week => (
                <div key={week.week} className="roadmap-week">
                  <h3>Week {week.week}</h3>
                  <ul>
                    {week.topics.map((topic, index) => (
                      <li key={index}>{topic}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default CourseDetails; 