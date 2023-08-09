package com.mangastore.controller;


import com.mangastore.dto.Purchase;
import com.mangastore.entity.Category;
import com.mangastore.entity.Manga;
import com.mangastore.entity.Orders;
import com.mangastore.service.MangaService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.crossstore.ChangeSetPersister;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Map;
import java.util.Optional;
import java.util.concurrent.ConcurrentHashMap;

@RestController
@Validated
@CrossOrigin("http://localhost:4200")
public class MangaController {
    MangaService service;

    @Autowired
    public MangaController(MangaService service){
        this.service = service;
    }

    @GetMapping("/manga")
    public ResponseEntity<List<Manga>> getAllManga(){
        return ResponseEntity.ok(this.service.getAllManga());
    }

    @GetMapping("/manga/{id}")
    public ResponseEntity<Object> getManga(@PathVariable Long id){

        Optional<Manga> mangaOptional = this.service.getManga(id);

        if (mangaOptional.isPresent()) {
            Manga manga = mangaOptional.get();
            Map<String, Object> mangaMap = new ConcurrentHashMap<>();
            mangaMap.put("id", manga.getId());
            mangaMap.put("title", manga.getTitle());
            mangaMap.put("category_id", manga.getCategory().getId());
            mangaMap.put("description", manga.getDescription());
            mangaMap.put("price", manga.getPrice());
            mangaMap.put("imageUrl", manga.getImageUrl());
//            mangaMap.put("created_at", manga.getCreatedAt());
            mangaMap.put("authors", manga.getAuthors());

            return new ResponseEntity<>(mangaMap, HttpStatus.OK);
        }else{
            return ResponseEntity.notFound().build();
        }
    }

    @GetMapping("/categories")
    public ResponseEntity<List<Category>> getAllCategories(){
        return ResponseEntity.ok(this.service.getAllCategories());
    }

    @PostMapping("/orders")
    public ResponseEntity<String> createOrder(@RequestBody Purchase purchase) {
        this.service.saveOrders(purchase);

        return new ResponseEntity<>("1", HttpStatus.CREATED);
    }
    

}
