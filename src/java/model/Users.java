/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package model;

import java.io.Serializable;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.xml.bind.annotation.XmlRootElement;

@Entity
@XmlRootElement
public class Users implements Serializable {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;
    
    private String username;
    
    private String password;
    
    //0=Worker, 1=Manager
    private Integer rights;
    
    //The department which notes they will get
    private String department;

    public Users() {
    }

    public Users(Integer id, String username, String password, Integer rights, String department) {
        this.id = id;
        this.username = username;
        this.password = password;
        this.rights = rights;
        this.department = department;
    }

    public Users(String username, String password, Integer rights, String department) {
        this.username = username;
        this.password = password;
        this.rights = rights;
        this.department = department;
    }

    public Integer getId() {
        return id;
    }

    public String getUsername() {
        return username;
    }

    public String getPassword() {
        return password;
    }

    public Integer getRights() {
        return rights;
    }

    public String getDepartment() {
        return department;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public void setRights(Integer rights) {
        this.rights = rights;
    }

    public void setDepartment(String department) {
        this.department = department;
    }
    
    
}
