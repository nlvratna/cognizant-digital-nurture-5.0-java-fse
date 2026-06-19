class DocumentFactoryTest {
  public static void main(String[] args) {
    // Word Document

    DocumentFactory wordFactory = new WordDocumentFactory();
    Document word = wordFactory.createDocument();
    word.type();

    DocumentFactory pdfFactory = new PdfDocumentFactory();
    Document pdf = pdfFactory.createDocument();
    pdf.type();

    DocumentFactory excelFactory = new ExcelDocumentFactory();
    Document excel = excelFactory.createDocument();
    excel.type();
  }
}
