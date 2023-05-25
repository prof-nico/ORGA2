# Les Medias-Queries

Les **Medias-Queries** sont des conditions qui permettent de définir des règles CSS qui s'appliquent uniquement si la condition est remplie.

Elles sont composées d'un _média_ et d'une _expression_. Le média est l'élément qui détermine la condition à remplir, tandis que l'expression est la valeur à comparer. La syntaxe est la suivante :

```css
@media <média> and (<expression>) … {
  /* … */
}
```

Par exemple, pour définir des règles CSS qui s'appliquent uniquement si la largeur de l'écran est inférieure ou égale à 768 pixels, avec une orientation en portrait, on écrirait :

```css
@media screen
  and (max-width: 768px)
  and (orientation: portrait) {
  /* … */
}
```

## Les médias

Les médias sont les éléments qui déterminent la condition à remplir. Ils peuvent être de trois types :

- `screen` : Destiné principalement aux écrans
- `print` : Destiné au contenu paginé et les documents visualisés sur un écran en aperçu d'impression.
- `all` : Applicable à tous les appareils.

## Les expressions

Les expressions sont les valeurs à comparer. Elles sont composées d'un _média feature_ et d'une _valeur_. Le média feature est le nom de la caractéristique à comparer, tandis que la valeur est la valeur à comparer. Par exemple, pour comparer la largeur de l'écran à 768 pixels, on écrirait :

```css
@media screen and (width: 768px) {
  /* … */
}
```

### Les média features

Les média features sont des propriétés CSS qui permettent de définir des conditions à remplir. Les média features les plus courantes sont les suivantes :

- `min-width` : largeur minimale de l'écran.
- `max-width` : largeur maximale de l'écran.
- `orientation` : orientation de l'écran (`portrait` ou `paysage`).
- `aspect-ratio` : rapport largeur/hauteur de l'écran.
- `resolution` : résolution de l'écran.

[MDN : Liste de toutes les medias features](https://developer.mozilla.org/fr/docs/Web/CSS/@media#caract%C3%A9ristiques_de_m%C3%A9dia)

### Les valeurs

Les valeurs sont les valeurs à comparer aux média features. Les valeurs les plus courantes sont les suivantes :

- `px` : pixels.
- `em` : unité de mesure relative à la taille de la police de l'élément.
- `rem` : unité de mesure relative à la taille de la police de la racine.
- `vw` : pourcentage de la largeur de la fenêtre.
- `vh` : pourcentage de la hauteur de la fenêtre.
- `dpcm` : pourcentage de la résolution de l'écran en pixels par centimètre.
- `dpi` : pourcentage de la résolution de l'écran en pixels par pouce.
- `dppx` : pourcentage de la résolution de l'écran en pixels par pixel.

Pour en savoir plus :

- [MDN : Media Queries](https://developer.mozilla.org/fr/docs/Web/CSS/Media_Queries)
- [MDN : @media](https://developer.mozilla.org/fr/docs/Web/CSS/@media)