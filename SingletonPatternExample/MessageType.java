class MessageType {
  public enum Type {
    INFO,
    WARN,
    ERROR,
  }

  Type type;

  MessageType(Type type) {
    this.type = type;
  }

  @Override
  public String toString() {
    if (this.type == Type.INFO) {
      return "INFO";
    } else if (this.type == Type.WARN) {
      return "WARN";
    } else {
      return "ERROR";
    }
  }
}
