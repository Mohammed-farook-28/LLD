public abstract class PhonePePlatform {
    protected PaymentMethod paymentMethod;

    public PhonePePlatform(PaymentMethod paymentMethod) {
        this.paymentMethod = paymentMethod;
    }

    public abstract void pay(double amount);
}