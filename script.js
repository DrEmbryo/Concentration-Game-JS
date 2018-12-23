// creating arrays

var icons = ['🦎','🦖','🦕','🐙','🦑','🦐','🦂','🐞','🐜','🦗','🕷','🐛','🐡','🐠','🐟','🐬','🐳','🦈'];
var array = generateArray();

function generateRandom() {
    return Math.floor(Math.random() * 18);
}

function generateArray () {
    var i = 0;
    var rand = generateRandom() ;
    var arr1 = [];
    var arr2 = [];

    while (i < 18) 
    {
        if (arr1[rand] == undefined) {
            arr1[rand] = icons[i] ;
            i++;
        } 
        rand = generateRandom();  
    }

    i = 0; 

    while (i < 18) 
    {
        if (arr2[rand] == undefined) {
            arr2[rand] = icons[i] ;
            i++;
        } 
        rand = generateRandom();  
    }

    return arr1.concat(arr2);
};

console.log(array);

// creating elements ;

function createElements () {
   for (var i = 0; i < array.length; i++) {
    $(".play_field").append("<div>" + "<div>" + array[i] + "</div>" + "</div>");
    $(".play_field").children("div").addClass("card");
    $(".card").children("div").addClass("ico");
    $(".ico").hide();
   }
}

createElements();

//game logic
    var clickedIndex1;
    var clickedIndex2;
    var counter = 0;
    var score = 0;
    var correct = []

    function checkCorrect(){
        for (var i = 0; i < correct.length; i++){
            if (clickedIndex1 == correct[i].firstIndex || clickedIndex1 == correct[i].secondIndex 
                && clickedIndex2 == correct[i].firstIndex || clickedIndex2 == correct[i].secondIndex) 
                {
                    return true;
                }
                else return false;
        }

    }

    function hideIncorrect () {
        setTimeout( () => {
        $(".ico").hide();
        for (var i = 0 ; i < correct.length; i++) {
           $(".ico:eq("+correct[i].firstIndex+")").show(); 
           $(".ico:eq("+correct[i].secondIndex+")").show();    
        }
    } , 3000 );
    }


    //click hendler
    $(".card").on("click" , function () {
        $(this).children("div").show();
        if (counter == 0) {
            clickedIndex1 = $(this).index();
            counter++;
        } else {
            clickedIndex2 = $(this).index();
            if (array[clickedIndex1] == array[clickedIndex2]) {
                if (checkCorrect()) {
                
                } else {
                    score++;
                    correct.push({
                        firstIndex: clickedIndex1,
                        secondIndex: clickedIndex2,
                    });
                }
                counter = 0;
            } else {
                 hideIncorrect();
                counter = 0;
            }
        }

    });