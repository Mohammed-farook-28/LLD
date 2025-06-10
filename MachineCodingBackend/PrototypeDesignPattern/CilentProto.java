package PrototypeDesignPattern;

public class CilentProto {
    public static void fillRegistry(StudentRegistry registry){
        Student student =  new Student();

        student.setUniversity("Anna University");

        registry.set("student" , student);

        InteligentStudent st = new InteligentStudent();
        st.setIq(100);
        st.setGrade('A');

        registry.set("intel" , st);
    }
    public static void main(String[] args) {
        StudentRegistry registry =  new StudentRegistry();
        fillRegistry(registry);
        Student farook = registry.get("student");
        farook.setAge(25);
        farook.setName("farooq");
        Student bot = registry.get("student").copy();
        bot.setAge(10);
        bot.setName("bot");

        Student bot_farooq =  registry.get("intel").copy();
        bot_farooq.setName("interl farooq");
        bot_farooq.setAge(10);
        System.out.println("Reached");
        System.out.println(bot_farooq);
        System.out.println();
    }
}
