var colors = ['246,32,182', '252,242,218', '149,72,56', '232,202,141', '198,215,173', '21,171,129', '100,84,119', '51,68,44', '243,8,2', '173,24,124', '253,166,139', '60,219,133', '118,216,184', '158,121,19', '108,50,247', '146,134,176', '195,197,157', '254,189,87', '222,120,42', '223,237,153'];
var color1 = '';
var color2 = '';

var textAcceptable = false;

function generateNumbers() {
    //Generates Two Random Numbers
    var random1 = Math.floor(Math.random() * 20) + 1;
    var random2 = Math.floor(Math.random() * 20) + 1;
    
    color1 = colors[random1 - 1];
    color2 = colors[random2 - 1];
    
    var arr = color1.split(',');
    var arr1 = color2.split(',');

    var colorBrightness = (((arr[0] * 299) + (arr[1] * 587) + (arr[2] * 114)) / 1000)
    var colorBrightness1 = (((arr1[0] * 299) + (arr1[1] * 587) + (arr1[2] * 114)) / 1000)

    var colorRange = colorBrightness - colorBrightness1;
   
    $("body").css("background", `linear-gradient(0deg,rgb(${color1}),rgb(${color2})`);

    if(colorRange <= 125 || colorRange <= -125) {
        console.log('Color Range Is Great')
        $("body").css("color", `white`);
    } else {
        console.log('Color Range Is Bad')
        random1 = Math.floor(Math.random() * 20) + 1;
        color1 = colors[random1 - 1];
        $("body").css("color", `black`);
    }

}

$( "#colourPicker" ).click(function() {
    generateNumbers();
  });




