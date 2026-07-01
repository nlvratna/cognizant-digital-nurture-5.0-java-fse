package com.cognizant.spring_learn.model;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

public class Country {
    private static final Logger LOGGER = LoggerFactory.getLogger(Country.class);
    private String code;
    private String name;

    public Country() {
        LOGGER.info("Inside Country Constructor");
    }

    public Country(String code) {
        LOGGER.debug("Setting code {}", code);
        this.code = code;
    }

    public String getName() {
        LOGGER.info("Returning country name ");
        return name;
    }

    public void setName(String name) {
        LOGGER.debug("Setting country {}", name);
        this.name = name;
    }

    public String getCode() {
        LOGGER.info("Returning country code");
        return code;
    }

    public void setCode(String code) {
        this.code = code;
    }

    @Override
    public String toString() {
        return "Country{" +
                "code='" + code + '\'' +
                ", name='" + name + '\'' +
                '}';
    }
}
