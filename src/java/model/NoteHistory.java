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
public class NoteHistory implements Serializable {
    
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;
    
    //Message that the note contains
    private String content;
    
    //False = not done, True = done
    private boolean astate;
    
    //when was the note submitted
    private long atimestamp;

    public NoteHistory() {
    }

    public NoteHistory(Integer id, String content, boolean state, long timestamp) {
        this.id = id;
        this.content = content;
        this.astate = state;
        this.atimestamp = timestamp;
    }

    public NoteHistory(String content, boolean state, long timestamp) {
        this.content = content;
        this.astate = state;
        this.atimestamp = timestamp;
    }

    public NoteHistory(String content, boolean state) {
        this.content = content;
        this.astate = state;
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getContent() {
        return content;
    }

    public void setContent(String content) {
        this.content = content;
    }

    public boolean isAstate() {
        return astate;
    }

    public void setAstate(boolean astate) {
        this.astate = astate;
    }

    public long getAtimestamp() {
        return atimestamp;
    }

    public void setAtimestamp(long atimestamp) {
        this.atimestamp = atimestamp;
    }    
}
