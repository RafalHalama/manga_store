package com.mangastore.entity;

import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.HashSet;
import java.util.Set;

@Entity
@Table(name = "author")
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class Author {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "author_id")
    private Long id;

    @Column(name="name")
    private String name;

    @Column(name = "age")
    private int age;

    @Column(name = "image_url")
    private String imageUrl;

    @JsonIgnore
    @ManyToMany()
    @JoinTable(
            name = "manga_author",
            joinColumns = @JoinColumn(name = "author_id"),
            inverseJoinColumns = @JoinColumn(name = "manga_id")
    )
    private Set<Manga> manga = new HashSet<>();




}
