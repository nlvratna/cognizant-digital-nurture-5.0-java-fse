package com.library;

public class App {
    public static void main(String[] args) {
        EmployeeDao dao = new EmployeeDao();

        Employee employee = new Employee();
        employee.setName("ratna");

        System.out.println("Attempting to save employee");
        dao.saveEmployee(employee);
        System.out.println("Saved employee");
    }
}
