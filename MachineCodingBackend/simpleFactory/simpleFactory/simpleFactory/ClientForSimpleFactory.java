package simpleFactory;
import java.util.Scanner;

public class ClientForSimpleFactory {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        System.out.println("Enter volume (0-100):");
        int volume = scanner.nextInt();
        scanner.nextLine();
        System.out.println("Enter duration (in seconds):");
        double duration = scanner.nextDouble();
        scanner.nextLine();
        System.out.println("Enter payment type (MP3, WAC, FLAC):");
        String input = scanner.nextLine().toUpperCase(); 
        MediaType mediaType = null;
        try {
            mediaType = MediaType.valueOf(input);
            System.out.println("You selected: " + mediaType);
        } catch (IllegalArgumentException e) {
            System.out.println("`Invalid media type: " + input);
        }

        scanner.close();
        AudioPlayer player = AudioPlayerFactory.createAudioPlayer(mediaType, volume, duration);
        player.play();
        player.pause();
        player.stop();
        System.out.println("Volume: " + player.getVolume());
        System.out.println("Duration: " + player.getDuration());
        System.out.println("Media type: " + mediaType);


    }
}   