package com.agendapp.agendappapp.service;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository; /*acesso as funçoes e metodos java para fazer as 4 operações do crud*/
import com.agendapp.agendappapp.model.Usuario;


public interface UsuarioService extends JpaRepository<Usuario,Long>{ 
    
    Optional<Usuario> findByEmail(String email);  
}
