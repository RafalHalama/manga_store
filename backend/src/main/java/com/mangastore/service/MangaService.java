package com.mangastore.service;

import com.mangastore.dao.*;
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
    UserRepository userRepository;
    @Autowired
    public MangaService(MangaRepository repository, CategoryRepository categoryRepository, OrderItemRepository orderItemRepository,UserRepository userRepository, OrdersRepository ordersRepository){
        this.repository = repository;
        this.categoryRepository = categoryRepository;
        this.ordersRepository = ordersRepository;
        this.orderItemRepository = orderItemRepository;
        this.userRepository = userRepository;
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
        User user = this.userRepository.findByEmail(purchase.getEmail());
        user.add(purchase.getOrders());
         this.ordersRepository.save(purchase.getOrders());
        for(OrderItem ot: purchase.getOrderItems()) {
            purchase.getOrders().add(ot);
            this.orderItemRepository.save(ot);
        }
    }


}
