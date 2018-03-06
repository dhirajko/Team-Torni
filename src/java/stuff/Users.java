/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package stuff;

import com.fasterxml.jackson.annotation.JsonBackReference;
import java.io.Serializable;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.ManyToOne;
import javax.persistence.Transient;
import javax.xml.bind.annotation.XmlRootElement;

@Entity
@XmlRootElement
public class Users implements Serializable {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;
    
    private String name;
    
    private String password;
    
    //0=Worker, 1=Manager
    private Integer rights;
    
    //The department which notes they will get
    @ManyToOne
    @JsonBackReference
    private Department department;
    
    //@JoinColumn(name = "department_id")
    @Transient
    private int department_id;

    public Users() {
    }

    public Users(Integer id, String name, String password, Integer rights, Department department) {
        this.id = id;
        this.name = name;
        this.password = password;
        this.rights = rights;
        this.department = department;
        this.department_id = department.getId();
    }

    public Users(Integer id, String name, String password, Integer rights) {
        this.id = id;
        this.name = name;
        this.password = password;
        this.rights = rights;
    }

    public Users(String name, String password, Integer rights) {
        this.name = name;
        this.password = password;
        this.rights = rights;
    }

    public Integer getId() {
        return id;
    }

    public String getName() {
        return name;
    }

    public String getPassword() {
        return password;
    }

    public Integer getRights() {
        return rights;
    }

    public Department getDepartment() {
        return department;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public void setName(String name) {
        this.name = name;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public void setRights(Integer rights) {
        this.rights = rights;
    }

    public void setDepartment(Department department) {
        this.department = department;
        this.department_id = department.getId();
    }

    public int getDepartment_id() {
        return department_id;
    }

    public void setDepartment_id(int department_id) {
        this.department_id = department_id;
    }
}
