import java.util.Random;
import java.util.Scanner;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

public class Logging {
  static final Logger log = LoggerFactory.getLogger(Logging.class);
  static int maxNumber = 100;

  public static void main(String[] args) {
    Scanner sc = new Scanner(System.in);
    Random random = new Random();

    int target = random.nextInt(maxNumber) + 1;

    System.out.println("Number guess game : Guess a number between 1 and " + maxNumber);

    while (true) {
      int guess = sc.nextInt();

      if (guess > maxNumber || guess <= 0) {
        log.error("Invalid guess");
        continue;
      }

      if (guess == target) {
        log.info("You guessed the right number!");
        break;
      }

      int difference = Math.abs(guess - target);
      String direction = guess > target ? "low" : "high";

      if (difference <= 5) {
        log.info("Close guess Go {}", direction);
      } else if (difference <= 20) {
        log.warn("Go {}", direction);
      } else {
        log.error("Way off,Go {}", direction);
      }
    }
    sc.close();
  }
}
