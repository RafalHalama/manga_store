
package com.mangastore.dto;

import com.mangastore.entity.OrderItem;
import com.mangastore.entity.Orders;
import com.mangastore.entity.User;
import lombok.Data;

import java.util.Set;

@Data
public class Purchase {


    private Orders orders;
    private Set<OrderItem> orderItems;
    private String email;
}
