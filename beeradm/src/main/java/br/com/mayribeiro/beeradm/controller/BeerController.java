package br.com.mayribeiro.beeradm.controller;

import java.util.Collection;
import java.util.stream.Collectors;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import br.com.mayribeiro.beeradm.model.Beer;
import br.com.mayribeiro.beeradm.repository.BeerRepository;

@RestController
public class BeerController {

	private BeerRepository beerRepositor;

	public BeerController(BeerRepository beerRepositor) {
		this.beerRepositor = beerRepositor;
	}

	@GetMapping("/good-beers")
	@CrossOrigin(origins = "http://localhost:4200")
	public Collection<Beer> goodBeers() {

		return beerRepositor.findAll().stream()
				.filter(this::isGreat)
				.collect(Collectors.toList());
	}

	private boolean isGreat(Beer beer) {
		return !beer.getNome().equals("Budweiser") &&
				!beer.getNome().equals("Coors Light") &&
				!beer.getNome().equals("PBR");
	}

}
