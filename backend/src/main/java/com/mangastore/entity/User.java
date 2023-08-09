package com.mangastore.entity;


import java.util.HashSet;
import java.util.Set;

import jakarta.persistence.*;
import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Size;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Table( name = "users"
)
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class User {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "user_id")
    private Long userId;


    @Size(max = 20)
    @Column(name = "username")
    private String username;

    @Size(max = 50)
    @Email
    @Column(name = "email")
    private String email;


    @Size(max = 120)
    @Column(name = "password")
    private String password;

    @Column(name = "role")
    private String role;

   /* @OneToMany(mappedBy = "user", cascade = CascadeType.ALL)
    private Set<Orders> orders = new HashSet<>();*/

   /* public void add(Orders orders) {

        if (orders != null) {

            if (this.orders == null) {
                this.orders = new HashSet<>();
            }

            this.orders.add(orders);
            orders.setUser(this);
        }
    }*/

}