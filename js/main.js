(function() {


	
	
	var MediaGrid = function (data) {

      this.objectSrc = ko.observable(data.imgSrc);
      this.objectTarget = ko.observable(data.dataTarget);
      this.objectMediaType = ko.observable(data.dataMedia);

	};
	
	
	var AppViewModel = function () {
		
		var self = this,
		    datos = "data/datos.json";
            this.links = ko.observableArray([]);


		
		function getData(callback) {
			
			
			$.getJSON(datos, function(data) {
				
				callback(data);
				
				
			}).error(function (e) {
				
				console.log("Sorry, data cannot be loaded!");
				
				
			});
			
			return false;
				
		}
		
		getData(function (data) {
			
			var linksItems= data['links'];
				
		    //console.log(linksItems);


          linksItems.forEach(function (linkItem) {

            self.links.push(new MediaGrid(linkItem));

          });

          console.log(self.links());
			
			
			
		});


		
		
	};
	
	  window.addEventListener("load", function (event) {
	 
	 trigger();
	  
  });
	
	
	
	ko.applyBindings(new AppViewModel());
	
}());


      
      
