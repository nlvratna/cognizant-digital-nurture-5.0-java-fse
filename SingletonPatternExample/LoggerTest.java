class LoggerTest {
  public static void main(String[] args) {
    Logger logger1 = Logger.getInstance();
    Logger logger2 = Logger.getInstance();

    logger1.log(new MessageType(MessageType.Type.INFO), "Logging from Logger 1");
    logger2.log(new MessageType(MessageType.Type.INFO), "Logging from Logger 2");

    if (logger1 == logger2) {
      System.out.println("Same instance of Logger is obtained for both the loggers");
      System.out.println("Memory address of logger1 " + logger1.hashCode());
      System.out.println("Memory address of logger2 " + logger2.hashCode());
    } else {
      System.out.println("Different instances of Logger is obtained for both the loggers");
    }
  }
}
