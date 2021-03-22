Code competition features:

Regn:
Dråber bliver spredt random rundt på canvas bredden
Dråberne har en Z index fra 0-20, hvilket påvirker deres udseende og fald hastighed.
Dråber med en højere z index er tykkere, længere og har en højere fald hastighed, hvilket skaber en falsk 3D effekt.
Dråberne falder hurtigere jo længere tid de er på skærmen.
For at få en god 3D effekm har jeg lavet en "weighted random" metode, som gør at der bliver oprettet felere dråber i baggrunden end i forgrunden

Sne:
Meget ligesom regn i forhold til z index opførel. Større i forgrunden med en højere fald hastighed.
Som noget nyt har sne en random direction parameter som gøre at de falder en i en svingene retning.

Lyn:
Tegner en streg som kører lige ud et stykke tid og efterfølgende drejer til en vilkårlig vinkel indenfor 180 grader
Processen bliver gentaget indtil lynet er udenfor skærmen. 
For hver af ovenstpende iterationer er der 10% chance for at lynet laver en "fork", som egentlig kalder lyn funktionen rekursivt.
Hver af forksene har også 10% chance for at forke ud (dog max 6 forks). Sammenlagt giver det random generede lyn hver gang.
Der er en max vinkel (maxTheta) lynet ikke kan overgå, hvilket sikrer
at lynet ikke begynder at flyve op igen - Den kan dog godt ryge ud i siden af skærmen.

Sol:
Måden hvorpå solen er tegnet er ved at tegne en cirkel først, derefter tegner jeg en lige streg og roter hele canvas en smule
og tegner den næste streg. Vinklen for rotationen bliver beregnet ud fra antal streger. Hele figuren spinner :)

Sky:
Der bliver tegnet en hvid cirkel, som efterfølgende bliver reprodueceret 50 gange i random positioner omkring den første cirkel.
Det giver en effekt af random generede skyer med forskellig form hver gang.
Bruger wind data til at bestemme hvilken retning skyerne flyver i.

Tåge:
Bruger perlin noise til at lave rod i pixels på skærmen, så det kommer til at ligne tåge.

Windpil
Peger i hvilken retning  vinden blæser, og kan vise vind styrken