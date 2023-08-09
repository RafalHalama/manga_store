package com.mangastore.service;

import com.mangastore.dao.CategoryRepository;
import com.mangastore.dao.MangaRepository;
import com.mangastore.dao.OrderItemRepository;
import com.mangastore.dao.OrdersRepository;
import com.mangastore.dto.Purchase;
import com.mangastore.entity.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.math.BigDecimal;
import java.time.LocalDate;
import java.util.List;
import java.util.Optional;
import java.util.Set;

@Service
public class MangaService {

    MangaRepository repository;
    CategoryRepository categoryRepository;
    OrderItemRepository orderItemRepository;
    OrdersRepository ordersRepository;
    @Autowired
    public MangaService(MangaRepository repository, CategoryRepository categoryRepository, OrderItemRepository orderItemRepository, OrdersRepository ordersRepository){
        this.repository = repository;
        this.categoryRepository = categoryRepository;
        this.ordersRepository = ordersRepository;
        this.orderItemRepository = orderItemRepository;
    }

    public Optional<Manga> getManga(Long id) {
        return this.repository.findById(id);
    }
    public List<Manga> getAllManga(){
        return this.repository.findAll();
    }

    public List<Category> getAllCategories() {
        return this.categoryRepository.findAll();
    }

    public void saveOrders(Purchase purchase) {
         this.ordersRepository.save(purchase.getOrders());
        for(OrderItem ot: purchase.getOrderItems()) {
            purchase.getOrders().add(ot);
            this.orderItemRepository.save(ot);
        }
    }


}
