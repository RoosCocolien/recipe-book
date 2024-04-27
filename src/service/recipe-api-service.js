// fetch recipes

// getAllRecipes() {}
// use within this function a fetch from an url

// RECIPE's
// https://www.themealdb.com/api.php

// zie CatsService.v1.js ***
/**
 * We willen gebruik maken vam een separation of concerns
 * Want stel dat we in ons component een fetch hebben gebruikt
 * En op de server vindt een wijziding plaats in de API, en we
 * gebrioken de fetch op 15 plekken, dan willen we
 * dat toch beter indelen.
 * De taken van de klassen in onze code gaan we scheiden in klassen
 * die een verantwoordelijkheid hebben met betrekking tot de
 * WEERGAVE (VIEW)
 * BEHEER VAN DATA + aanbieden van de data als dienst (SERVICE)
 * De code van de view laag mag geen fetch statements bevatten
 * En ook geen statements met betrekking tot de lokale dataopaslag
 * data die deze laag nodig heeft, dient de view laag op te vragen
 * bij een SERVICE uit de SERVICE laag
 * 
 * De service geeft ALTIJD een promise terug aan de view laag
 * Deze moet door de view laag verder worden afgehandeld
 * De view laag is dus de promise consumer van de service laag
 * De service laag weet niets van de data opslag
 * 
 * De service laag weet wel waar en hoe de data is opgeslagen
 * Maar de service laag weet niks van de view.
 * Statements met betrekking tot de DOM (document.querySelector)
 * horen niet thuis in de service laag
 * 
 * Zie app-assignment3ab.js
 * Zie app-assignment3c.js
 * --> die importeren de juiste v3 bestanden
 * Maak een file aan ...service.js in de service laag
 * Pas daarna de bestanden aan:
 * assignment3a.v3
 * assignment3b.v3
 * assignment3c.v3
 * Zodat deze de CatsService gebruiken en geen fetch statements meer bevatten
 */
