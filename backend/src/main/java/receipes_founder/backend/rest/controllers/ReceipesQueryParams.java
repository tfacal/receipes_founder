package receipes_founder.backend.rest.controllers;

import java.util.ArrayList;

public class ReceipesQueryParams {

	private String nombre;
	private String comensales;
	private String duracion;
	private String para;
	private String ingredientes;
	private String dificultad;
	private int pagina;
	private int tamaño;

	public ReceipesQueryParams() {
	}

	public String getNombre() {
		return nombre;
	}

	public void setNombre(String nombre) {
		this.nombre = nombre;
	}

	public String getComensales() {
		return comensales;
	}

	public void setComensales(String comensales) {
		this.comensales = comensales;
	}

	public String getDuracion() {
		return duracion;
	}

	public void setDuracion(String duracion) {
		this.duracion = duracion;
	}

	public String getPara() {
		return para;
	}

	public void setPara(String para) {
		this.para = para;
	}

	public String getIngredientes() {
		return ingredientes;
	}

	public void setIngredientes(String ingredientes) {
		this.ingredientes = ingredientes;
	}

	public String getDificultad() {
		return dificultad;
	}

	public void setDificultad(String dificultad) {
		this.dificultad = dificultad;
	}

	public int getPagina() {
		return pagina;
	}

	public void setPagina(int pagina) {
		this.pagina = pagina;
	}

	public int getTamaño() {
		return tamaño;
	}

	public void setTamaño(int tamaño) {
		this.tamaño = tamaño;
	}

}
