import React, { useState, useEffect } from 'react';
import Course from './Course';
import "./cssstyling/Course.css";
import badgerImage from "./OIG2.MG..jpeg"; 
import "./cssstyling/BadgerImage.css"

function Courses() {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    const staticCourses = [
      
      {
        id: 1,
        title: 'Math 340 - Elementary Matrix & Linear Algebra (**)',
        description: 'This course covers basic and advanced concepts in linear algebra, including matrix operations, solving linear equations, vector spaces, and transformations. It goes into greater detail than MATH 320 but does not include formal proof techniques from MATH 341.',
        difficulty: '2/5',
        usefulness: '3/5 - Use some of these topics in later courses like Math 240 and CS 540. Overall, basic concepts such as matrices are used in multiple classes. However, some high level electives use topics covered in this class heavily. ',
        level: 'Intro',
      },
      {
        id: 2,
        title: 'Math 221 - Calc & Analytic Geometry 1 (**)',
        description: 'Introduction to differential and integral calculus and plane analytic geometry, applications, and transcendental functions.',
        difficulty: '2.5/5',
        usefulness: '?',
        level: 'Intro',
      },  
      {
        id: 3,
        title: 'Math 222 - Calc & Analytic Geometry 2 (**)',
        description: 'Learn about techniques of integration, improper integrals, first order ordinary differential equations, sequences and series, Taylor series, vector geometry in two and three dimensions.',
        difficulty: '3/5',
        usefulness: '?',
        level: 'Intro',
      },
      {
        id: 4,
        title: 'CS 200 - Programming I (C)',
        description: 'Learn how to write small programs in java. Also, learn good programming practices. Definitely recommend if you have little to no programming experience.',
        difficulty: '1/5',
        usefulness: '5/5 - Does a good job setting you up for CS 300',
        level: 'Intro',
      },
      {
        id: 5,
        title: 'CS 300 - Programming II (C)',
        description: 'This course teaches object-oriented programming with classes and objects, covering data structures like arrays, lists, stacks, and queues. Assignments focus on solving real-world problems using interfaces, generics, and exception handling. Topics include file handling, OOP design, searching, sorting, and recursion.',
        difficulty: '3/5',
        usefulness: '4/5 - Teaches important concepts used consitently in other upper level classes',
        level: 'Intro',
      },
      {
        id: 6,
        title: 'Math/CS 240 - Intro to Discrete Math (C)',
        description: '',
        difficulty: '',
        usefulness: ' ',
        level: 'Intro',
      }
      // Add more courses
    ];

    setCourses(staticCourses);
  }, []);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const renderCoursesByLevel = (level) => {
    const filteredCourses = courses.filter(course => course.level === level);

    return (
      <div key={level} id={`${level.toLowerCase()}Section`}>
        <h3>{`${level} Courses`}</h3>
        <ul>
          {filteredCourses.map(course => (
            <Course className="course-info"
              key={course.id}
              title={course.title}
              description={course.description}
              difficulty={course.difficulty}
              usefulness={course.usefulness}
            />
          ))}
        </ul>
      </div>
    );
  };

  return (
    <div className="courses">
      <h2 className="levels">
        <a href="#introSection" className="introLink" onClick={() => scrollToSection('introSection')}>Intro</a>,{' '}
        <a href="#intermediateSection" className="intermediateLink" onClick={() => scrollToSection('intermediateSection')}>Intermediate</a>, and{' '}
        <a href="#advancedSection" className="advancedLink" onClick={() => scrollToSection('advancedSection')}>Advanced</a> Courses
      </h2>

      <div className="symbols" style={{ textAlign: 'center' }}>
        <img src={badgerImage} alt="Badger with Glasses" style={{ maxWidth: '200px', marginBottom: '0px' }} />
      
        <p>C - CS course</p>
        <p>D - DS course</p>
        <p>** - Both</p>
        <p className="moreInfoLink" style={{ color: '#bf0707' }}>Visit UW Madison Course page for <a href="https://guide.wisc.edu/courses/" target="_blank" rel="noopener noreferrer">more info</a></p>
        <div style={{ marginTop: '50px' }}>
          <p><strong>Reminder:</strong></p>
          <p><strong>These are just our own personal thoughts as students. Everyone is different and may have different opinions!</strong></p>
        </div>

      </div>

      {renderCoursesByLevel('Intro')}
      {renderCoursesByLevel('Intermediate')}
      {renderCoursesByLevel('Advanced')}
    </div>
  );
}

export default Courses;
