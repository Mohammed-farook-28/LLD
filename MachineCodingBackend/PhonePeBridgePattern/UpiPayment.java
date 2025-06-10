public class UpiPayment implements PaymentMethod {
    @Override
    public void makePayment(double amount) {
        System.out.println("Paid ₹" + amount + " using UPI.");
    }
}