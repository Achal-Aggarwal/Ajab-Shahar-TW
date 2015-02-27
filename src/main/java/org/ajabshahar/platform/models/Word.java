package org.ajabshahar.platform.models;

import com.fasterxml.jackson.annotation.JsonIdentityInfo;
import com.fasterxml.jackson.annotation.JsonManagedReference;
import com.fasterxml.jackson.annotation.ObjectIdGenerators;
import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;
import java.util.HashSet;
import java.util.Set;

@Entity
@Setter
@Getter
@Table(name = "WORD")
@JsonIdentityInfo(generator = ObjectIdGenerators.IntSequenceGenerator.class)
public class Word {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;

    @Column(name = "WORD_ORIGINAL", nullable = false)
    private String wordOriginal;

    @Column(name = "WORD_TRANSLATION", nullable = false)
    private String wordTranslation;

    @Column(name = "WORD_TRANSLITERATION", nullable = false)
    private String wordTransliteration;

    @Column(name = "ENGLISH_INTRO_EXCERPT", nullable = true)
    private String englishIntroExcerpt;

    @Column(name = "HINDI_INTRO_EXCERPT", nullable = true)
    private String hindiIntroExcerpt;

    @Column(name = "SHOW_ON_LANDING_PAGE", nullable = false)
    private Boolean showOnLandingPage;

    @OneToMany(fetch = FetchType.EAGER, mappedBy = "word")
    @JsonManagedReference
    private Set<WordIntroduction> wordIntroductions;

    @ManyToMany(fetch = FetchType.EAGER)
    @JoinTable(name = "WORD_REFLECTION", joinColumns = {@JoinColumn(name = "WORD_ID", referencedColumnName = "ID")},
            inverseJoinColumns = {@JoinColumn(name = "REFLECTION_ID", referencedColumnName = "ID")})
    private Set<Reflection> reflections;

    @ManyToMany(fetch = FetchType.EAGER)
    @JoinTable(name = "RELATED_WORDS", joinColumns = {@JoinColumn(name = "WORD_ID", referencedColumnName = "ID")},
            inverseJoinColumns = {@JoinColumn(name = "RELATED_WORD_ID", referencedColumnName = "ID")})
    private Set<Word> relatedWords = new HashSet<>();

    @ManyToMany(fetch = FetchType.EAGER,mappedBy = "words")
    private Set<Song> songs;

    @ManyToMany(fetch = FetchType.EAGER)
    @JoinTable(name = "WORD_SYNONYMS", joinColumns = {@JoinColumn(name = "WORD_ID", referencedColumnName = "ID")},
            inverseJoinColumns = {@JoinColumn(name = "SYNONYM_WORD_ID", referencedColumnName = "ID")})
    private Set<Word> synonyms = new HashSet<>();

    @ManyToMany(fetch = FetchType.EAGER)
    @JoinTable(name = "WORD_WRITER", joinColumns = {@JoinColumn(name = "WORD_ID",referencedColumnName = "ID")},
            inverseJoinColumns = {@JoinColumn(name="WRITER_ID", referencedColumnName = "ID")})
    private Set<PersonDetails> writers;

}