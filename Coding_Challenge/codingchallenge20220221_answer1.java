import java.util.stream.IntStream;

public class codingchallenge20220221_answer1 {

    public static void main(String[] args) {

        findMaxPandigital(123);
    }


    public static void findMaxPandigital(int numInput) {

        int result = 0;


        System.out.println("The largest 1 to 9 pandigital 9-digit number is: " + result);
    }


    public static boolean isPandigital(int numInput) {
        boolean contains = false;


        String inputStr = String.valueOf(numInput); // convert to string

        int[] legend = new int[]{0, 1, 2, 3, 4, 5, 6, 7, 8, 9};

        int[] inputIntArr = new int[inputStr.length()];
        for (int i = 0; i < inputStr.length(); i++) {
            inputIntArr[i] = Integer.valueOf(inputStr.charAt(i));
        }

        // check if inputIntArr contains all elements of legend
        for (int i = 0; i < inputStr.length(); i++) {
            int finalI = i;
            contains = IntStream.of(legend).anyMatch(x -> x == inputIntArr[finalI]);
        }

        return contains;
    }


}
