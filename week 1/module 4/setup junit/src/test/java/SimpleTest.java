import org.junit.Test;
import org.junit.jupiter.api.Assertions;

public class SimpleTest {
  @Test
  public void simpleTest() {
    Assertions.assertEquals(simpleValue(), 56, "The result should have been 56");
  }

  static int simpleValue() {
    return 56;
  }
}
