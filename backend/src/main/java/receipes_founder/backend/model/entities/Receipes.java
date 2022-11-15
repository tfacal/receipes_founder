package receipes_founder.backend.model.entities;

import org.apache.solr.client.solrj.beans.Field;

public class Receipes {

    @Field public String nombre;
    @Field public String ingredientes;
    @Field public String comensales;
    @Field public String duracion;
    @Field public String para;
    @Field public String dificultad;

    public Receipes(String nombre, String ingredientes, String comensales, String duracion, String para, String dificultad) {
        this.nombre = nombre;
        this.ingredientes = ingredientes;
        this.comensales = comensales;
        this.duracion = duracion;
        this.para = para;
        this.dificultad = dificultad;
    }

    public Receipes() {}
}
