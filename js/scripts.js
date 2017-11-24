var text = 'Velociraptor is a genus of herbivorous ceratopsid dinosaur that first appeared during the late Maastrichtian stage of the late Cretaceous period.';

var dinosaur = 'triceratops';

var upperTops = dinosaur.toUpperCase();

var dinosaurFix = text.replace('Velociraptor', upperTops);
console.log(dinosaurFix);

console.log(dinosaurFix.length/2);

var halfOfText = dinosaurFix.slice(0, 72);
console.log(halfOfText);