package com.library;

import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;

public class App {
  public static void main(String[] args) {
    ApplicationContext appContext = new ClassPathXmlApplicationContext("appContext.xml");

    BookService bookService = appContext.getBean(BookService.class);
    bookService.ping();
  }
}
