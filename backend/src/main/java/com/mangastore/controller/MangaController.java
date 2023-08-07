package com.mangastore.controller;


import com.mangastore.entity.Manga;
import com.mangastore.service.MangaService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;
import java.util.Map;
import java.util.Optional;
import java.util.concurrent.ConcurrentHashMap;

@RestController
@Validated
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
            mangaMap.put("title", manga.getTitle());
            mangaMap.put("category", manga.getCategory().getCategoryName());
            mangaMap.put("description", manga.getDescription());
            mangaMap.put("price", manga.getPrice());
            mangaMap.put("image_url", manga.getImageUrl());
            mangaMap.put("created_at", manga.getCreatedAt());
            mangaMap.put("authors", manga.getAuthors());

            return new ResponseEntity<>(mangaMap, HttpStatus.OK);
        }else{
            return ResponseEntity.notFound().build();
        }
    }

}
