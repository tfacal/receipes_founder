package receipes_founder.backend.rest.controllers;

import receipes_founder.backend.model.entities.Receipes;
import receipes_founder.backend.model.entities.RespuestaSolr;
import org.apache.solr.client.solrj.SolrClient;
import org.apache.solr.client.solrj.SolrQuery;
import org.apache.solr.client.solrj.SolrServerException;
import org.apache.solr.client.solrj.impl.HttpSolrClient;
import org.apache.solr.client.solrj.response.QueryResponse;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.io.IOException;
import java.text.ParseException;
import java.util.ArrayList;
import java.util.List;

@CrossOrigin("*")
@RestController
@RequestMapping("/receipes_founder")
public class SolrController {

	private final String SOLR_URL = "http://localhost:8983/solr/receipesData";

	private HttpSolrClient getSolrClient() {
		return new HttpSolrClient.Builder(SOLR_URL).withConnectionTimeout(10000).withSocketTimeout(60000).build();
	}

	private final String getIngredientes(String[] ingredientes) {
		String query = "";
		if (ingredientes.length > 0) {
			for (int i = 0; i < ingredientes.length; i++) {
				if (i == (ingredientes.length - 1)) {
					query += "ingredientes:" + ingredientes[i];
				} else {
					query += "ingredientes:" + ingredientes[i] + " && ";
				}
			}
		} else {
			query = "*";
		}
		return query;
	}

	private String getDuration(String duracion) {
		if (!duracion.equals("*")) {
			return String.format("%04d", Integer.parseInt(duracion));
		} else {
			return "*";
		}
	}

	@PostMapping("/receipes")
	private RespuestaSolr obtenerRecetas(@RequestBody ReceipesQueryParams queryParams)
			throws SolrServerException, IOException, ParseException {
		final SolrClient client = getSolrClient();

		SolrQuery parameters = new SolrQuery();

		parameters.setQuery("nombre:" + queryParams.getNombre() + " && " + "duracion:[* TO "
				+ getDuration(queryParams.getDuracion()) + "]"
				+ " && " + "comensales:" + queryParams.getComensales() + " && " + "para:" + queryParams.getPara()
				+ " && " + getIngredientes(queryParams.getIngredientes().split((","))) + " && "
				+ "dificultad:" + queryParams.getDificultad());

		parameters.setFields("nombre", "duracion", "comensales", "dificultad", "duracion", "para", "ingredientes",
				"apartados");

		QueryResponse response = null;

		// Ordenar por duracion
		parameters.setSort("duracion", SolrQuery.ORDER.asc);

		// Paginacion
		parameters.setStart((queryParams.getPagina() - 1) * queryParams.getTama??o());
		parameters.setRows(queryParams.getTama??o());
		response = client.query(parameters);
		final List<Receipes> resultadoBusqueda = response.getBeans(Receipes.class);

		RespuestaSolr resultado = new RespuestaSolr();
		resultado.setResultadoBusqueda(resultadoBusqueda);

		return resultado;
	}

}
