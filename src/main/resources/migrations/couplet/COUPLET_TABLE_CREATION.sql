--liquibase formatted sql

--changeset JAIDEEP:1
CREATE TABLE COUPLET (
    ID SERIAL,
    TITLE_IN_HINDI VARCHAR(255) NOT NULL,
    TITLE_IN_ENGLISH_TRANSLATION VARCHAR(255) NOT NULL,
    TITLE_IN_ENGLISH_TRANSLITERATION VARCHAR(255) NOT NULL,
    TEXT_IN_HINDI VARCHAR(400) NOT NULL,
    TEXT_IN_ENGLISH_TRANSLITERATION VARCHAR(400) NOT NULL,
    FOOT_NOTES VARCHAR(400),
    AUDIO_FILE_URL VARCHAR(300) NOT NULL,
    DISPLAY_ON_HOME_DASHBOARD BOOLEAN,
    SINGER_ID INT FOREIGN KEY,
    POET_ID INT FOREIGN KEY,
    TRANSLATORS_ID INT FOREIGN KEY
);
--rollback drop table COUPLET;