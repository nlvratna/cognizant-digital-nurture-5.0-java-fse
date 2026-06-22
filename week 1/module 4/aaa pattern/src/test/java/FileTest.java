import java.io.BufferedReader;
import java.io.BufferedWriter;
import java.io.FileReader;
import java.io.FileWriter;
import java.io.IOException;
import org.junit.jupiter.api.AfterAll;
import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.BeforeAll;
import org.junit.jupiter.api.Test;

public class FileTest {

  static BufferedWriter writer;
  static BufferedReader reader;
  static String text = "Test text";

  @BeforeAll
  static void open() throws IOException {
    writer = new BufferedWriter(new FileWriter("src/test/test.txt"));
    reader = new BufferedReader(new FileReader("src/test/test.txt"));

    System.out.println("opened reader and writer");
  }

  @Test
  void testWrite() throws IOException {
    Assertions.assertNotNull(writer);

    writer.write(text);
    writer.flush();
  }

  @Test
  void testRead() throws IOException {
    Assertions.assertNotNull(reader);

    String content = reader.readLine();

    Assertions.assertEquals(text, content, "File content should match the text");
    System.out.println(content);
  }

  @AfterAll
  static void close() throws IOException {
    if (reader != null) {
      reader.close();
    }
    if (writer != null) {
      writer.close();
    }
    System.out.println("closed reader and writer");
  }
}
