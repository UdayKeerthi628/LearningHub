const API_URL = 'http://localhost:8080/api';

// Auth API calls
export const login = async (credentials) => {
  const response = await fetch(`${API_URL}/auth/login`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(credentials),
  });
  if (!response.ok) {
    throw new Error('Login failed');
  }
  return response.json();
};

export const register = async (userData) => {
  const response = await fetch(`${API_URL}/auth/register`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      fullName: userData.firstName + ' ' + userData.lastName,
      email: userData.email,
      password: userData.password,
      role: 'STUDENT'
    }),
  });
  return response.json();
};

// Course API calls
export const getCourses = async () => {
  const token = localStorage.getItem('token');
  const response = await fetch(`${API_URL}/courses`, {
    headers: { Authorization: `Bearer ${token}` },
  });
  return response.json();
};

export const getCourse = async (id) => {
  const token = localStorage.getItem('token');
  const response = await fetch(`${API_URL}/courses/${id}`, {
    headers: { Authorization: `Bearer ${token}` },
  });
  return response.json();
};

export const createCourse = async (courseData) => {
  const token = localStorage.getItem('token');
  const response = await fetch(`${API_URL}/courses`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(courseData),
  });
  return response.json();
};

export const updateCourse = async (id, courseData) => {
  const token = localStorage.getItem('token');
  const response = await fetch(`${API_URL}/courses/${id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(courseData),
  });
  return response.json();
};

export const deleteCourse = async (id) => {
  const token = localStorage.getItem('token');
  await fetch(`${API_URL}/courses/${id}`, {
    method: 'DELETE',
    headers: { Authorization: `Bearer ${token}` },
  });
};

// Module API calls
export const getModules = async (courseId) => {
  const token = localStorage.getItem('token');
  const response = await fetch(`${API_URL}/courses/${courseId}/modules`, {
    headers: { Authorization: `Bearer ${token}` },
  });
  return response.json();
};

export const createModule = async (courseId, moduleData) => {
  const token = localStorage.getItem('token');
  const response = await fetch(`${API_URL}/courses/${courseId}/modules`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(moduleData),
  });
  return response.json();
};

export const updateModule = async (courseId, moduleId, moduleData) => {
  const token = localStorage.getItem('token');
  const response = await fetch(`${API_URL}/courses/${courseId}/modules/${moduleId}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(moduleData),
  });
  return response.json();
};

export const deleteModule = async (courseId, moduleId) => {
  const token = localStorage.getItem('token');
  await fetch(`${API_URL}/courses/${courseId}/modules/${moduleId}`, {
    method: 'DELETE',
    headers: { Authorization: `Bearer ${token}` },
  });
};

// Lesson API calls
export const getLessons = async (courseId, moduleId) => {
  const token = localStorage.getItem('token');
  const response = await fetch(`${API_URL}/courses/${courseId}/modules/${moduleId}/lessons`, {
    headers: { Authorization: `Bearer ${token}` },
  });
  return response.json();
};

export const createLesson = async (courseId, moduleId, lessonData) => {
  const token = localStorage.getItem('token');
  const response = await fetch(`${API_URL}/courses/${courseId}/modules/${moduleId}/lessons`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(lessonData),
  });
  return response.json();
};

export const updateLesson = async (courseId, moduleId, lessonId, lessonData) => {
  const token = localStorage.getItem('token');
  const response = await fetch(`${API_URL}/courses/${courseId}/modules/${moduleId}/lessons/${lessonId}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(lessonData),
  });
  return response.json();
};

export const deleteLesson = async (courseId, moduleId, lessonId) => {
  const token = localStorage.getItem('token');
  await fetch(`${API_URL}/courses/${courseId}/modules/${moduleId}/lessons/${lessonId}`, {
    method: 'DELETE',
    headers: { Authorization: `Bearer ${token}` },
  });
}; 