import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.Mockito.*;

import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;

class MockitoTest {

  ApiInterface api;
  ApiService service;
  String location = "Frankfurt";

  @BeforeEach
  void setup() {
    api = mock(ApiInterface.class);

    when(api.getWeather(location)).thenReturn("28C");

    service = new ApiService(api);
  }

  @Test
  void testApi() {
    String result = service.getData(location);
    assertEquals("28C", result, "The weather data should match the mocked response.");
  }
}
