/**
 * Created by juanmanuelsanchez on 11/3/16.
 */
(function() {




  var MediaLink = function (data) {


    this.rowName = ko.observable(data.rowName);
    this.rowItems = ko.observable(data.rowItems);
    this.elementTitle = ko.observable(data.rowItems.elementTitle);
    this.imgSrc = ko.observable(data.rowItems.imgSrc);
    this.dataTarget = ko.observable(data.rowItems.dataTarget);
    this.dataMedia = ko.observable(data.rowItems.dataMedia);

    console.log(this.rowItems());

  };


  var AppViewModel = function () {

    var self = this,
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

      var links = [],
      links= data['links'];



      links.forEach(function (item) {

        self.rows.push(new MediaLink(item));

      });

      console.log(self.rows());


    });

    this.rows = ko.observableArray([]);



  };

  window.addEventListener("load", function (event) {

    trigger();

  });



  ko.applyBindings(new AppViewModel());

}());




