package com.library;

public class BookService {
    private BookRepo bookRepo;

    public void setBookRepo(BookRepo bookRepo) {
        this.bookRepo = bookRepo;
    }

    public void inject() {
        System.out.println("Injecting BookRepo in BookService through Setter");
        bookRepo.inject();
    }
}
