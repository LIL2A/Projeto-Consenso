package com.agendapp.agendappapp.service;

import org.springframework.data.jpa.repository.JpaRepository;
import com.agendapp.agendappapp.model.TipoUsuario;

public interface TipoUsuarioService extends JpaRepository<TipoUsuario,Long>{  

    
}
