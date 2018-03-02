/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package stuff;

import java.io.Serializable;
import java.util.List;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.xml.bind.annotation.XmlRootElement;
import javax.xml.bind.annotation.XmlTransient;

@Entity
@XmlRootElement
public class Department implements Serializable {
    
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;
    
    private String name;
    
    @OneToMany(mappedBy="department")
    private List<Users> users;
    
    @OneToMany(mappedBy="department")
    private List<Note> notes;

    public Department() {
    }

    public Department(Integer id, String name, List<Users> users, List<Note> notes) {
        this.id = id;
        this.name = name;
        this.users = users;
        this.notes = notes;
    }

    public Department(Integer id, String name) {
        this.id = id;
        this.name = name;
    }

    public Department(String name) {
        this.name = name;
    }

    public Integer getId() {
        return id;
    }

    public String getName() {
        return name;
    }

    @XmlTransient
    public List<Users> getUsers() {
        return users;
    }

    @XmlTransient
    public List<Note> getNotes() {
        return notes;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public void setName(String name) {
        this.name = name;
    }

    public void setUsers(List<Users> users) {
        this.users = users;
    }

    public void setNotes(List<Note> notes) {
        this.notes = notes;
    }
}
