--changeset JAIDEEP:3
CREATE TABLE COUPLET_STRING (
    ID SERIAL,
    COUPLET_ID INT FOREIGN KEY, 
    AUDIO_FILE_URL VARCHAR(300) NOT NULL,
    SINGER_ID INT FOREIGN KEY
);
--rollback drop table COUPLET_STRING;