package receipes_founder.backend.rest.controllers;

import receipes_founder.backend.model.entities.Receipes;
import receipes_founder.backend.model.entities.RespuestaSolr;
import org.apache.solr.client.solrj.SolrClient;
import org.apache.solr.client.solrj.SolrQuery;
import org.apache.solr.client.solrj.SolrServerException;
import org.apache.solr.client.solrj.impl.HttpSolrClient;
import org.apache.solr.client.solrj.response.QueryResponse;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.io.IOException;
import java.text.ParseException;
import java.util.List;

@RestController
@RequestMapping("/receipes_founder")
public class SolrController {

    private final String SOLR_URL = "http://localhost:8983/solr/receipesData";

    private HttpSolrClient getSolrClient(){
        return new HttpSolrClient.Builder(SOLR_URL)
                .withConnectionTimeout(10000)
                .withSocketTimeout(60000)
                .build();
    }

    @PostMapping("/receipes")
    private RespuestaSolr obtenerRecetas(@RequestBody ReceipesQueryParams queryParams)
            throws SolrServerException, IOException, ParseException {
        final SolrClient client = getSolrClient();

        final String queryStr =
                        "nombre:\"" + queryParams.getName() + "\" && " +
                        "comensales:\"" + queryParams.getComensales() + "\" && " +
                        "dificultad:" + queryParams.getDificultad() + " && " +
                        "duracion:\"" + queryParams.getDuracion() + "\" && " +
                        "ingredientes:\"" + queryParams.getIngredientes() + "\" && " +
                        "para:" + queryParams.getPara();
        final SolrQuery query = new SolrQuery(queryStr);

        // Ordenar por duracion
        query.setSort("duracion", SolrQuery.ORDER.desc);

        // Paginacion
        query.setStart((queryParams.getPage() - 1) * queryParams.getSize());
        query.setRows(queryParams.getSize());

        final QueryResponse response = client.query(query);
        final List<Receipes> resultadoBusqueda = response.getBeans(Receipes.class);

        RespuestaSolr resultado = new RespuestaSolr();
        resultado.setResultadoBusqueda(resultadoBusqueda);

        return resultado;
    }
}
