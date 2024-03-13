
document.getElementById('initiallogo').addEventListener('click', showHome);
document.getElementById('Periods').addEventListener('click', showPeriods);
document.getElementById('Programs').addEventListener('click', showPrograms);
document.getElementById('Fees').addEventListener('click', showFees);
document.getElementById('Deparments').addEventListener('click', showDepartments);

document.getElementById("Teacher").addEventListener("click", showTeachers);
// document.getElementById("Teacher").addEventListener("click", teacherOptions);
document.getElementById("TeacherCreate").addEventListener("click", newTeacher);


document.getElementById("Students").addEventListener("click", showStudents);
document.getElementById("StudentsCreate").addEventListener("click", newStudentForm);

document.getElementById('Courses').addEventListener('click', showCourses);
document.getElementById('Classrooms').addEventListener('click', showClassrooms);

// document.getElementById("nav-subjects").addEventListener("click",subjectOptions);
document.getElementById("SubjectCreate").addEventListener("click", newSubjectForm);
document.getElementById("Subjects").addEventListener("click", showSubjects);

// document.getElementById("nav-tuitions").addEventListener("click",tuitionOptions);
document.getElementById("TuitionCreate").addEventListener("click",newTuitionForm);
document.getElementById("Tuitions").addEventListener("click",showTuitions);

document.getElementById("Reports").addEventListener("click",showReports);