package simpleFactory;

public class AudioPlayerFactory {

    public static AudioPlayer createAudioPlayer(MediaType type , int volume, double duration) {
        switch (type) {
            case MP3:
                return new MP3Player(volume , duration);
            case WAC:
                return new WACPlayer(volume , duration);
            case FLAC:
                return new FLACPlayer(volume , duration);
            default:
                throw new IllegalArgumentException("Unsupported media type: " + type);
        }
    }

}
