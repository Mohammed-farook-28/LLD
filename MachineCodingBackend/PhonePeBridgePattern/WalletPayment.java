public class WalletPayment implements PaymentMethod {
    @Override
    public void makePayment(double amount) {
        System.out.println("Paid ₹" + amount + " using PhonePe Wallet.");
    }
}