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
public class Pictures implements Serializable{
    
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;
    
    //path where the picture is located
    private String apath;

    public Pictures() {
    }

    public Pictures(Integer id, String apath) {
        this.id = id;
        this.apath = apath;
    }

    public Pictures(String apath) {
        this.apath = apath;
    }

    public Integer getId() {
        return id;
    }

    public String getApath() {
        return apath;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public void setApath(String apath) {
        this.apath = apath;
    }
    
    
}
