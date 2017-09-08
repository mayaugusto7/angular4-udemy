package br.com.mayribeiro.beeradm.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import br.com.mayribeiro.beeradm.model.Beer;

public interface BeerRepository extends JpaRepository<Beer, Long>{

}
