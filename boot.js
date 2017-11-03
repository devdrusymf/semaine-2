$(function(){


$('#get-auteur').click( function(){
    $.ajax({
        url : 'auteurs.json',
        type : 'POST',
        dataType : 'json', // On désire recevoir du HTML
        success : function(auteurs){ // code_html contient le HTML renvoyé
            console.log(auteurs);
        }
     });
         
});

    var tab = '';
        tab += '<table><thead><tr>';
        tab += '<th>Nom</th>';
        tab += '<th>Prenom</th>';
        tab += '<th>Fonction</th>';
        tab += '</th></thead>';


        tab += '<tbody>';
        tab += '<tr>';
        tab += '<td>Moussa</td>';
        tab += '<td>Camara</td>';
        tab += '<td>Enseignant</td>';
        tab += '</tr></tbody></table>';
        
    
    $('#test').html(tab);

});