package com.library.Jpa.service;

import com.library.Jpa.Repository.EmployeeRepo;
import com.library.Jpa.model.Employee;
import org.springframework.stereotype.Service;

@Service
public class EmployeeService {
    private final EmployeeRepo repo;

    public EmployeeService(EmployeeRepo repo) {
        this.repo = repo;
    }

    public void saveEmployee(Employee employee) {
        repo.save(employee);
    }

}
