package com.example.demo;

import jakarta.persistence.*;
import jakarta.validation.constraints.NotBlank;

import java.math.BigDecimal;

@Entity
@Inheritance (strategy = InheritanceType.SINGLE_TABLE)
@DiscriminatorColumn(name="item_type")
public abstract class Item {

    @Id @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @NotBlank private String code_number;
    @NotBlank private String name;
    private BigDecimal price;

    public abstract String getType();

    protected Item() {
    }

    public Item(Long id, String code_number, String name, BigDecimal price) {
        this.id = id;
        this.code_number = code_number;
        this.name = name;
        this.price = price;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public @NotBlank String getCode_number() {
        return code_number;
    }

    public void setCode_number(@NotBlank String code_number) {
        this.code_number = code_number;
    }

    public @NotBlank String getName() {
        return name;
    }

    public void setName(@NotBlank String name) {
        this.name = name;
    }

    public BigDecimal getPrice() {
        return price;
    }

    public void setPrice(BigDecimal price) {
        this.price = price;
    }
}
