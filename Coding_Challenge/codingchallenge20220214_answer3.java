public class codingchallenge20220214_answer3 {

    public static void main(String[] args) {
        // System.out.println("Hello");

        actualMemorySize("32GB");
        actualMemorySize("2GB");
        actualMemorySize("512MB");
    }

    public static void actualMemorySize(String memSizeParam) {
        if (memSizeParam.length() <= 2) {
            System.out.println("Invalid memory size input");
        } else {
            String unitString = memSizeParam.substring(memSizeParam.length() - 2);
            // System.out.println(unitString);

            String memSizeStr = memSizeParam.substring(0, memSizeParam.length() - 2);
            // System.out.println(memSizeStr);

            // convert memSize (as string) to number
            Double memSize = Double.parseDouble(memSizeStr);
            // System.out.println("memSize " + memSize);

            Double actualMemSize;

            if ((memSize > 1) && (unitString.equalsIgnoreCase("GB"))) {
                actualMemSize = memSize * .93;
                System.out.println(actualMemSize + unitString);
            }

            if ((memSize * .93 < 1) && (unitString.equalsIgnoreCase("GB"))) {
                unitString = "MB";
                actualMemSize = (double) Math.round(memSize * 1000 * .93);
                System.out.println(actualMemSize + unitString);
            }

            if (unitString.equalsIgnoreCase("MB")) {
                Double temp = memSize * .93;
                int result = temp.intValue();
                System.out.println(result + unitString);
            }
        }
    }
}
