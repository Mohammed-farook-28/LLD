package PrototypeDesignPattern;

public class InteligentStudent extends Student{
        private Character grade;
        private int iq;

        public InteligentStudent(){}
        public  InteligentStudent(InteligentStudent student){
            super(student);
            this.iq  = student.iq;
            this.grade = student.grade;
        }


        @Override
        public InteligentStudent copy(){
            return new InteligentStudent(this);
        }
        
        public void setGrade(Character grade) {
            this.grade = grade;
        }
        public void setIq(int iq) {
            this.iq = iq;
        }
        
    
}
