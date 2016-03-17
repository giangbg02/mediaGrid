(function() {



  var self = this,
      mediaWrapper = $("#mediaWrapper"),
      datos = "data/datos.json";




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
        length = linksItems.length,
        count = 0;


    for (var i = 0; i < length; i++) {



      var linkItem = linksItems[i],
          src = linkItem['imgSrc'],
          target = linkItem['dataTarget'],
          media = linkItem['dataMedia'],
          domLinkDiv = "<div class='col-lg-4 col-md-4 col-sm-4 col-xs-12 mediaHolder' id='linkItem"+count+"'></div>";

      mediaWrapper.append(domLinkDiv);
      var mediaHolder = $('#'+'linkItem'+count),
          domLink = "<img src='"+src+"' alt='work image' class='modalLink' href= '#' data-toggle='modal' data-target='"+target+"' data-media='"+media+"'>";
      mediaHolder.append(domLink);

      count++;

    }

  });
  
  window.addEventListener("load", function (event) {
	 
	 trigger();
	  
  });

}());










