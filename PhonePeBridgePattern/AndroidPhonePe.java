public class AndroidPhonePe extends PhonePePlatform {

    public AndroidPhonePe(PaymentMethod paymentMethod) {
        super(paymentMethod);
    }

    @Override
    public void pay(double amount) {
        System.out.println("Android App Initiating Payment...");
        paymentMethod.makePayment(amount);
    }
}