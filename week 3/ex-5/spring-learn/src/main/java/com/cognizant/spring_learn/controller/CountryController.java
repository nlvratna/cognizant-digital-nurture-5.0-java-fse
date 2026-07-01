package com.cognizant.spring_learn.controller;

import com.cognizant.spring_learn.model.Country;
import com.cognizant.spring_learn.service.CountryService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class CountryController {

    private static final Logger LOGGER = LoggerFactory.getLogger(CountryController.class);
    private final CountryService countryService;

    CountryController(CountryService countryService) {
        this.countryService = countryService;
    }

    @RequestMapping("/country")
    public ResponseEntity<Country> getCountryIndia() {
        LOGGER.info("START");

        ApplicationContext context = new ClassPathXmlApplicationContext("country.xml");

        Country country = context.getBean(Country.class);
        LOGGER.debug("Returning Country {} ", country.toString());

        LOGGER.info("END");
        return new ResponseEntity<>(country, HttpStatus.OK);
    }

    @GetMapping("/countries/{code}")
    public ResponseEntity<Country> getCountry(@PathVariable String code) {

        Country country = countryService.getCountry(code);

        if (country == null) {
            return ResponseEntity.notFound().build();
        }

        return new ResponseEntity<>(country, HttpStatus.OK);
    }
}
