// ADI
// LUZERO HOMESCREEN D3 Ver 1.0

// PARAMS
// MODIFY THESE VALUES TO CHANGE DISPLAY
var suggested = 45;
var current = 30;
var limit = 100;
// PARAMS

var width = 500;
var height = 300;

var bulb_height = height/3;
var bulb_width = width/5;

var y_shift = height/10;

var svg = d3.select("body").append("svg")
    .attr("width", width)
    .attr("height", height);

var canvas = svg.append("svg:rect").
    attr("x", 000).
    attr("y", 000).
    attr("height", height).
    attr("width", width).
    attr("fill", "#FFFFFF");
  
var house = svg.append("svg:image")
    .attr("xlink:href", "http://images.clipartpanda.com/house-outline-clipart-house_outline.png")
    .attr("width", bulb_width*1.5)
    .attr("height", bulb_height*1.5)
    .attr("x", (width - (bulb_width*1.5))/2)
    .attr("y", (height - (bulb_height*1.5))/2 - 15 + y_shift);  
  
var bulb = svg.append("svg:image")
    .attr("xlink:href", "http://www.clker.com/cliparts/O/u/W/d/K/N/light-bulb-outline-md.png")
    .attr("width", bulb_width)
    .attr("height", bulb_height)
    .attr("x", (width-bulb_width)/2)
    .attr("y",(height-bulb_height)/2 + y_shift);
    
	var overrec = svg.append("svg:rect")
		.attr("x",(width-bulb_width)/2 + bulb_width*0.05)
    .attr("y", (height-bulb_height)/2 + bulb_height - bulb_height*current/limit + y_shift)
    .attr("height", bulb_height*current/limit)
    .attr("width", bulb_width*0.9)
    .style("opacity", 0.85);     
    
var tip = svg.append("text")
        .attr("x", (width / 2))             
        .attr("y", height*0.9)
        .attr("text-anchor", "middle")  
        .style("font-size", "16px")
        .attr("font-family", "Calibri", "Ebrima", "sans-serif");    
    
if (suggested-5 > current)
{
		overrec.attr("fill", "#98FB98");
    tip.text("Usted Puede Usar más Electricidad");
}else if (current - suggested > 5)
{
  overrec.attr("fill", "#CD5C5C");
  tip.text("Trate de Usar Menos Electricidad");
}else
{
  overrec.attr("fill", "#EEE8AA");
  tip.text("Usted Está Cumpliendo su Objetivo");
}

svg.append("text")
        .attr("x", (width / 2))             
        .attr("y", height*0.12)
        .attr("text-anchor", "middle")  
        .style("font-size", "24px") 
        .attr("font-family", "Ebrima", "sans-serif")
        .text("Buenos Dias! ☀");
        
        svg.append("text")
        .attr("x", (width / 2))             
        .attr("y", height*0.2)
        .attr("text-anchor", "middle")  
        .style("font-size", "16px") 
        .attr("font-family", "Calibri", "Ebrima", "sans-serif")
        .text("5:00 PM, Viernes, 7 de Abril");
