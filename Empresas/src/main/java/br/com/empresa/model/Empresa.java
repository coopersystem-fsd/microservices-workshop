package br.com.empresa.model;

import lombok.Data;

import javax.persistence.*;
import java.io.Serializable;

@Entity
@Data
@Table(name = "empresa", schema = "dbo")
public class Empresa implements Serializable {

    @Id
    @Column(name = "id")
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;

    @Column(name = "cnpj")
    private String cnpj;

    @Column(name = "razao_social")
    private String razaoSocial;

    @Column(name = "nome_fantasia")
    private String nomeFantasia;

    @Column(name = "ativa")
    private boolean ativa;

    @OneToOne
    @JoinColumn(name = "arquivo", referencedColumnName = "id")
    private Arquivo foto;

}
