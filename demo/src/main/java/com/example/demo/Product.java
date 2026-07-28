package com.example.demo;
import jakarta.persistence.DiscriminatorValue;
import jakarta.persistence.Entity;
import jakarta.validation.constraints.NotBlank;

import java.math.BigDecimal;

@Entity
@DiscriminatorValue("Product")
public class Product extends Item{

     private  BigDecimal weightKg;

    @Override
    public String getType() {
        return "product";
    }

    protected Product() {
    }

    public Product(Long id, String code_number, String name, BigDecimal price, BigDecimal weightKg) {
        super(id, code_number, name, price);
        this.weightKg = weightKg;
    }

    public BigDecimal getWeightKg() {
        return weightKg;
    }

    public void setWeightKg( BigDecimal weightKg) {
        this.weightKg = weightKg;
    }
}
