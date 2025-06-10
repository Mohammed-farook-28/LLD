public class Main {
    public static void main(String[] args) {
        PaymentMethod upi = new UpiPayment();
        PaymentMethod wallet = new WalletPayment();

        PhonePePlatform androidApp = new AndroidPhonePe(upi);
        PhonePePlatform iosApp = new iOSPhonePe(wallet);

        androidApp.pay(1000.00);
        iosApp.pay(2500.00);
    }
}