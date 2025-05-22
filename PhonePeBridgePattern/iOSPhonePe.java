public class iOSPhonePe extends PhonePePlatform {

    public iOSPhonePe(PaymentMethod paymentMethod) {
        super(paymentMethod);
    }

    @Override
    public void pay(double amount) {
        System.out.println("iOS App Initiating Payment...");
        paymentMethod.makePayment(amount);
    }
}