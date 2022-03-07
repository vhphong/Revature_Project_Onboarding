public class codingchallenge20220307_FibonacciSum {

    public static void main(String[] args) {

        // call EvenFibonacciSum
        EvenFibonacciSum();

    }


    public static void EvenFibonacciSum() {

        long init1 = 1L;
        long init2 = 2L;
        long limit = 4000000000L;
        long runningFibTerm = 0L;
        long sum = 0L;

        while (runningFibTerm < limit) {
            runningFibTerm = init1 + init2;

            if (runningFibTerm % 2 == 0) {
                sum += runningFibTerm;
            }


            init1 = init2;
            init2 = runningFibTerm;
        }

        System.out.println("EvenFibonacciSum is " + sum);

    }
}
