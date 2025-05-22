package bird;

public abstract class Bird {
    private String name ;
    private String color;
    private int age;
    private String species;
    private float weight;
    private boolean canFly;

    public Bird(String name, String color, int age, String species, float weight, boolean canFly) {
        this.name = name;
        this.color = color;
        this.age = age;
        this.species = species;
        this.weight = weight;
        this.canFly = canFly;
    }
     public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getColor() {
        return color;
    }

    public void setColor(String color) {
        this.color = color;
    }

    public int getAge() {
        return age;
    }

    public void setAge(int age) {
        this.age = age;
    }

    public String getSpecies() {
        return species;
    }

    public void setSpecies(String species) {
        this.species = species;
    }

    public float getWeight() {
        return weight;
    }

    public void setWeight(float weight) {
        this.weight = weight;
    }

    public boolean isCanFly() {
        return canFly;
    }

    public void setCanFly(boolean canFly) {
        this.canFly = canFly;
    }

    abstract void makeSound();
    abstract void eat();

}
