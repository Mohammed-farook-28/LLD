package simpleFactory;

public class MP3Player extends AudioPlayer {
        
    public MP3Player(int volume, double duration) {
        super(volume, duration);
    }

    @Override
    public void play() {
        System.out.println("Playing MP3 file: " );
    }

    @Override
    public void pause() {
        System.out.println("Pausing MP3 playback.");
    }

    @Override
    public void stop() {
        System.out.println("Stopping MP3 playback.");
    }

}
