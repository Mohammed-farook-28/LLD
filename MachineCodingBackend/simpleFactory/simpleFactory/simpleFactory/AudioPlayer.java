package simpleFactory;


public abstract class AudioPlayer {
    private int volume;
    private double duration;

    public AudioPlayer(int volume, double duration) {
            this.volume = volume;
            this.duration = duration;
    }

    public abstract void play();
    public abstract void pause();
    public abstract void stop();

    public int getVolume() {
        return volume;
    }

    public double getDuration() {
        return duration;
    }

    public void setVolume(int volume) {
        if(volume < 0 || volume > 100) {
            throw new IllegalArgumentException("Volume must be between 0 and 100");
        }
         this.volume = volume;
    }
    

}
