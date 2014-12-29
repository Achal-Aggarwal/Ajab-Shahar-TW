package org.ajabshahar.platform.models;


import javax.persistence.*;
import java.util.Set;

@Entity
@Table(name = "SONG_TEXT")
public class SongText {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;

    @Column(name = "REFRAIN_ORIGINAL")
    private String refrainOriginal;

    @Column(name = "REFRAIN_ENGLISH_TRANSLATION")
    private String refrainEnglishTranslation;

    @Column(name = "REFRAIN_ENGLISH_TRANSLITERATION")
    private String refrainEnglishTransliteration;

    @OneToMany(fetch = FetchType.EAGER, cascade = CascadeType.ALL)
    @JoinTable(name = "SONG_TEXT_SONG_TEXT_CONTENT", joinColumns = @JoinColumn(name = "SONG_TEXT_ID"),
            inverseJoinColumns = @JoinColumn(name = "SONG_TEXT_CONTENT_ID"))
    private Set<SongTextContent> songTextContentSet;

    public String getRefrainOriginal() {
        return refrainOriginal;
    }

    public void setRefrainOriginal(String refrainOriginal) {
        this.refrainOriginal = refrainOriginal;
    }

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public String getRefrainEnglishTranslation() {
        return refrainEnglishTranslation;
    }

    public void setRefrainEnglishTranslation(String refrainEnglishTranslation) {
        this.refrainEnglishTranslation = refrainEnglishTranslation;
    }

    public String getRefrainEnglishTransliteration() {
        return refrainEnglishTransliteration;
    }

    public void setRefrainEnglishTransliteration(String refrainEnglishTransliteration) {
        this.refrainEnglishTransliteration = refrainEnglishTransliteration;
    }

    public Set<SongTextContent> getSongTextContentSet() {
        return songTextContentSet;
    }

    public void setSongTextContentSet(Set<SongTextContent> songTextContentSet) {
        this.songTextContentSet = songTextContentSet;
    }

}
