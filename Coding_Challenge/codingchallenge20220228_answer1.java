public class codingchallenge20220228_answer1 {

    public static void main(String[] args) {
        firstTriangleNumOver500Divisors();
    }

    private static void firstTriangleNumOver500Divisors() {
        int divisorCount = 0;

        // scan each triangle number
        int triangleNumber = 0;
        int i = 1;
        while (divisorCount < 500) {
            // determine a triangle number
            triangleNumber = i * (i + 1) / 2;

            // compute the triangle number's divisorCount
            divisorCount = countOfDivisors(triangleNumber);
            System.out.println("divisorCount: " + divisorCount);


            System.out.println("triangleNumber: " + triangleNumber);
            i++;
        }
    }

    private static int countOfDivisors(int num) {
        int result = 0;

        for (int i = 1; i <= num / 2; i++) {
            if ((num % i) == 0) {
                result++;
            }
        }

        return result;
    }
}
