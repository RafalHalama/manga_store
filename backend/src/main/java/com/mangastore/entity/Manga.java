package com.mangastore.entity;


import jakarta.persistence.*;
import jakarta.validation.constraints.NotBlank;
import lombok.Data;
import org.hibernate.annotations.CreationTimestamp;
import org.hibernate.annotations.UpdateTimestamp;

import java.math.BigDecimal;
import java.util.Date;
import java.util.HashSet;
import java.util.Set;

@Entity
@Table(name = "manga")
@Data
public class Manga {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "manga_id")
    private Long id;

    @NotBlank
    @Column(name = "title")
    private String title;

    @ManyToOne
    @JoinColumn(name = "category_id", nullable = false)
    private Category category;

    @NotBlank
    @Column(name = "description")
    private String description;

    @NotBlank
    @Column(name = "price")
    private BigDecimal price;

    @NotBlank
    @Column(name = "image_url")
    private String imageUrl;

    @NotBlank
    @Column(name = "created_at")
    @CreationTimestamp
    private Date createdAt;

    @Column(name = "updated_at")
    @UpdateTimestamp
    private Date updatedAt;

    @ManyToMany( mappedBy = "manga")
    private Set<Author> authors = new HashSet<>();


}
