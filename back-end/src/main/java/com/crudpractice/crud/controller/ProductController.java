package com.crudpractice.crud.controller;


import com.crudpractice.crud.model.Product;
import com.crudpractice.crud.service.ProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
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

    @PostMapping("/add-product")
    public Product addProduct(@RequestBody Product product) {
        return service.saveProduct(product);
    }

    @PostMapping("/add-products")
    public List<Product> addProduct(@RequestBody List<Product> products) {
        return (List<Product>) service.saveProducts(products);
    }

    @GetMapping("/hello-world/{id}")
    public int helloWorld(@PathVariable int id) {
//        return service.helloWorld();
        return id;
    }

    @GetMapping("/products")
    public List<Product> findAllProducts() {
//        List<JSONPObject> entities = new ArrayList<JSONPObject>();
//        JSONObject entity = new JSONObject();
        List<Product> prod = service.getProducts();

        return prod;
    }

    @GetMapping("/product/{id}")
    public Product findProductById(@PathVariable int id) {
        return service.getProductById(id);
    }

    @GetMapping("/product-name/{name}")
    public Product findProductByName(@PathVariable String name) {
        return service.getProductByName(name);
    }

    @PutMapping("/product/{id}")
    public Product updateProduct(@PathVariable int id, @RequestBody Product product) {
//        return id;
//        return id + product;
        return service.updateProduct(id, product);
    }

    @DeleteMapping("/delete/{id}")
    public String deleteProduct(@PathVariable int id) {
        return service.deleteProduct(id);
    }

}
