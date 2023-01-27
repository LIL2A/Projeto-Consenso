package com.agendapp.agendappapp.model;

import jakarta.persistence.Column;
import lombok.Data;


@Data 


public class Login {
    @Column(nullable = false)
    private String email;
    private String senha;


}
    
