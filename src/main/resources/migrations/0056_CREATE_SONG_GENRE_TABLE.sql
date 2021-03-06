--liquibase formatted sql 

--changeset JAIDEEP:56

CREATE TABLE SONG_GENRE(
	ID SERIAL NOT NULL PRIMARY KEY,
	SONG_ID INTEGER,
	GENRE_ID INTEGER,

	CONSTRAINT SONG_ID_FKEY FOREIGN KEY (SONG_ID) REFERENCES SONG(ID),
	CONSTRAINT GENRE_ID_FKEY FOREIGN KEY (GENRE_ID) REFERENCES GENRE(ID)
);