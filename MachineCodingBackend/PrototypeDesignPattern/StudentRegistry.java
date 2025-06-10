package PrototypeDesignPattern;

import java.util.HashMap;
import java.util.Map;

public class StudentRegistry{
        private Map<String , Student> map ;

        public StudentRegistry(){
            map = new HashMap<>();
        }
      
        public void set(String key , Student student){
            map.put(key, student);
        }

        public Student get(String key){
            return map.get(key);
        }
}
