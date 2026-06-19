class FinancialForecast {
  public static double predictValue(double presentValue, double growthRate, double years) {
    if (years <= 0) {
      return presentValue;
    }

    double prevValue = predictValue(presentValue, growthRate, years - 1);
    return prevValue * (1 + growthRate);
  }

  public static void main(String[] args) {
    double investment = 1000.00;
    double growthRate = 0.05;
    int years = 5;

    double predictedValue = predictValue(investment, growthRate, years);

    System.out.printf("Investment :%.2f\n", investment);
    System.out.printf("Projected value :%.2f\n", predictedValue);
  }
}
