import java.util.Arrays;
import java.util.Comparator;

class Product {
  private int productId;
  private String productName;
  private String category;

  Product(int productId, String productName, String category) {
    this.productId = productId;
    this.productName = productName;
    this.category = category;
  }

  public void setProductId(int productId) {
    this.productId = productId;
  }

  public String getProductName() {
    return productName;
  }

  public void setProductName(String productName) {
    this.productName = productName;
  }

  public String getCategory() {
    return category;
  }

  public void setCategory(String category) {
    this.category = category;
  }

  public int getProductId() {
    return this.productId;
  }

  @Override
  public String toString() {
    return String.format(
        "[ProductId:%d,ProductName:%s,category:%s]", this.productId, productName, category);
  }

  // searching based on productId
  static Product linearSearch(Product[] prods, int productId) {
    for (Product p : prods) {
      if (p.productId == productId) {
        return p;
      }
    }
    return null;
  }

  static Product binarySearch(Product[] prods, int productId) {
    int idx = binarySearchRec(prods, 0, prods.length - 1, productId);

    if (idx == -1) {
      return null;
    }

    return prods[idx];
  }

  static int binarySearchRec(Product[] prods, int left, int right, int productId) {
    while (left <= right) {
      int mid = left + (right - left) / 2;

      if (prods[mid].productId == productId) {
        return mid;
      } else if (prods[mid].productId > productId) {
        right = mid - 1;
      } else {
        left = mid + 1;
      }
    }
    return -1;
  }

  public static void main(String[] args) {
    Product[] unsortedProds = {
      new Product(101, "phone", "electronics"),
      new Product(103, "earbuds", "electronics"),
      new Product(102, "laptop", "electronics"),
      new Product(104, "pen", "stationery"),
      new Product(106, "pencil", "stationery"),
      new Product(105, "shirt", "clothes"),
    };

    System.out.print("Using Linear Search:");
    Product p = linearSearch(unsortedProds, 104);

    if (p == null) {
      System.out.println("Product with that productId doesn't exist");
    } else {
      System.out.println(p);
    }

    Product[] sortedProds = unsortedProds.clone();
    Arrays.sort(sortedProds, Comparator.comparingInt(Product::getProductId));

    System.out.print("Using Binary Search:");
    Product prod = linearSearch(unsortedProds, 106);

    if (prod == null) {
      System.out.println("Product with that productId doesn't exist");
    } else {
      System.out.println(prod);
    }
  }
}
