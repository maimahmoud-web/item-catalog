package com.example.demo;

import jakarta.persistence.DiscriminatorValue;
import jakarta.persistence.Entity;


import java.math.BigDecimal;

@Entity
@DiscriminatorValue("Service")
public class Service extends Item{

     private int durationHours;

    @Override
    public String getType() {
        return "Service";
    }

    protected Service() {
    }

    public Service(Long id, String code_number, String name, BigDecimal price, int durationHours) {
        super(id, code_number, name, price);
        this.durationHours = durationHours;
    }

    public  int getDurationHours() {
        return durationHours;
    }

    public void setDurationHours( int durationHours) {
        this.durationHours = durationHours;
    }
}
