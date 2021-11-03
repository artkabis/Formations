
(function ($) {
    console.log("index.js loaded");

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
   const popupInfoComponent = `             
   <form>
      <div class="containerToken">
        <label for="token">Entrez votre token : <popup-info img="./images/alt.png" text="Pour accèder au contenu suivant vous devez entrez votre token (possèdant 6 chiffres)"></label>
        <input type="text" id="token">
      </div>
    </form>`;
    const contentTokenDisabled = `<div id="tokenContent">Vous venez de découvrir le contenu caché en le débloquant via le token inséré depuis le composant tooltip</div>`
    $('main .container-component').append(popupInfoComponent);
    $('#token').on('input',function(e){
        console.log($(this).val())
        if($(this).val() === '666666'){
             $('main .containerToken').append(contentTokenDisabled);
             console.info("Vous venez de trouver le bon token !!!");
             $('.containerToken #tokenContent').delay(2000).fadeOut(500,function(){$(this).remove()});//Une fois le composant affiché, nous attendons 2 secondes avant de le faire disparaitre (en 500 ms) et le supprimons du DOM
        }else{
            console.info("Le token indiqué n'est pas valide")
        }
    });

   $('main .container-component').append('<shadow-component>');
   
    $('#interactionZone').on('click',function(me){
        var targetId = String(me.currentTarget.id)+"";
        var type = me.type;
        console.log('type : ',type, 'depuis :',targetId);
        const msg = "Un "+type+" a été déclanché depuis "+targetId +"!!!"
        alert(msg);
    })

})(jQuery);