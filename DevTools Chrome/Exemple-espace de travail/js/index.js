
(function ($) {
    console.log("js loaded");

    const corp = $('body');
    const h1 = $('h1');
    const h2 = $('h2');
    const h1p = $('h1 ~ p');
    const h2p = $('h2 ~ p');

    const codeViewer = $('#code');
    console.log(h1,h2,h1p,h2p);
    corp.css({'background-color':'#333',color:"white"});

    h1.css({fontSize:"xx-large"});
    h2.css({fontSize :"x-large"});


    codeViewer.html(" Mon contenu injecté +++++++ !!!");

const newStructure = `
    <div class="subMain">
    <h3>Découvrons quelques tips de notre devTools</h3>
    <ul>
        <li> auto editor : document.designMode = "on"</li>
        <li>Récupération des événements de l'inspecteur : monitorEvents(document.body, 'mouse')</li>
        <li>Suppression de l'écoute des événements : unmonitorEvents($0, 'mouse')</li>
        <li>Ouvrir le Tools panel : Ctrl + Shift + P</li>
    
    </ul>
    </div>
   `;
   $('main').append(newStructure);
   const interactivDOM = `<div id="interactionZone"><span class="txtButton">Click me</span></div>`;
   $('main .subMain').append(interactivDOM);
   
    $('#interactionZone').on('click',function(me){
        var targetId = String(me.currentTarget.id)+"";
        var type = me.type;
        console.log('type : ',type, 'depuis :',targetId);
        const msg = "Un "+type+" a été déclanché depuis "+targetId +"!!!"
        alert(msg);
    })

})(jQuery);