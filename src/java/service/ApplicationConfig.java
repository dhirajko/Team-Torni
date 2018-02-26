/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package service;

import java.util.Set;
import javax.ws.rs.core.Application;

/**
 *
 * @author Omistaja
 */
@javax.ws.rs.ApplicationPath("tower")
public class ApplicationConfig extends Application {

    @Override
    public Set<Class<?>> getClasses() {
        Set<Class<?>> resources = new java.util.HashSet<>();
        addRestResourceClasses(resources);
        return resources;
    }

    /**
     * Do not modify addRestResourceClasses() method.
     * It is automatically populated with
     * all resources defined in the project.
     * If required, comment out calling this method in getClasses().
     */
    private void addRestResourceClasses(Set<Class<?>> resources) {
        resources.add(service.BarFacadeREST.class);
        resources.add(service.BreakfastFacadeREST.class);
        resources.add(service.FloorcareFacadeREST.class);
        resources.add(service.KitchenFacadeREST.class);
        resources.add(service.MeetingsFacadeREST.class);
        resources.add(service.NoteHistoryFacadeREST.class);
        resources.add(service.PicturesFacadeREST.class);
        resources.add(service.ReceptionFacadeREST.class);
        resources.add(service.RestaurantFacadeREST.class);
        resources.add(service.UsersFacadeREST.class);
    }
    
}
