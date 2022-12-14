package receipes_founder.backend.model.entities;

import java.util.ArrayList;

import org.apache.solr.client.solrj.beans.Field;

public class Receipes {

    @Field public String nombre;
    @Field public ArrayList ingredientes;
    @Field public String comensales;
    @Field public String duracion;
    @Field public String para;
    @Field public String dificultad;
    @Field public ArrayList apartados;

    public Receipes(String nombre, ArrayList ingredientes, String comensales, String duracion, String para, String dificultad, ArrayList apartados) {
        this.nombre = nombre;
        this.ingredientes = ingredientes;
        this.comensales = comensales;
        this.duracion = duracion;
        this.para = para;
        this.dificultad = dificultad;
        this.apartados = apartados;
    }

    public Receipes() {}
}
