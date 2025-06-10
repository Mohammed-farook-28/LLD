package PrototypeDesignPattern;
public class Student implements Prototype<Student>{
    private String name;
    private int age ;
    private String university ;
    private String major ;
    private String studentID ;

    public Student(Student student) {
        this.name = student.name;
        this.age = student.age;
        this.university = student.university;
        this.major = student.major;
        this.studentID = student.studentID;
    }
    
    public Student() {
    }

    @Override
    public Student copy(){
        return new Student(this);
    }

    public void setName(String name) {
        this.name = name;
    }

    public void setAge(int age) {
        this.age = age;
    }

    public void setUniversity(String university) {
        this.university = university;
    }

    public void setMajor(String major) {
        this.major = major;
    }

    public void setStudentID(String studentID) {
        this.studentID = studentID;
    }
}
