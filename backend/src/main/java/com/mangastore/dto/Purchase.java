package com.mangastore.dto;

import com.mangastore.entity.OrderItem;
import com.mangastore.entity.Orders;
import lombok.Data;

import java.util.Set;

@Data
public class Purchase {


    private Orders orders;
    private Set<OrderItem> orderItems;

}