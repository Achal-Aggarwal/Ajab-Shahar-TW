CREATE TABLE COUPLET_DETAILS(
	ID SERIAL PRIMARY KEY,
	COUPLET VARCHAR(40),
	POET VARCHAR(30),
	AUDIO VARCHAR(30),
	TRANSLATION VARCHAR(30),
	TRANSLITERATION VARCHAR(30),
	MEANING VARCHAR(60)
);