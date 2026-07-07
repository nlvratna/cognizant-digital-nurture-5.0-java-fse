package com.cognizant.account.model;

public class Account {
    private Long number;
    private String type;
    private Double balance;

    public Account(Long number, String type, Double balance) {
        this.number = number;
        this.type = type;
        this.balance = balance;
    }

    public Long getNumber() {
        return number;
    }

    public void setNumber(Long number) {
        this.number = number;
    }

    public String getType() {
        return type;
    }

    public void setType(String type) {
        this.type = type;
    }

    public Double getBalance() {
        return balance;
    }

    public void setBalance(Double balance) {
        this.balance = balance;
    }
}
