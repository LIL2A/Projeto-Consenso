package com.agendapp.agendappapp.service;
import org.springframework.data.jpa.repository.JpaRepository;
import com.agendapp.agendappapp.model.Servico;


public interface ServicoService extends JpaRepository<Servico,Long>{  
    
}
