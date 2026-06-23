package com.library;

public class BookService {
    private final BookRepository bookRepo;

    public BookService(BookRepository bookRepo) {
        this.bookRepo = bookRepo;
    }

    public void ping() {
        bookRepo.ping();
        System.out.println("Book Service bean is active");
    }
}
