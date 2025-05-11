import { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { getCourses, deleteCourse } from '../utils/api';
import './CourseList.css';

const CourseList = () => {
  const [courses, setCourses] = useState([]);
  const [error, setError] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    loadCourses();
  }, []);

  const loadCourses = async () => {
    try {
      const data = await getCourses();
      setCourses(data);
    } catch (err) {
      setError('Failed to load courses');
    }
  };

  const handleDelete = async (id) => {
    if (window.confirm('Are you sure you want to delete this course?')) {
      try {
        await deleteCourse(id);
        // Reload courses after deletion
        loadCourses();
      } catch (err) {
        setError('Failed to delete course');
      }
    }
  };

  const handleView = (id) => {
    navigate(`/courses/${id}`);
  };

  const handleEdit = (id) => {
    navigate(`/courses/${id}/edit`);
  };

  return (
    <div className="course-list">
      <div className="course-list-header">
        <h2>Courses</h2>
        <Link to="/courses/new" className="add-course-btn">
          Add New Course
        </Link>
      </div>

      {error && <div className="error-message">{error}</div>}

      <div className="courses-grid">
        {courses.map(course => (
          <div key={course.id} className="course-card">
            <h3>{course.title}</h3>
            <p>{course.description}</p>
            <div className="course-actions">
              <button onClick={() => handleView(course.id)} className="view-btn">
                View
              </button>
              <button onClick={() => handleEdit(course.id)} className="edit-btn">
                Edit
              </button>
              <button
                onClick={() => handleDelete(course.id)}
                className="delete-btn"
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CourseList; 