/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package stuff;

import java.io.Serializable;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.ManyToOne;
import javax.xml.bind.annotation.XmlRootElement;

@Entity
@XmlRootElement
public class Note implements Serializable {
    
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;
    
    private String title;
    
    private String content;
    
    private boolean astate;
    
    private long atimestamp;
    
    @ManyToOne
    private Department department;

    public Note() {
    }

    public Note(Integer id, String title, String content, boolean astate, long atimestamp, Department department) {
        this.id = id;
        this.title = title;
        this.content = content;
        this.astate = astate;
        this.atimestamp = atimestamp;
        this.department = department;
    }

    public Note(Integer id, String title, String content, boolean astate, long atimestamp) {
        this.id = id;
        this.title = title;
        this.content = content;
        this.astate = astate;
        this.atimestamp = atimestamp;
    }

    public Note(String title, String content, boolean astate, long atimestamp) {
        this.title = title;
        this.content = content;
        this.astate = astate;
        this.atimestamp = atimestamp;
    }

    public Integer getId() {
        return id;
    }

    public String getTitle() {
        return title;
    }

    public String getContent() {
        return content;
    }

    public boolean isAstate() {
        return astate;
    }

    public long getAtimestamp() {
        return atimestamp;
    }

    public Department getDepartment() {
        return department;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public void setContent(String content) {
        this.content = content;
    }

    public void setAstate(boolean astate) {
        this.astate = astate;
    }

    public void setAtimestamp(long atimestamp) {
        this.atimestamp = atimestamp;
    }

    public void setDepartment(Department department) {
        this.department = department;
    }
}
