--liquibase formatted sql

--changeset JAIDEEP:10
CREATE TABLE COUPLET_NOTE (
    ID SERIAL,
    COUPLET_ID INT FOREIGN KEY, 
    NOTE_ID INT FOREIGN KEY,
    CONSTRAINT COUPLET_AND_NOTE UNIQUE(COUPLET_ID, NOTE_ID);
);

--rollback drop table COUPLET_NOTE;