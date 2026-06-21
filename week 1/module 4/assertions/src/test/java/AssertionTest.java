import org.junit.Test;
import org.junit.jupiter.api.Assertions;

public class AssertionTest {
  @Test
  public void assertions() {
    // using assertionEqual to test if two values are equal or not
    Assertions.assertEquals(2 + 4, 6, "2+4 should be 6");

    // assertTrue check's if a condition is true
    Assertions.assertTrue(checkSum(3, 5, 8));

    // assertTrue check's if a condition is true
    Assertions.assertFalse(checkSum(3, 5, 7));

    // check's if an object is not null;
    Assertions.assertNotNull(new AssertionTest());
  }

  static boolean checkSum(int a, int b, int target) {
    return a + b == target;
  }
}
