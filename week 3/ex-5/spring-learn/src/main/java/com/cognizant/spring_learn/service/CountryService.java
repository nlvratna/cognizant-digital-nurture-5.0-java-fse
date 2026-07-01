package com.cognizant.spring_learn.service;

import com.cognizant.spring_learn.model.Country;
import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;
import org.springframework.stereotype.Service;

import java.util.ArrayList;

@Service
public class CountryService {

    private ArrayList<Country> countries;

    public CountryService() {
        ApplicationContext context = new ClassPathXmlApplicationContext("country.xml");
        this.countries = context.getBean("countryList", ArrayList.class);
    }

    public Country getCountry(String code) {
        for (Country country : countries) {
            if (code.equalsIgnoreCase(country.getCode())) {
                return country;
            }
        }
        return null;
    }
}
