package com.library;

public class BookService {
    private BookRepo bookRepo;

    public BookRepo getBookRepo() {
        return bookRepo;
    }

    public void setBookRepo(BookRepo bookRepo) {
        this.bookRepo = bookRepo;
    }

    public void inject() {
        System.out.println("Injecting BookRepo in BookService");
        bookRepo.inject();
    }
}
