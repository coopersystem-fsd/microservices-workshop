package br.com.empresa.controller;

import br.com.empresa.model.Empresa;
import br.com.empresa.service.EmpresaService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/empresa")
public class EmpresaController {

    @Autowired
    private EmpresaService service;

    @GetMapping
    public ResponseEntity findAll(){
        try {
            return ResponseEntity.status(HttpStatus.OK).body(service.findAll());
        }catch (Exception e){
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(e.getMessage());
        }
    }

    @GetMapping("/{cnpj}")
    public ResponseEntity getEmpresaCnpj(@PathVariable String cnpj){
        try {
            Empresa empresa = service.findByCnpj(cnpj);
            return ResponseEntity.status(HttpStatus.OK).body(empresa);
        }catch (Exception e){
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(e.getMessage());
        }
    }

    @PostMapping
    public ResponseEntity save(@RequestBody Empresa empresa){
        try {
            return ResponseEntity.status(HttpStatus.CREATED).body(service.save(empresa));
        }catch (Exception e){
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(e.getMessage());
        }
    }

    @PutMapping
    public ResponseEntity edit(@RequestBody Empresa empresa){
        try {
            return ResponseEntity.status(HttpStatus.OK).body(service.save(empresa));
        }catch (Exception e){
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(e.getMessage());
        }
    }

    @DeleteMapping("/{cnpj}")
    public ResponseEntity delete(@PathVariable String cnpj){
        try {
            service.delete(cnpj);
            return ResponseEntity.status(HttpStatus.NO_CONTENT).body(null);
        }catch (Exception e){
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(e.getMessage());
        }
    }




}
