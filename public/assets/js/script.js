$(()=>{
    usePartial();
    displayPage();
    setupEventHandlers();
});

function usePartial(name, partialId) {
    let partialTemplate = $(partialId).text();
    Handlebars.registerPartial(name, partialTemplate);
}

function displayPage(){
    $.get("/api/burgers/").then((burgers)=>{
        renderTemplate({burgers: burgers});
    });
}

function setupEventHandlers(){
    $(document).on("click", "#inputButton", (event)=>{
        if ($("#inputBurgerName").val() == "") return;
        else inputClickOrEnterPress();
    });

    $(document).on("keyup", "#inputBurgerName", (event)=>{
        if ((event.keyCode === 13) && ($("#inputBurgerName").val()!== "")) {
            ClickOrEnter();
        }
    });
    
    function ClickOrEnter(){
        var burgerName = $("#inputBurgerName").val().trim();
        var newBurger = {
            name: burgerName,
            devoured: false
        }
        $("#inputBurgerName").val("");
        $.ajax("/api/burgers/", {type: "POST", data: newBurger}).then(()=>{
            displayPage();
        });
    }

    //On clicking devour, sends the bugers id and new state to the server
    $(document).on("click", "DevourButton", function(){
        var id = this.getAttribute("data-id");
        var isDevoured = this.getAttribute("data-isDevoured");

        if (isDevoured == "false") isDevoured = true;
        else isDevoured = false;
        var newBurgerState = {
            devoured: isDevoured
        }
        $.ajax("/api/burgers/" + id, {type: "PUT", data: newBurgerState}).then(()=>{
            displayPage();
        });
    });

    //On clicking the main burger image, changes state of all burgers back to false
    $(document).on("click", "#logo_burger", function(){

        $.get("/api/burgers/resetBase").then((res)=>{
            displayPage();
        });
    });
}
