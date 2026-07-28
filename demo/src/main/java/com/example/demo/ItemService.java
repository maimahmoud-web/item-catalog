package com.example.demo;

import org.springframework.stereotype.Service;

import java.util.List;

@Service

public class ItemService {

    private final ItemRepository repository;

    public ItemService(ItemRepository repository) {
        this.repository = repository;
    }


    public List<Item> getAllItems(){
        return repository.findAll();
    }


    public Item saveProduct (Product p){
        return repository.save(p);
    }


    public Item saveService (com.example.demo.Service s){
        return repository.save(s);
    }


    public void deleteById( Long id){
        repository.deleteById(id);
    }
}
