const image = document.querySelector("#myImage");
const text = document.querySelector("h2");
const buttonOne = document.querySelector("#one");
const buttonTwo = document.querySelector("#two");
const country = document.querySelector("#country");
const all = document.querySelector("#all");

buttonOne.addEventListener("click", south);
buttonTwo.addEventListener("click", north);

// South function
function south() {
    image.setAttribute("src", "https://cdn.glitch.com/d91e5e60-e604-4d4b-b7c0-95e685dbb5fc%2F13.jpg?v=1631040909761");
    text.textContent = "Suitcase or Backpack?"
    buttonOne.textContent = "Suitcase";
    buttonTwo.textContent = "Backpack"

    buttonOne.addEventListener("click", suitcase);
    buttonTwo.addEventListener("click", backpack);
}

// north function

function north() {
    image.setAttribute("src", "https://cdn.glitch.com/d91e5e60-e604-4d4b-b7c0-95e685dbb5fc%2F59.jpg?v=1631040939608");
    text.textContent = "Ski?"
    buttonOne.textContent = "YES"
    buttonTwo.textContent = "NO"

    buttonOne.addEventListener("click", isSki);
    buttonTwo.addEventListener("click", noSki);
}

// No ski function

function noSki() {
    image.setAttribute ("src", "https://cdn.glitch.com/d91e5e60-e604-4d4b-b7c0-95e685dbb5fc%2F62.jpg?v=1631040939147");
    text.textContent = "Above the Arctic Circle"
    buttonOne.textContent = "YES"
    buttonTwo.textContent = "NO"

    buttonOne.addEventListener("click", isCircle);
    buttonTwo.addEventListener("click", noCircle);
}

// No Circle function
function noCircle(){
    image.setAttribute ("src", "https://cdn.glitch.com/d91e5e60-e604-4d4b-b7c0-95e685dbb5fc%2F64.jpg?v=1631040938948");
    text.textContent = "At Father Christmas?"
    buttonOne.textContent = "YES"
    buttonTwo.textContent = "NO"

    buttonOne.addEventListener("click", rovaniemi);
    buttonTwo.addEventListener("click", faroe);
}


// suitcase function

function suitcase(){
    image.setAttribute ("src", "https://cdn.glitch.com/d91e5e60-e604-4d4b-b7c0-95e685dbb5fc%2F14.jpg?v=1631040988437");
    text.textContent = "Beach?"
    buttonOne.textContent = "YES"
    buttonTwo.textContent = "NO"

    buttonOne.addEventListener("click", isBeach);
    buttonTwo.addEventListener("click", noBeach);
}

// backpack function

function backpack(){
    image.setAttribute ("src", "https://cdn.glitch.com/d91e5e60-e604-4d4b-b7c0-95e685dbb5fc%2F31.jpg?v=1631041007925");
    text.textContent = "Beach or tracking?"
    buttonOne.textContent = "Beach"
    buttonTwo.textContent = "Tracking"

    buttonOne.addEventListener("click", beachBackpack);
    buttonTwo.addEventListener("click", tracking);
}

// isbeach function

function isBeach() {
    image.setAttribute("src", "https://cdn.glitch.com/d91e5e60-e604-4d4b-b7c0-95e685dbb5fc%2F17.jpg?v=1631041012345");
    text.textContent = "Surf";
    buttonOne.textContent = "YES";
    buttonTwo.textContent = "NO";

    buttonOne.addEventListener("click", isSurf);
    buttonTwo.addEventListener("click", noSurf);
}

// noBeach function
function noBeach() {
    image.setAttribute("src", "https://cdn.glitch.com/d91e5e60-e604-4d4b-b7c0-95e685dbb5fc%2F23.jpg?v=1631041040577");
    text.textContent = "Europe";
    buttonOne.textContent = "YES";
    buttonTwo.textContent = "NO";

    buttonOne.addEventListener("click", isEurope);
    buttonTwo.addEventListener("click", noEurope);
}

// tracking function

function tracking() {
    image.setAttribute ("src", "https://cdn.glitch.com/d91e5e60-e604-4d4b-b7c0-95e685dbb5fc%2F48.jpg?v=1631041045026");
    text.textContent = "China?";
    buttonOne.textContent = "YES";
    buttonTwo.textContent = "NO";

    buttonOne.addEventListener("click", isChina);
    buttonTwo.addEventListener("click", noChina);
}

// china function

function isChina() {
    image.setAttribute ("src", "https://cdn.glitch.com/d91e5e60-e604-4d4b-b7c0-95e685dbb5fc%2F51.jpg?v=1631041049433");
    text.textContent = "Mountains?";
    buttonOne.style = "display :block";
    buttonTwo.style = "display :block";
    buttonOne.textContent = "YES";
    buttonTwo.textContent = "NO";

    buttonOne.addEventListener("click", isMountain);
    buttonTwo.addEventListener("click", noMountain);
}

// no China function
function noChina() {
    image.setAttribute ("src", "https://cdn.glitch.com/d91e5e60-e604-4d4b-b7c0-95e685dbb5fc%2F54.jpg?v=1631041095621");
    text.textContent = "Kangaroo or crocodile?";
    buttonOne.textContent = "Kangaroo";
    buttonTwo.textContent = "Crocodile";

    buttonOne.addEventListener("click", kangaroo);
    buttonTwo.addEventListener("click", crocodile);
}

// isMountain function

function isMountain() {
    image.setAttribute ("src", "https://cdn.glitch.com/d91e5e60-e604-4d4b-b7c0-95e685dbb5fc%2F50.jpg?v=1631041096152");
    text.textContent = "Tigre?";
    buttonOne.textContent = "YES";
    buttonTwo.textContent = "NO";

    buttonOne.addEventListener("click", tigre);
    buttonTwo.addEventListener("click", stone);
}

// no Mountain function

function noMountain() {
    image.setAttribute ("src", "https://cdn.glitch.com/d91e5e60-e604-4d4b-b7c0-95e685dbb5fc%2F52.jpg?v=1631041095913");
    text.textContent = "Riviera?";
    buttonOne.textContent = "YES";
    buttonTwo.textContent = "NO";

    buttonOne.addEventListener("click", yangshuo);
    buttonTwo.addEventListener("click", lijiang);
}

function beachBagpack() {
    image.setAttribute ("src", "https://cdn.glitch.com/d91e5e60-e604-4d4b-b7c0-95e685dbb5fc%2F32.jpg?v=1631041142448");
    text.textContent = "Asia?";
    buttonOne.style ="display:block";
    buttonTwo.style ="display:block";
    buttonOne.textContent = "YES";
    buttonTwo.textContent = "NO";

    buttonOne.addEventListener("click", isAsia);
    buttonTwo.addEventListener("click", noAsia);
}

function isAsia () {
    image.setAttribute ("src", "https://cdn.glitch.com/d91e5e60-e604-4d4b-b7c0-95e685dbb5fc%2F39.jpg?v=1631041142759");
    text.textContent = "Surf?";
    buttonOne.textContent = "YES";
    buttonTwo.textContent = "NO";

    buttonOne.addEventListener("click", bali);
    buttonTwo.addEventListener("click", thai);
}

function noAsia() {
    image.setAttribute ("src", "https://cdn.glitch.com/d91e5e60-e604-4d4b-b7c0-95e685dbb5fc%2F43.jpg?v=1631041184146");
    text.textContent = "An Island?";
    buttonOne.textContent = "YES";
    buttonTwo.textContent = "NO";

    buttonOne.addEventListener("click", maurice);
    buttonTwo.addEventListener("click", cancun);
}

function isEurope() {
    image.setAttribute ("src", "https://cdn.glitch.com/d91e5e60-e604-4d4b-b7c0-95e685dbb5fc%2F24.jpg?v=1631041184293");
    text.textContent = "Spain or Italy?";
    buttonOne.textContent = "Spain";
    buttonTwo.textContent = "Italy";

    buttonOne.addEventListener("click", spain);
    buttonTwo.addEventListener("click", italy);
}

function noEurope() {
    image.setAttribute ("src", "https://cdn.glitch.com/d91e5e60-e604-4d4b-b7c0-95e685dbb5fc%2F33.jpg?v=1631041288485");
    text.textContent = "USA or Australia?";
    buttonOne.textContent = "USA";
    buttonTwo.textContent = "Australia";

    buttonOne.addEventListener("click", usa);
    buttonTwo.addEventListener("click", australia);
}

function usa() {
    image.setAttribute ("src", "https://cdn.glitch.com/d91e5e60-e604-4d4b-b7c0-95e685dbb5fc%2F34.jpg?v=1631041288824");
    text.textContent = "Casino or Theatre?";
    buttonOne.textContent = "Casino";
    buttonTwo.textContent = "Theatre";

    buttonOne.addEventListener("click", la);
    buttonTwo.addEventListener("click", ny);
}

function australia() {
    image.setAttribute ("src", "https://cdn.glitch.com/d91e5e60-e604-4d4b-b7c0-95e685dbb5fc%2F37.jpg?v=1631041389348");
    text.textContent = "Opera or Art?";
    buttonOne.textContent = "Opera";
    buttonTwo.textContent = "Art";

    buttonOne.addEventListener("click", sydney);
    buttonTwo.addEventListener("click", melbourne);
}

function spain() {
    image.setAttribute ("src", "https://cdn.glitch.com/d91e5e60-e604-4d4b-b7c0-95e685dbb5fc%2F25.jpg?v=1631041389960");
    text.textContent = "Shopping or Museum?";
    buttonOne.textContent = "Shopping";
    buttonTwo.textContent = "Museum";

    buttonOne.addEventListener("click", barcelone);
    buttonTwo.addEventListener("click", madrid);
}

function italy() {
    image.setAttribute ("src", "https://cdn.glitch.com/d91e5e60-e604-4d4b-b7c0-95e685dbb5fc%2F28.jpg?v=1631041423653");
    text.textContent = "Artistic ou romantic?";
    buttonOne.textContent = "Artistic";
    buttonTwo.textContent = "Romantic";

    buttonOne.addEventListener("click", florence);
    buttonTwo.addEventListener("click", venice);
}

function isSurf() {
    image.setAttribute ("src", "https://cdn.glitch.com/d91e5e60-e604-4d4b-b7c0-95e685dbb5fc%2F18.jpg?v=1631041423379");
    text.textContent = "An Island?";
    buttonOne.textContent = "YES";
    buttonTwo.textContent = "NO";

    buttonOne.addEventListener("click", isIsland);
    buttonTwo.addEventListener("click", noIsland);
}
function noSurf() {
    image.setAttribute ("src", "https://cdn.glitch.com/d91e5e60-e604-4d4b-b7c0-95e685dbb5fc%2F21.jpg?v=1631041508566");
    text.textContent = "An Island?";
    buttonOne.textContent = "YES";
    buttonTwo.textContent = "NO";

    buttonOne.addEventListener("click", isIslandSurf);
    buttonTwo.addEventListener("click", notIslandSurf);
}

function isIsland() {
    image.setAttribute ("src", "https://cdn.glitch.com/d91e5e60-e604-4d4b-b7c0-95e685dbb5fc%2F16.jpg?v=1631041507830");
    text.textContent = `Jaws, Maui, Hawaii`;
    buttonOne.style = "display: none";
    buttonTwo.style = "display: none";

    country.style = "display: block";
    all.style = "display: block";

    country.textContent = ``;
}

function noIsland() {
    image.setAttribute ("src", "https://cdn.glitch.com/d91e5e60-e604-4d4b-b7c0-95e685dbb5fc%2F19.jpg?v=1631041541661");
    text.textContent = `Supertubes, Jeffrey's Bay, South Africa`;
    buttonOne.style = "display: none";
    buttonTwo.style = "display: none";

    country.style = "display: block";
    all.style = "display: block";

    country.textContent = ``;
}

function isIslandSurf() {
    image.setAttribute ("src", "https://cdn.glitch.com/d91e5e60-e604-4d4b-b7c0-95e685dbb5fc%2F20.jpg?v=1631041540360");
    text.textContent = `Veligandu, Maldives`;
    buttonOne.style = "display: none";
    buttonTwo.style = "display: none";

    country.style = "display: block";
    all.style = "display: block";

    country.textContent = ``;
}

function notIslandSurf() {
    image.setAttribute ("src", "https://cdn.glitch.com/d91e5e60-e604-4d4b-b7c0-95e685dbb5fc%2F22.jpg?v=1631041540384");
    text.textContent = `Butterfly Beach, Montecito, California`;
    buttonOne.style = "display: none";
    buttonTwo.style = "display: none";

    country.style = "display: block";
    all.style = "display: block";

    country.textContent = ``;
}

function barcelona() {
    image.setAttribute ("src", "https://cdn.glitch.com/d91e5e60-e604-4d4b-b7c0-95e685dbb5fc%2F26.jpg?v=1631041583914");
    text.textContent = `Barcelona, Spain`;
    buttonOne.style = "display: none";
    buttonTwo.style = "display: none";

    country.style = "display: block";
    all.style = "display: block";

    country.textContent = ``;
}

function madrid() {
    image.setAttribute ("src", "https://cdn.glitch.com/d91e5e60-e604-4d4b-b7c0-95e685dbb5fc%2F27.jpg?v=1631041584265");
    text.textContent = `Madrid, Spain`;
    buttonOne.style = "display: none";
    buttonTwo.style = "display: none";

    country.style = "display: block";
    all.style = "display: block";

    country.textContent = ``;
}

function florence() {
    image.setAttribute ("src", "https://cdn.glitch.com/d91e5e60-e604-4d4b-b7c0-95e685dbb5fc%2F29.jpg?v=1631041616042");
    text.textContent = `Florence, Italy`;
    buttonOne.style = "display: none";
    buttonTwo.style = "display: none";

    country.style = "display: block";
    all.style = "display: block";

    country.textContent = ``;
}

function venise() {
    image.setAttribute ("src", "https://cdn.glitch.com/d91e5e60-e604-4d4b-b7c0-95e685dbb5fc%2F30.jpg?v=1631041615441");
    text.textContent = `Venice, Italy`;
    buttonOne.style = "display: none";
    buttonTwo.style = "display: none";

    country.style = "display: block";
    all.style = "display: block";

    country.textContent = ``;
}

function la() {
    image.setAttribute ("src", "https://cdn.glitch.com/d91e5e60-e604-4d4b-b7c0-95e685dbb5fc%2F35.jpg?v=1631041616017");
    text.textContent = `Las Vegas, Nevada, USA`;
    buttonOne.style = "display: none";
    buttonTwo.style = "display: none";

    country.style = "display: block";
    all.style = "display: block";

    country.textContent = ``;
}

function ny() {
    image.setAttribute ("src", "https://cdn.glitch.com/d91e5e60-e604-4d4b-b7c0-95e685dbb5fc%2F36.jpg?v=1631041663521");
    text.textContent = `New York, New York, USA`;
    buttonOne.style = "display: none";
    buttonTwo.style = "display: none";

    country.style = "display: block";
    all.style = "display: block";

    country.textContent = ``;
}

function sydney() {
    image.setAttribute ("src", "https://cdn.glitch.com/d91e5e60-e604-4d4b-b7c0-95e685dbb5fc%2F37.jpg?v=1631041663078");
    text.textContent = `Sydney, New South Wales, Australia`;
    buttonOne.style = "display: none";
    buttonTwo.style = "display: none";

    country.style = "display: block";
    all.style = "display: block";

    country.textContent = ``;
}

function melbourne() {
    image.setAttribute ("src", "https://cdn.glitch.com/d91e5e60-e604-4d4b-b7c0-95e685dbb5fc%2F38.jpg?v=1631041663384");
    text.textContent = `Melbourne, Victoria, Australia`;
    buttonOne.style = "display: none";
    buttonTwo.style = "display: none";

    country.style = "display: block";
    all.style = "display: block";

    country.textContent = ``;
}

function bali() {
    image.setAttribute ("src", "https://cdn.glitch.com/d91e5e60-e604-4d4b-b7c0-95e685dbb5fc%2F40.jpg?v=1631041705236");
    text.textContent = `Bali, Indonesia`;
    buttonOne.style = "display: none";
    buttonTwo.style = "display: none";

    country.style = "display: block";
    all.style = "display: block";

    country.textContent = ``;
}

function thai() {
    image.setAttribute ("src", "https://cdn.glitch.com/d91e5e60-e604-4d4b-b7c0-95e685dbb5fc%2F41.jpg?v=1631041705749");
    text.textContent = `Kho Samui, Thailand`;
    buttonOne.style = "display: none";
    buttonTwo.style = "display: none";

    country.style = "display: block";
    all.style = "display: block";

    country.textContent = ``;
}

function maurice() {
    image.setAttribute ("src", "https://cdn.glitch.com/d91e5e60-e604-4d4b-b7c0-95e685dbb5fc%2F44.jpg?v=1631041740214");
    text.textContent = `Maurice Island`;
    buttonOne.style = "display: none";
    buttonTwo.style = "display: none";

    country.style = "display: block";
    all.style = "display: block";

    country.textContent = ``;
}

function cancun() {
    image.setAttribute ("src", "https://cdn.glitch.com/d91e5e60-e604-4d4b-b7c0-95e685dbb5fc%2F45.jpg?v=1631041740978");
    text.textContent = `Cancun, Mexico`;
    buttonOne.style = "display: none";
    buttonTwo.style = "display: none";

    country.style = "display: block";
    all.style = "display: block";

    country.textContent = ``;
}

function tigre() {
    image.setAttribute ("src", "https://cdn.glitch.com/d91e5e60-e604-4d4b-b7c0-95e685dbb5fc%2F49.jpg?v=1631041740609");
    text.textContent = `Tiger Leaping Gorge, Canyon in China`;
    buttonOne.style = "display: none";
    buttonTwo.style = "display: none";

    country.style = "display: block";
    all.style = "display: block";

    country.textContent = ``;
}

function stone() {
    image.setAttribute ("src", "https://cdn.glitch.com/d91e5e60-e604-4d4b-b7c0-95e685dbb5fc%2F50.jpg?v=1631041790560");
    text.textContent = `Zhangjiajie National Forest Park, China`;
    buttonOne.style = "display: none";
    buttonTwo.style = "display: none";

    country.style = "display: block";
    all.style = "display: block";

    country.textContent = ``;
}

function yangshuo() {
    image.setAttribute ("src", "https://cdn.glitch.com/d91e5e60-e604-4d4b-b7c0-95e685dbb5fc%2F47.jpg?v=1631041790515");
    text.textContent = `Yangshuo County, China`;
    buttonOne.style = "display: none";
    buttonTwo.style = "display: none";

    country.style = "display: block";
    all.style = "display: block";

    country.textContent = ``;
}

function lijiang() {
    image.setAttribute ("src", "https://cdn.glitch.com/d91e5e60-e604-4d4b-b7c0-95e685dbb5fc%2F53%20-%20Copie.jpg?v=1631041825952");
    text.textContent = `Lijiang, China`;
    buttonOne.style = "display: none";
    buttonTwo.style = "display: none";

    country.style = "display: block";
    all.style = "display: block";

    country.textContent = ``;
}

function kangourou() {
    image.setAttribute ("src", "https://cdn.glitch.com/d91e5e60-e604-4d4b-b7c0-95e685dbb5fc%2F55%20-%20Copie.jpg?v=1631041825996");
    text.textContent = `Outback, Western Australia`;
    buttonOne.style = "display: none";
    buttonTwo.style = "display: none";

    country.style = "display: block";
    all.style = "display: block";

    country.textContent = ``;
}

function crocodile() {
    image.setAttribute ("src", "https://cdn.glitch.com/d91e5e60-e604-4d4b-b7c0-95e685dbb5fc%2F56.jpg?v=1631041858919");
    text.textContent = `Darwin, Northern Territory , Australia`;
    buttonOne.style = "display: none";
    buttonTwo.style = "display: none";

    country.style = "display: block";
    all.style = "display: block";

    country.textContent = ``;
}

function isSki() {
    image.setAttribute ("src", "https://cdn.glitch.com/d91e5e60-e604-4d4b-b7c0-95e685dbb5fc%2F61.jpg?v=1631041858735");
    text.textContent = `Ruka, Finland`;
    buttonOne.style = "display: none";
    buttonTwo.style = "display: none";

    country.style = "display: block";
    all.style = "display: block";

    country.textContent = ``;
}

function isCircle() {
    image.setAttribute ("src", "https://cdn.glitch.com/d91e5e60-e604-4d4b-b7c0-95e685dbb5fc%2F63.jpg?v=1631041890238");
    text.textContent = `Tromsø, Norway`;
    buttonOne.style = "display: none";
    buttonTwo.style = "display: none";

    country.style = "display: block";
    all.style = "display: block";

    country.textContent = ``;
}

function rovaniemi() {
    image.setAttribute ("src", "https://cdn.glitch.com/d91e5e60-e604-4d4b-b7c0-95e685dbb5fc%2F65.jpg?v=1631041889994");
    text.textContent = `Rovaniemi, Lapland, Finland`;
    buttonOne.style = "display: none";
    buttonTwo.style = "display: none";

    country.style = "display: block";
    all.style = "display: block";

    country.textContent = ``;
}

function faroe() {
    image.setAttribute ("src", "https://cdn.glitch.com/d91e5e60-e604-4d4b-b7c0-95e685dbb5fc%2F57.jpg?v=1631041918532");
    text.textContent = `Faroe Islands, Denmark`;
    buttonOne.style = "display: none";
    buttonTwo.style = "display: none";

    country.style = "display: block";
    all.style = "display: block";

    country.textContent = ``;
}










