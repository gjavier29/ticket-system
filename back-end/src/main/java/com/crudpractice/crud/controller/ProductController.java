package com.crudpractice.crud.controller;


import com.crudpractice.crud.model.Product;
import com.crudpractice.crud.service.ProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("api")
public class ProductController {

    @RequestMapping("/")
    public String welcomePage() {
        return "Welcome to Yawin Tutor";
    }
    @Autowired
    private ProductService service;

    @PostMapping("/addProduct")
    public Product addProduct(@RequestBody Product product) {
        return service.saveProduct(product);
    }

    @PostMapping("/addProducts")
    public List<Product> addProduct(@RequestBody List<Product> products) {
        return (List<Product>) service.saveProducts(products);
    }

    @GetMapping("/hello-world")
    public List<Product> helloWorld() {
        return service.helloWorld();
    }

    @GetMapping("/products")
    public List<Product> findAllProducts() {
        return service.getProducts();
    }

    @GetMapping("/product/{id}")
    public Product findProductById(@PathVariable int id) {
        return service.getProductById(id);
    }

    @GetMapping("/product/{name}")
    public Product findProductByName(@PathVariable String name) {
        return service.getProductByName(name);
    }
    @PutMapping("/product/{name}")
    public Product updateProduct(@RequestBody Product product) {
        return service.updateProduct(product);
    }
    @DeleteMapping("/delete/{id}")
    public String deleteProduct(int id) {
        return service.deleteProduct(id);
    }


}
