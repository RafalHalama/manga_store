package com.mangastore.service;

import com.mangastore.dao.MangaRepository;
import com.mangastore.entity.Manga;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;
@Service
public class MangaService {

    MangaRepository repository;
    @Autowired
    public MangaService(MangaRepository repository){
        this.repository = repository;
    }

    public Optional<Manga> getManga(Long id) {
        return this.repository.findById(id);
    }
    public List<Manga> getAllManga(){
        return this.repository.findAll();
    }
}
