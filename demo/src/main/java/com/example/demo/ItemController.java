package com.example.demo;

import jakarta.validation.Valid;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api")
@CrossOrigin(origins = "http://localhost:4200")
public class ItemController {

    private final ItemService itemService;

    public ItemController(ItemService itemService) {
        this.itemService = itemService;
    }

    @GetMapping("/items")
    public List <Item> allItems(){
        return itemService.getAllItems();
    }

    @PostMapping("/products")
    public Item createProduct (@Valid @RequestBody Product p){
        return itemService.saveProduct(p);
    }

    @PostMapping("/services")
    public Item createService (@Valid @RequestBody com.example.demo.Service s){
        return itemService.saveService(s);
    }

    @DeleteMapping("/items/{id}")
    public void delete(@PathVariable Long id){
        itemService.deleteById(id);
    }

}
