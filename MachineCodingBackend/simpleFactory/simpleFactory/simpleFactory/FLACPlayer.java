package simpleFactory;

public class FLACPlayer extends AudioPlayer {


    
    public FLACPlayer(int volume, double duration) {
        super(volume, duration);
    }

    @Override
    public void play() {
        System.out.println("Playing FLAC file: " );
    }
    @Override
    public void pause() {
        System.out.println("Pausing FLAC file");
    }
    @Override
    public void stop() {
        System.out.println("Stopping FLAC file");
    }

}
