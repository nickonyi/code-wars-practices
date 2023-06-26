import java.util.Locale;

public class Solution {
    public static String run(String[] product_names, int[] quantities, int[] prices,
                             float discount, float delivery_fee) {
        StringBuilder result = new StringBuilder();

        for (int i = 0; i < product_names.length; i++) {
            String productName = product_names[i];
            int productQuantity = quantities[i];
            int productPrice = prices[i];

            float totalPrice = productQuantity * productPrice;

            // Apply discount
            totalPrice *= (1 - (discount / 100));

            // If price after discount or quantity is 0, set final price to 0
            if (totalPrice == 0 || productQuantity == 0) {
                totalPrice = 0;
            }

            String formattedTotalPrice = String.format(Locale.US, "%.2f", totalPrice);
            result.append(productName).append(": ").append(formattedTotalPrice).append("\n");
        }

        // Add delivery fee to the total cost
        float totalCost = 0;
        for (int price : prices) {
            totalCost += price;
        }
        totalCost *= (1 - discount / 100);
        totalCost += delivery_fee;

        String formattedTotalCost = String.format(Locale.US, "%.2f", totalCost);
        result.append("Total: ").append(formattedTotalCost);

        return result.toString();
    }

    public static void main(String[] args) {
        String[] product_names = { "Apples", "Oranges", "Bananas" };
        int[] quantities = { 5, 3, 10 };
        int[] prices = { 1, 2, 1 };
        float discount = 10.0f;
        float delivery_fee = 5.0f;

        String output = run(product_names, quantities, prices, discount, delivery_fee);
        System.out.println(output);
    }
}
