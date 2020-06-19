package br.com.empresa.service;

import br.com.empresa.model.Empresa;
import br.com.empresa.repository.IEmpresaRepository;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
@Setter
@Transactional
@NoArgsConstructor
public class EmpresaService {

    @Autowired
    private IEmpresaRepository repository;

    public List<Empresa> findAll() {
        return repository.findByAtiva(true);
    }

    public Empresa save(Empresa empresa) {
        return repository.save(empresa);
    }

    public void delete(String cnpj) {
        Empresa empresa = repository.findByCnpjAndAtiva(cnpj, true);
        empresa.setAtiva(false);
        repository.save(empresa);

    }

    public Empresa findByCnpj(String cnpj) {
        return repository.findByCnpjAndAtiva(cnpj, true);
    }
}
