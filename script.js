var elementData=`
1|H|Hydrogen|1.008|nonmetal|1|1
2|He|Helium|4.003|noble|18|1
3|Li|Lithium|6.94|metal|1|2
4|Be|Beryllium|9.012|metal|2|2
5|B|Boron|10.81|metalloid|13|2
6|C|Carbon|12.011|nonmetal|14|2
7|N|Nitrogen|14.007|nonmetal|15|2
8|O|Oxygen|15.999|nonmetal|16|2
9|F|Fluorine|18.998|nonmetal|17|2
10|Ne|Neon|20.180|noble|18|2
11|Na|Sodium|22.990|metal|1|3
12|Mg|Magnesium|24.305|metal|2|3
13|Al|Aluminum|26.982|metal|13|3
14|Si|Silicon|28.085|metalloid|14|3
15|P|Phosphorus|30.974|nonmetal|15|3
16|S|Sulfur|32.06|nonmetal|16|3
17|Cl|Chlorine|35.45|nonmetal|17|3
18|Ar|Argon|39.948|noble|18|3
19|K|Potassium|39.098|metal|1|4
20|Ca|Calcium|40.078|metal|2|4
21|Sc|Scandium|44.956|metal|3|4
22|Ti|Titanium|47.867|metal|4|4
23|V|Vanadium|50.942|metal|5|4
24|Cr|Chromium|51.996|metal|6|4
25|Mn|Manganese|54.938|metal|7|4
26|Fe|Iron|55.845|metal|8|4
27|Co|Cobalt|58.933|metal|9|4
28|Ni|Nickel|58.693|metal|10|4
29|Cu|Copper|63.546|metal|11|4
30|Zn|Zinc|65.38|metal|12|4
31|Ga|Gallium|69.723|metal|13|4
32|Ge|Germanium|72.630|metalloid|14|4
33|As|Arsenic|74.922|metalloid|15|4
34|Se|Selenium|78.971|nonmetal|16|4
35|Br|Bromine|79.904|nonmetal|17|4
36|Kr|Krypton|83.798|noble|18|4
37|Rb|Rubidium|85.468|metal|1|5
38|Sr|Strontium|87.62|metal|2|5
39|Y|Yttrium|88.906|metal|3|5
40|Zr|Zirconium|91.224|metal|4|5
41|Nb|Niobium|92.906|metal|5|5
42|Mo|Molybdenum|95.95|metal|6|5
43|Tc|Technetium|[98]|metal|7|5
44|Ru|Ruthenium|101.07|metal|8|5
45|Rh|Rhodium|102.906|metal|9|5
46|Pd|Palladium|106.42|metal|10|5
47|Ag|Silver|107.868|metal|11|5
48|Cd|Cadmium|112.414|metal|12|5
49|In|Indium|114.818|metal|13|5
50|Sn|Tin|118.710|metal|14|5
51|Sb|Antimony|121.760|metalloid|15|5
52|Te|Tellurium|127.60|metalloid|16|5
53|I|Iodine|126.904|nonmetal|17|5
54|Xe|Xenon|131.293|noble|18|5
55|Cs|Caesium|132.905|metal|1|6
56|Ba|Barium|137.327|metal|2|6
57|La|Lanthanum|138.905|metal|3|6
58|Ce|Cerium|140.116|metal|3|6
59|Pr|Praseodymium|140.908|metal|3|6
60|Nd|Neodymium|144.242|metal|3|6
61|Pm|Promethium|[145]|metal|3|6
62|Sm|Samarium|150.36|metal|3|6
63|Eu|Europium|151.964|metal|3|6
64|Gd|Gadolinium|157.25|metal|3|6
65|Tb|Terbium|158.925|metal|3|6
66|Dy|Dysprosium|162.500|metal|3|6
67|Ho|Holmium|164.930|metal|3|6
68|Er|Erbium|167.259|metal|3|6
69|Tm|Thulium|168.934|metal|3|6
70|Yb|Ytterbium|173.045|metal|3|6
71|Lu|Lutetium|174.967|metal|3|6
72|Hf|Hafnium|178.49|metal|4|6
73|Ta|Tantalum|180.948|metal|5|6
74|W|Tungsten|183.84|metal|6|6
75|Re|Rhenium|186.207|metal|7|6
76|Os|Osmium|190.23|metal|8|6
77|Ir|Iridium|192.217|metal|9|6
78|Pt|Platinum|195.084|metal|10|6
79|Au|Gold|196.967|metal|11|6
80|Hg|Mercury|200.592|metal|12|6
81|Tl|Thallium|204.38|metal|13|6
82|Pb|Lead|207.2|metal|14|6
83|Bi|Bismuth|208.980|metal|15|6
84|Po|Polonium|[209]|metalloid|16|6
85|At|Astatine|[210]|metalloid|17|6
86|Rn|Radon|[222]|noble|18|6
87|Fr|Francium|[223]|metal|1|7
88|Ra|Radium|[226]|metal|2|7
89|Ac|Actinium|[227]|metal|3|7
90|Th|Thorium|232.038|metal|3|7
91|Pa|Protactinium|231.036|metal|3|7
92|U|Uranium|238.029|metal|3|7
93|Np|Neptunium|[237]|metal|3|7
94|Pu|Plutonium|[244]|metal|3|7
95|Am|Americium|[243]|metal|3|7
96|Cm|Curium|[247]|metal|3|7
97|Bk|Berkelium|[247]|metal|3|7
98|Cf|Californium|[251]|metal|3|7
99|Es|Einsteinium|[252]|metal|3|7
100|Fm|Fermium|[257]|metal|3|7
101|Md|Mendelevium|[258]|metal|3|7
102|No|Nobelium|[259]|metal|3|7
103|Lr|Lawrencium|[266]|metal|3|7
104|Rf|Rutherfordium|[267]|metal|4|7
105|Db|Dubnium|[268]|metal|5|7
106|Sg|Seaborgium|[269]|metal|6|7
107|Bh|Bohrium|[270]|metal|7|7
108|Hs|Hassium|[277]|metal|8|7
109|Mt|Meitnerium|[278]|metal|9|7
110|Ds|Darmstadtium|[281]|metal|10|7
111|Rg|Roentgenium|[282]|metal|11|7
112|Cn|Copernicium|[285]|metal|12|7
113|Nh|Nihonium|[286]|metal|13|7
114|Fl|Flerovium|[289]|metal|14|7
115|Mc|Moscovium|[290]|metal|15|7
116|Lv|Livermorium|[293]|metal|16|7
117|Ts|Tennessine|[294]|metalloid|17|7
118|Og|Oganesson|[294]|noble|18|7`;
var elements=[];
var lines=elementData.trim().split("\n");
for(var i=0; i<lines.length; i++){
    var parts=lines[i].trim().split("|");
    var element={
        number: Number(parts[0]),
        symbol: parts[1],
        name: parts[2],
        mass: parts[3],
        category: parts[4],
        group: Number(parts[5]),
        period: Number(parts[6])
    };
    elements.push(element);
}
var table=document.getElementById("periodicTable");
var details=document.getElementById("details");
var search=document.getElementById("search");
var message=document.getElementById("message");
var selectedElement=null;
var lanthanideBox=document.createElement("div");
lanthanideBox.className="placeholder";
lanthanideBox.style.gridColumn="3";
lanthanideBox.style.gridRow="6";
lanthanideBox.innerHTML="57-71<br>La-Lu";
table.appendChild(lanthanideBox);
var actinideBox=document.createElement("div");
actinideBox.className="placeholder";
actinideBox.style.gridRow="7";
actinideBox.innerHTML="89-103<br>Ac-Lr";
table.appendChild(actinideBox);
function showElement(){
    table.innerHTML="";
    var lanth=document.createElement("div");
    lanth.className="placeholder";
    lanth.style.gridColumn="3";
    lanth.style.gridRow="6";
    lanth.innerHTML="57-71<br>La-Lu";
    table.appendChild(lanth);
    var act=document.createElement("div");
    act.className="placeholder";
    act.style.gridColumn="3";
    act.style.gridRow="7";
    act.innerHTML="89-103<br>Ac-Lr";
    table.appendChild(act);
    for(var i=0; i<elements.length; i++){
        var e=elements[i];
        var button=document.createElement("button");
        button.className="element "+e.category;
        button.innerHTML=
        '<span class="number">'+e.number+'</span>'+'<span class="symbol">' + e.symbol +'</span>'+'<span class="name">' + e.name+'</span>';
        if(e.number===57){
            button.style.gridColumn=3;
            button.style.gridRow=8;
        } else if(e.number>=58 && e.number<=71){
            button.style.gridColumn=e.number-54;
            button.style.gridRow=8;
        } else if(e.number===89){
            button.style.gridColumn=3;
            button.style.gridRow=9;
        } else if(e.number>=90 && e.number<=103){
            button.style.gridColumn=e.number-86;
            button.style.gridRow=9;
        } else{
            button.style.gridColumn=e.group;
            button.style.gridRow=e.period;
        }
        button.onclick=function(){
            var symbol=this.querySelector(".symbol").textContent;
            showDetails(symbol);
        };
        table.appendChild(button);
    }
}
function showDetails(symbol){
    selectedElement=null;
    for (var i=0; i<elements.length; i++){
        if(elements[i].symbol===symbol){
            selectedElement=elements[i];
        }
    }
    if (selectedElement===null){
        return;
    }
    var e=selectedElement;
    var categoryName=e.category;
    if(e.category==="metal"){
        categoryName="Metal";
    }else if (e.category==="nonmetal"){
        categoryName="Nonmetal";
    }else if (e.category==="metalloid"){
        categoryName="Metalloid";
    }else if(e.category==="noble"){
        categoryName="Noble gas";
    }
    details.innerHTML=
    "<h2>Element Details</h2>"+
    '<div class="big-symbol">'+e.symbol+"</div>"+
    "<h3>"+e.name+"</h3>"+
    "<p><b>Atomic number:</b>"+e.number+"</p>"+
    "<p><b>Atomic mass:</b>"+e.mass+"u</p>"+
    "<p><b>Category:</b>"+categoryName+"</p>"+
    "<p><b>Group:</b>"+e.group+"</p>"+
    "<p><b>Period:</b>"+e.period+"</p>"+
    "<p><b>Number of protons:</b>"+e.number+"</p>"+
    "<p><b>Electrons in a neutral atom:</b>"+e.number+"</p>";
    var buttons=document.querySelectorAll(".element");
    for (var i=0; i<buttons.length; i++){
        buttons[i].classList.remove("selected");
        if (buttons[i].querySelector(".symbol").textContent===symbol){
            buttons[i].classList.add("selected");
        }
    }
}
function searchElement(){
    var searchText=search.value.trim().toLowerCase();
    message.textContent="";
    var found=null;
    for(var i=0; i<elements.length; i++){
        if(
            elements[i].name.toLowerCase()===searchText ||
            elements[i].symbol.toLowerCase()===searchText ||
            String(elements[i].number)===searchText
        ){
            found=elements[i];
        }
    }
    var buttons=document.querySelectorAll(".element");
    for(var i=0; i<buttons.length; i++){
        buttons[i].classList.remove("highlight");
    }
    if(found==null){
        message.textContent="Element not found. Try its full name, symbol or atomic number.";
        return;
    }
    showDetails(found.symbol);
    for(var i=0; i<buttons.length; i++){
        if(buttons[i].querySelector(".symbol").textContent===found.symbol){
            buttons[i].classList.add("highlight");
        }
    }
}
document.getElementById("searchButton").onclick=searchElement;
search.onkeydown=function(event){
    if(event.key==="Enter"){
        searchElement();
    }
};
document.getElementById("resetButton").onclick=function(){
    search.value="";
    message.textContent="";
    showElement();
    details.innerHTML="<h2>Element Details</h2>"+"<p>Click any element to see its information here. </p>";
};
showElement()