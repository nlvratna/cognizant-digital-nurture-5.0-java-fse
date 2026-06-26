package com.library.Jpa;

import com.library.Jpa.model.Employee;
import com.library.Jpa.service.EmployeeService;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;

@SpringBootApplication
public class JpaApplication {

    private final EmployeeService service;

    public JpaApplication(EmployeeService service) {
        this.service = service;
    }

    public static void main(String[] args) {
        SpringApplication.run(JpaApplication.class, args);
    }

    @Bean
    public CommandLineRunner runTest(EmployeeService service) {
        return args -> {
            Employee emp = new Employee();
            emp.setName("Ratna");

            System.out.println("Saving employee using Spring jpa");
            service.saveEmployee(emp);
            System.out.println("Saved Employee");
        };
    }

}
