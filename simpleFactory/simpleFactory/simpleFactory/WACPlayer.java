package simpleFactory;

public class WACPlayer extends AudioPlayer {

    public WACPlayer(int volume, double duration) {
        super(volume, duration);
    }

    public void play() {
        System.out.println("Playing WAC file: " );
    }
    public void pause() {
        System.out.println("Pausing WAC file");
    }
    public void stop() {
        System.out.println("Stopping WAC file");
    }
}
