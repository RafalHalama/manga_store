package com.mangastore.entity;

import jakarta.persistence.*;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.hibernate.annotations.CreationTimestamp;
import org.hibernate.annotations.UpdateTimestamp;

import java.math.BigDecimal;
import java.util.Date;
import java.util.HashSet;
import java.util.Set;

@Entity
@Table(name="orders")
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class Orders {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name="id")
    private Long id;

    @NotNull
    @Column(name="total_quantity")
    private int totalQuantity;

    @NotNull
    @Column(name="total_price")
    private BigDecimal totalPrice;

    @Column(name="date_created")
    @CreationTimestamp
    private Date dateCreated;

    @Column(name="last_updated")
    @UpdateTimestamp
    private Date lastUpdated;

    @OneToMany(cascade = CascadeType.ALL, mappedBy = "orders")
    private Set<OrderItem> orderItems = new HashSet<>();

    /*@ManyToOne
    @JoinColumn(name = "user_id")
    private User user;*/

    public void add(OrderItem item) {

        if (item != null) {
            //check this
            if (orderItems == null) {
                orderItems = new HashSet<>();
            }

            orderItems.add(item);
            item.setOrders(this);
        }
    }
}









