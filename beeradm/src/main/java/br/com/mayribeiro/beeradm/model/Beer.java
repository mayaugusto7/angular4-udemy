package br.com.mayribeiro.beeradm.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;

@Entity
public class Beer {

	@Id
	@GeneratedValue
	private Long id;
	
	private String nome;

	public Beer() {}

	public Beer(String nome) {
		this.nome = nome;
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getNome() {
		return nome;
	}

	public void setNome(String nome) {
		this.nome = nome;
	}

	@Override
	public String toString() {
		return "Beer {id=" + id + ", nome=" + nome + '\'' +"}";
	}
	
	
	
	
	
	
	
}
