package com.agendapp.agendappapp.service;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.agendapp.agendappapp.model.Agendamento;

public interface AgendamentoService extends JpaRepository<Agendamento, Long> {

   @Query("Select a FROM Agendamento a WHERE a.usuario = :idUsuario")
   public List<Agendamento> findByUsuarioId(@Param("idUsuario") Long id);

}
