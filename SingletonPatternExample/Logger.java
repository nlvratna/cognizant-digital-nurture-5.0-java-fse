class Logger {
  private static Logger instance;

  private Logger() {}

  public static Logger getInstance() {
    if (instance == null) {
      instance = new Logger();
    }

    return instance;
  }

  public void log(MessageType type, String message) {
    System.out.println(type + " " + message);
  }

  enum MessageType {
    INFO,
    WARN,
    ERROR,
  }
}
