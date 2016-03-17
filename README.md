# **mediaGrid**

## 1.- Project description
   ------------------------
   Creates a media grid (video and photo) with Bootstrap and JWPlayer, 
   following the MVVM design pattern as proposed by KnockoutJS.
   In addition,  app.js file is provided to implement this functionality
   in 'vanilla js'.


## 2.- Run and build **prerequisites**
   ------------------------------------
   Free JWPlayer license key is needed to run the program and eventually to
   reuse the code. Sign up at [JWPlayer](https://www.jwplayer.com/sign-up/).
   The program requires [node, npm](https://nodejs.org/en/), [git](http://git-scm.com/)
   and [bower](http://bower.io/#install-bower). 
   
   
## 3.- Instructions to run the program
   ------------------------------------
   1) Fork the repo or download the code. To install the dependencies run
      `bower install` in the root folder.
   2) When JWPlayer license key is acquired:
     a) Copy and paste it between the quotation marks at `<script>jwplayer.key="";</script>` 
        tag on line 23 of `index.html`.
     b) Then click the `index.html` file to run the application.
     c) Click as desired on the video box or any of the thumbnails showed on the screen.
   3) If vanilla js code is preferred follow the instructions listed at lines 98, 132, 
      214 and 217 of `index.html`.
      
   
## 4.- Build
   -----------
   Follow ## 2 and ## 3 1) explanations and reuse code as desired, but 
   remember that **mediaGrid** is under MIT License: observe the specifications
   related to the copyright outlined at LICENSE file.
   **mediaGrid** is a data driven program. To increase the number of rows and
   media instances, add more assets and declare them in datos.json. Specify what kind
   of modal is going to be displayed, `#videoModal` or `#photoModal` on the 
   `dataTarget` property.
   
   
## 5.- Packages
   -------------
   **mediaGrid** folder contains the development version of the program.
   
   
## 6.- Dependencies
   -----------------
   * JQuery ~1.11.3.
   * Bootstrap ~3.3.6.
   * Knockout ~3.4.0.
   * JWPlayer bianjp/jwplayer#^7.2.4.
    
## 5.- Credits
   -----------
   **mediaGrid** photography is taken from [John Brandauer](https://www.flickr.com/photos/brandauer/) at Flickr under [Creative Commons License](https://creativecommons.org/licenses/by-nc-nd/2.0/legalcode):
   1) 22258872673_a653ba9458_z.jpg.
   2) 22473398326_330e439d24_z.jpg.
   3) 23016037640_a38cf63c9d_z.jpg.
   4) 24939768603_6d974ede88_z.jpg.
   5) 24935964784_4f32eac764_z.jpg.
   6) 25447998812_3ddcd33fba_z.jpg.
   7) 25540423956_9336ac2d58_z.jpg.
   
   **mediaGrid** video is taken from [Nature Clip: Free Stock Footage](https://www.youtube.com/user/NatureClip/videos) at Youtube under [Creative Commons License](https://creativecommons.org/licenses/by-nc-nd/2.0/legalcode):
   1) Clouds and Blue Sky (HD).mp4
   2) Dandelion blown (Macro HD).mp4.
   3) Fire and Embers in 4K.mp4.
   4) Sunset in 1080p HD CC-By NatureClip.mp4.
   
   
   To my family
  


