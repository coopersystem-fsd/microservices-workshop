package br.com.empresa.repository;

import br.com.empresa.model.Empresa;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface IEmpresaRepository extends JpaRepository<Empresa, Long> {

    Empresa findByCnpjAndAtiva(String cnpj, Boolean ativa);

    List<Empresa> findByAtiva(Boolean ativo);

}
