/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package service;

import java.util.List;
import javax.ejb.Stateless;
import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import javax.ws.rs.Consumes;
import javax.ws.rs.DELETE;
import javax.ws.rs.GET;
import javax.ws.rs.POST;
import javax.ws.rs.PUT;
import javax.ws.rs.Path;
import javax.ws.rs.PathParam;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;
import stuff.Note;

/**
 *
 * @author Omistaja
 */
@Stateless
@Path("note")
public class NoteFacadeREST extends AbstractFacade<Note> {

    @PersistenceContext(unitName = "TorniNewPU")
    private EntityManager em;

    public NoteFacadeREST() {
        super(Note.class);
    }

    @POST
    @Override
    @Consumes(MediaType.APPLICATION_JSON)
    public void create(Note entity) {
        super.create(entity);
    }

    @PUT
    @Path("{id}")
    @Consumes(MediaType.APPLICATION_JSON)
    public void edit(@PathParam("id") Integer id, Note entity) {
        super.edit(entity);
    }

    @DELETE
    @Path("{id}")
    public void remove(@PathParam("id") Integer id) {
        super.remove(super.find(id));
    }

    @GET
    @Path("{id}")
    @Produces(MediaType.APPLICATION_JSON)
    public Note find(@PathParam("id") Integer id) {
        return fixDptID(super.find(id));
    }

    @GET
    @Override
    @Produces(MediaType.APPLICATION_JSON)
    public List<Note> findAll() {
        return super.findAll();
    }
    
    @GET
    @Path("/title/{text}")
    @Produces(MediaType.APPLICATION_JSON)
    public List<Note> findByTitle(@PathParam("text") String text) {
        return super.findByText(text);
    }
    
    private Note fixDptID(Note n){
         n.setDepartment_id(n.getDepartment().getId());
         return n;
    }

    /*@GET
    @Path("{from}/{to}")
    @Produces({ MediaType.APPLICATION_JSON})
    public List<Note> findRange(@PathParam("from") Integer from, @PathParam("to") Integer to) {
        return super.findRange(new int[]{from, to});
    }*/

    @GET
    @Path("count")
    @Produces(MediaType.TEXT_PLAIN)
    public String countREST() {
        return String.valueOf(super.count());
    }

    @Override
    protected EntityManager getEntityManager() {
        return em;
    }
    
}
