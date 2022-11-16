package receipes_founder.backend.model.entities;

import java.util.List;

public class RespuestaSolr {

    private List resultadoBusqueda;

    public RespuestaSolr() {
    }

    public List getResultadoBusqueda() {
        return resultadoBusqueda;
    }

    public void setResultadoBusqueda(List resultadoBusqueda) {
        this.resultadoBusqueda = resultadoBusqueda;
    }
}
