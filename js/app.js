/**
 * Created by juanmanuelsanchez on 17/3/16.
 */
/**
 * Created by juanmanuelsanchez on 16/3/16.
 */
(function() {



  var self = this,
      mediaWrapper = $("#mediaWrapper"),
      datos = "data/datos.json",
      count = 0;




  function getData(callback) {


    $.getJSON(datos, function(data) {

      callback(data);


    }).error(function (e) {

      console.log("Sorry, data cannot be loaded!");


    });

    return false;

  }

  getData(function (data) {

    var linksItems= data['links'],
        length = linksItems.length;


    for (var i = 0; i < length; i++) {


      var linkItem = linksItems[i],
          linkItemName = linkItem.rowName,
          rowItems = linkItem.rowItems,
          rowItemsLength = rowItems.length,
          container = "<div class='row col-lg-12 col-md-12 col-sm-12' id='container"+i+"'></div>",
          title = "<h3 class='text-center row-title' id='rowTitle"+i+"'></h3>",
          mediaHolder = "<div class='row col-lg-12 col-md-12 col-sm-12 mediaHolder' id='mediaHolder"+i+"'></div>";



      $("#mediaWrapper:last").append(container);

      var $container = $('#'+'container'+i);
      $container.prepend(title);
      var $title = $('#'+'rowTitle'+i);
      $title.text(linkItemName);
      $container.append(mediaHolder);





      for (var j = 0; j < rowItemsLength; j++){

        var element = rowItems[j],
            elementTitle = element['elementTitle'],
            src = element['imgSrc'],
            target = element['dataTarget'],
            media = element['dataMedia'],
            domLinkDiv = "<div class='col-lg-4 col-md-4 col-sm-4 col-xs-12' id='linkItem"+count+"'></div>",
            domLink = "<img src='"+src+"' alt='work image' class='img-responsive modalLink' href= '#' data-toggle='modal' data-target='"+target+"' data-media='"+media+"'>",
            imageTitle = "<div class='image-title' id='imageTitle"+count+"'></div>";
        var $mediaHolder = $('#'+'mediaHolder'+i);
        $mediaHolder.append(domLinkDiv);
        var $domLinkDiv = $('#'+'linkItem'+count);
        $domLinkDiv.append(domLink);
        $domLinkDiv.prepend(imageTitle);
        var $imageTitle = $('#'+'imageTitle'+count);
        $imageTitle.text(elementTitle);

        count++;



      }



    }

  });

  window.addEventListener("load", function (event) {

    trigger();

  });

}());










