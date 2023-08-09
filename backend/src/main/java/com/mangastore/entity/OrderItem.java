package com.mangastore.entity;

import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.math.BigDecimal;

@Entity
@Table(name="order_item")
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class OrderItem {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name="id")
    private Long id;

    @NotBlank
    @Column(name="image_url")
    private String imageUrl;

    @NotNull
    @Column(name="unit_price")
    private BigDecimal unitPrice;

    @NotNull
    @Column(name="quantity")
    private int quantity;
    @NotNull
    @Column(name="manga_id")
    private Long mangaId;

    @JsonIgnore
    @ManyToOne
    @JoinColumn(name = "order_id")
    private Orders orders;

}








