package org.ajabshahar.platform.models;

import javax.persistence.*;

@Entity
@Table(name = "WORD")
@NamedQueries({
        @NamedQuery(
                name = "org.ajabshahar.platform.models.WordDetails.findAll",
                query = "SELECT p FROM WordDetails p"
        )
})

public class WordDetails {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;

    @Column(name = "NAME", nullable = false)
    private String NAME;

    @Column(name = "SYNONYM", nullable = false)
    private String SYNONYM;

    @Column(name = "CATEGORY", nullable = false)
    private String CATEGORY;

    @Column(name = "MEANING", nullable = false)
    private String MEANING;

    @Column(name = "SHOWONLANDINGPAGE", nullable = false)
    private String SHOWONLANDINGPAGE;



    public long getId() {
        return id;
    }

    public String getNAME() {
        return NAME;
    }

    public void setNAME(String NAME) {
        this.NAME = NAME;
    }

    public String getSYNONYM() {
        return SYNONYM;
    }

    public void setSYNONYM(String SYNONYM) {
        this.SYNONYM=SYNONYM;
    }

    public String getCATEGORY() {
        return CATEGORY;
    }

    public void setCATEGORY(String CATEGORY) {
        this.CATEGORY=CATEGORY;
    }

    public String getMEANING() {
        return MEANING;
    }

    public void setMEANING(String MEANING) {
        this.MEANING=MEANING;
    }

    public String getSHOWONLANDINGPAGE() {
        return SHOWONLANDINGPAGE;
    }

    public void setSHOWONLANDINGPAGE(String SHOWONLANDINGPAGE) {
        this.SHOWONLANDINGPAGE=SHOWONLANDINGPAGE;
    }


}