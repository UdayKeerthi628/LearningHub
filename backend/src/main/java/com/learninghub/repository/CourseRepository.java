package com.learninghub.repository;

import com.learninghub.model.Course;
import org.springframework.data.jpa.repository.JpaRepository;
import java.util.List;

public interface CourseRepository extends JpaRepository<Course, Long> {
    List<Course> findByInstructorId(Long instructorId);
    List<Course> findByCategory(String category);
    List<Course> findByTitleContainingIgnoreCase(String title);
} 