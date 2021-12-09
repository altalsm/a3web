// --------- FAQ------------------
// -------- stackoverflow and github -------------------

details[open] summary ~ * {
  animation: sweep .10s ease-in-out;
}
@keyframes sweep {
  0%    {opacity: 0; margin-top: -10px}
  100%  {opacity: 1; margin-top: 0px}
}

//Javascript Graph of client increase over 5 years - Allison:
//Reference: https://www.w3schools.com/js/js_comments.asp
//Reference: https://www.javatpoint.com/external-javascript-file


var xArray = [50,60,70,80,90,100,110,120,130,140,150];
var yArray = [7,8,8,9,9,9,10,11,14,14,15];

// Define Data
var data = [{
  x:xArray,
  y:yArray,
  mode:"markers"
}];

// Define Layout
var layout = {
  xaxis: {range: [40, 160], title: "Square Meters"},
  yaxis: {range: [5, 16], title: "Price in Millions"},  
  title: "House Prices vs. Size"
};

// Display using Plotly
Plotly.newPlot("myPlot", data, layout);

