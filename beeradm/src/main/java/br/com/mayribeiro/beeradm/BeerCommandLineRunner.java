package br.com.mayribeiro.beeradm;

import java.util.stream.Stream;

import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

import br.com.mayribeiro.beeradm.model.Beer;
import br.com.mayribeiro.beeradm.repository.BeerRepository;

@Component
public class BeerCommandLineRunner implements CommandLineRunner {

	private final BeerRepository beerRepository;
	
	public BeerCommandLineRunner(BeerRepository beerRepository) {
		this.beerRepository = beerRepository;
	}

	@Override
	public void run(String... strings) throws Exception {
	
		Stream.of("Kentucky Brunch Brand Stout", "Good Morning", "Very Hazy", "King Julius",
                "Budweiser", "Coors Light", "PBR").forEach(name ->
                beerRepository.save(new Beer(name)));
		
		beerRepository.findAll().forEach(System.out::println);
	}

}
