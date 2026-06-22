class ApiService {
  ApiInterface api;

  ApiService(ApiInterface api) {
    this.api = api;
  }

  public String getData(String location) {
    return api.getWeather(location);
  }
}
