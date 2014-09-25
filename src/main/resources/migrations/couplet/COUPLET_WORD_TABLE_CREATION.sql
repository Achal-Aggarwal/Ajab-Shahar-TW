--liquibase formatted sql

--changeset JAIDEEP:9
CREATE TABLE COUPLET_WORD (
    ID SERIAL,
    COUPLET_ID INT FOREIGN KEY, 
    WORD_ID INT FOREIGN KEY,
    CONSTRAINT COUPLET_AND_WORD UNIQUE(COUPLET_ID, WORD_ID)
);

--rollback drop table COUPLET_WORD;