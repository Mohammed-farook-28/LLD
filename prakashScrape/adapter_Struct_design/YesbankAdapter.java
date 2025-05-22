public class YesbankAdapter implements  BankAPI {
    private final YesBank  yesbank = new YesBank();

    @Override
    public void makePament(String from, String to, double amount) {
        yesbank.makeTransfer(from, to, amount);
    }

    
}
