import { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { createCourse, getCourse, updateCourse } from '../utils/api';
import './CourseForm.css';

const categories = [
  'Web',
  'Programming',
  'Data Science',
  'Mobile',
  'Database',
  'Other',
];

const CourseForm = () => {
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    price: '',
    duration: '',
    category: 'Programming',
  });
  const [error, setError] = useState('');
  const { id } = useParams();
  const navigate = useNavigate();
  const isEditMode = Boolean(id);

  useEffect(() => {
    if (isEditMode) {
      loadCourse();
    }
  }, [id]);

  const loadCourse = async () => {
    try {
      const course = await getCourse(id);
      setFormData({
        title: course.title,
        description: course.description,
        price: course.price,
        duration: course.duration,
        category: course.category || 'Programming',
      });
    } catch (err) {
      setError('Failed to load course');
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    const token = localStorage.getItem('token');
    if (!token) {
      setError('You must be logged in to create a course');
      navigate('/login');
      return;
    }

    try {
      const payload = {
        ...formData,
        price: parseFloat(formData.price),
        duration: parseInt(formData.duration),
      };

      if (isEditMode) {
        await updateCourse(id, payload);
      } else {
        await createCourse(payload);
      }
      navigate('/courses');
    } catch (err) {
      console.error('Error saving course:', err);
      setError(err.message || 'Failed to save course');
    }
  };

  return (
    <div className="course-form-container">
      <h2>{isEditMode ? 'Edit Course' : 'Create New Course'}</h2>
      
      {error && <div className="error-message">{error}</div>}

      <form onSubmit={handleSubmit} className="course-form">
        <div className="form-group">
          <label htmlFor="title">Title</label>
          <input
            type="text"
            id="title"
            name="title"
            value={formData.title}
            onChange={handleChange}
            required
            placeholder="Enter course title"
          />
        </div>

        <div className="form-group">
          <label htmlFor="description">Description</label>
          <textarea
            id="description"
            name="description"
            value={formData.description}
            onChange={handleChange}
            required
            placeholder="Enter course description"
            rows="4"
          />
        </div>

        <div className="form-group">
          <label htmlFor="category">Category</label>
          <select
            id="category"
            name="category"
            value={formData.category}
            onChange={handleChange}
            required
          >
            {categories.map(cat => (
              <option key={cat} value={cat}>{cat}</option>
            ))}
          </select>
        </div>

        <div className="form-group">
          <label htmlFor="price">Price</label>
          <input
            type="number"
            id="price"
            name="price"
            value={formData.price}
            onChange={handleChange}
            required
            placeholder="Enter course price"
            min="0"
            step="0.01"
          />
        </div>

        <div className="form-group">
          <label htmlFor="duration">Duration (hours)</label>
          <input
            type="number"
            id="duration"
            name="duration"
            value={formData.duration}
            onChange={handleChange}
            required
            placeholder="Enter course duration"
            min="1"
          />
        </div>

        <div className="form-actions">
          <button type="submit" className="submit-btn">
            {isEditMode ? 'Update Course' : 'Create Course'}
          </button>
          <button
            type="button"
            className="cancel-btn"
            onClick={() => navigate('/courses')}
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
};

export default CourseForm; 