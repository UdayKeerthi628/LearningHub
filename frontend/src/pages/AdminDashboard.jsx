import { useState } from 'react';
import './AdminDashboard.css';

const AdminDashboard = () => {
  const [activeTab, setActiveTab] = useState('overview');

  // Mock data - in a real app, this would come from an API
  const stats = {
    totalStudents: 150,
    activeCourses: 8,
    totalRevenue: '$15,000',
    newEnrollments: 25
  };

  const recentStudents = [
    { id: 1, name: 'John Doe', email: 'john@example.com', enrolled: '2 days ago' },
    { id: 2, name: 'Jane Smith', email: 'jane@example.com', enrolled: '3 days ago' },
    { id: 3, name: 'Mike Johnson', email: 'mike@example.com', enrolled: '5 days ago' }
  ];

  const courses = [
    {
      id: 1,
      title: 'HTML & CSS',
      students: 45,
      revenue: '$4,500',
      status: 'active'
    },
    {
      id: 2,
      title: 'JavaScript',
      students: 38,
      revenue: '$3,800',
      status: 'active'
    },
    {
      id: 3,
      title: 'Python',
      students: 30,
      revenue: '$3,000',
      status: 'active'
    }
  ];

  return (
    <div className="admin-dashboard">
      <div className="admin-header">
        <h1>Admin Dashboard</h1>
        <div className="admin-tabs">
          <button
            className={activeTab === 'overview' ? 'active' : ''}
            onClick={() => setActiveTab('overview')}
          >
            Overview
          </button>
          <button
            className={activeTab === 'courses' ? 'active' : ''}
            onClick={() => setActiveTab('courses')}
          >
            Courses
          </button>
          <button
            className={activeTab === 'students' ? 'active' : ''}
            onClick={() => setActiveTab('students')}
          >
            Students
          </button>
        </div>
      </div>

      <div className="admin-content">
        {activeTab === 'overview' && (
          <div className="overview-section">
            <div className="stats-grid">
              <div className="stat-card">
                <h3>Total Students</h3>
                <p>{stats.totalStudents}</p>
              </div>
              <div className="stat-card">
                <h3>Active Courses</h3>
                <p>{stats.activeCourses}</p>
              </div>
              <div className="stat-card">
                <h3>Total Revenue</h3>
                <p>{stats.totalRevenue}</p>
              </div>
              <div className="stat-card">
                <h3>New Enrollments</h3>
                <p>{stats.newEnrollments}</p>
              </div>
            </div>

            <div className="recent-activity">
              <h2>Recent Enrollments</h2>
              <div className="table-container">
                <table>
                  <thead>
                    <tr>
                      <th>Name</th>
                      <th>Email</th>
                      <th>Enrolled</th>
                      <th>Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {recentStudents.map(student => (
                      <tr key={student.id}>
                        <td>{student.name}</td>
                        <td>{student.email}</td>
                        <td>{student.enrolled}</td>
                        <td>
                          <button className="btn btn-small">View</button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'courses' && (
          <div className="courses-section">
            <div className="section-header">
              <h2>Manage Courses</h2>
              <button className="btn btn-primary">Add New Course</button>
            </div>
            <div className="table-container">
              <table>
                <thead>
                  <tr>
                    <th>Course Title</th>
                    <th>Students</th>
                    <th>Revenue</th>
                    <th>Status</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {courses.map(course => (
                    <tr key={course.id}>
                      <td>{course.title}</td>
                      <td>{course.students}</td>
                      <td>{course.revenue}</td>
                      <td>
                        <span className={`status ${course.status}`}>
                          {course.status}
                        </span>
                      </td>
                      <td>
                        <button className="btn btn-small">Edit</button>
                        <button className="btn btn-small btn-danger">Delete</button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {activeTab === 'students' && (
          <div className="students-section">
            <div className="section-header">
              <h2>Manage Students</h2>
              <button className="btn btn-primary">Add New Student</button>
            </div>
            <div className="table-container">
              <table>
                <thead>
                  <tr>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Enrolled Courses</th>
                    <th>Status</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {recentStudents.map(student => (
                    <tr key={student.id}>
                      <td>{student.name}</td>
                      <td>{student.email}</td>
                      <td>3 courses</td>
                      <td>
                        <span className="status active">Active</span>
                      </td>
                      <td>
                        <button className="btn btn-small">View</button>
                        <button className="btn btn-small btn-danger">Remove</button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default AdminDashboard; 