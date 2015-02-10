

var blueberries = {
    name: "blueberries",
    latin: "Vaccinium corymbosum",
    GrowsOnShrub: '3 tonnes',
    isMeatEater: true,
    Energy: 240,
    Carbohydrates: 14.49,
    Protein: 0.74
};

var grapes = {
    name: "grapes",
    latin: "Vitis vinifera",
    GrowsOnShrub: false,
    Energy: 288,
    Carbohydrates: 18.1,
    Protein: 0.72
};

var currant = {
    name: "currant",
    latin: "Ribes rubrum",
    GrowsOnShrub: true,
    Energy: 234,
    Carbohydrates: 13.8,
    Protein: 1.4
};

var writeBerry = function (berryName) {
    berryName.forEach(function (item) {
    document.write('<dl>');
    
    document.write('<dt>name:</dt>');
    document.write('<dd>' + item.name + '</dd>');
    
    document.write('<dt>latin:</dt>');
    document.write('<dd>' + item.latin + '</dd>');
    
    document.write('<dt>GrowsOnShrub:</dt>');
    document.write('<dd>' + item.GrowsOnShrub + '</dd>');
    
    document.write('<dt>Energy:</dt>');
    document.write('<dd>' + item.Energy + '</dd>');
    
    document.write('<dt>Carbohydrates:</dt>');           document.write('<dd>' + item.Carbohydrates + '</dd>');
    
    document.write('<dt>Protein:</dt>');
    document.write('<dd>' + item.Protein + '</dd>');
    
    
    document.write('</dl>');
    });
};

writeBerry( [currant, grapes, blueberries] );
