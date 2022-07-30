// Model
let avengers = [
    {
        id: 0,
        name: "Groot",
        url: "https://th.bing.com/th/id/OIP.FxsqcV6zvbcEBJ6o7l2BOgHaNU?w=115&h=180&c=7&r=0&o=5&dpr=1.5&pid=1.7",
        count: 0,
    
    },
    {
        id: 1,
        name: "Iron man",
        url: "https://th.bing.com/th/id/OIP.z6QjOd-AGO1RCj5tSAvb3QHaNH?w=112&h=180&c=7&r=0&o=5&dpr=1.5&pid=1.7",
        count: 0,
    
    },
    {
        id: 2,
        name: "Black Widow",
        url: "https://th.bing.com/th/id/OIP.7saRVAdMtXgILpfsTjkkFAHaIo?w=132&h=180&c=7&r=0&o=5&dpr=1.5&pid=1.7",
        count: 0,
    
    },
    {
        id: 3,
        name: "Thor",
        url: "https://th.bing.com/th/id/OIP.82HuqHzU7605P16VGchXaAHaNJ?w=187&h=333&c=7&r=0&o=5&dpr=1.5&pid=1.7",
        count: 0,
    
    },
    

]


// View
let view = {
    showName: function(id, avengerName){
        let avengerTab = document.createElement('div');
        let avengerTabStr = `<h5 id="avenger-${id}" class="text-success avengers-tabs my-3">${avengerName}</h5>`;
        avengerTab.innerHTML = avengerTabStr
        document.getElementById('avengersList').appendChild(avengerTab);
        
    },

    showData: function(avenger){
        $('#avenger-img').attr("src", avenger.url);
        $('#avenger-img').attr("alt", avenger.id);
        $('#avenger-name').text(avenger.name);
        $('#avenger-count').text(avenger.count);
    },

    clickListener: function(){
            $(".avengers-tabs").click(function (){
                $avengerId = $(this).attr("id");
                $avengerId = $avengerId.replace("avenger-", "");
                controller.clickHandler($avengerId);
            })
    },

    countListener: function(){
            $("#avenger-img").click(function (){
                $imgId = $(this).attr("alt");
                controller.countHandler($imgId);
            })
    },

}

// Controller
let controller = {
    init: function(avengers){
        for(let i = 0; i < avengers.length; i++){
            view.showName(i, avengers[i].name);
        }
        view.showData(avengers[0]);
        view.clickListener();
        view.countListener();
    },

    clickHandler: function(id){
        let avenger = avengers[id];
        view.showData(avenger);
    },

    countHandler: function(id){
        avengers[id].count++;
        view.showData(avengers[id]);
        
    }

}
controller.init(avengers)