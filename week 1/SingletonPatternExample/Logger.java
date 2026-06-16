class Logger {
  // make sure a thread reads the latest info using the volatile keyword
  private static volatile Logger instance;

  private Logger() {}

  // using double check locking for thread safety
  public static Logger getInstance() {
    if (instance == null) {
      synchronized (Logger.class) {
        if (instance == null) {
          instance = new Logger();
        }
      }
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
