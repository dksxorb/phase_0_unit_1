#### Include an inline screenshot of your codeschool's points from the profile page:

codeschool score screnshot: http://i.minus.com/jbu9nbYmNNfjYX.png
postmachina changes: http://i.minus.com/jC80J6Nmbm6HF.png

##QUIZ
* Explain which tabs support the following actions and how.
  * Realtime editing of HTML and CSS 
  <br>-Elements
  * Javascript Debugging
  <br>-Console, Sources
  * Performance Optimization
  <br>-Networks, Pagespeed

* What's the quick key for your OS to spawn the Dev Tools inspector?
<br>-(Windows) Control + Shift + I

* Go to http://www.postmachina.com/ and analyze and tweak this nicely designed page.
  * What is the current background color for the page?  (Surprisingly, it's not just black!)
  * Tweak the background color to white.
  * Tweak the height of the side bar that contains the logo.  Shrink it down to 85px.
  * Roll over the navigation links.  When you hover over them, they dissapear.  Let's change the hover color to black instead.
  * Now take a screenshot of your new (and maybe not so improved) design.  It should match this screenshot: http://postimg.org/image/5ak1jkpl5/
  * Upload your own image to the web using an image hosting service.  It should match the image above. The last nav link in the image above is black because the mouse was hovering there when the screenshot was taken. Do the same, and don't take a screenshot of your whole desktop, just the browser window. (This is part of the challenge.)

* For the postmachina website, why can't you tweak the color of the text "The most important things are not things"?  Please explain.
  <br>-It appears that there is no html link for the css connected to the p tag that houses the text when viewed from the chrome dev tool inspector. Instead there is a user agent stylesheet text. My guess is that the css file that is linked to that text is housed on the main web developers computer. That way no one can change the text and compromise the content of the website. 
* Go to www.ticketswizard.com and analyze the page.  
  * What is the largest image on the website? 
    <br>-The largest image on the website is the HeaderBG.png. 
  * Explain how you would find out this information, and list the URL of offending image here and how big it is.
    <br>-First thing is I would open the Dev Tools Inspector. Then I would go to the networks tab. From there I would restart the webpage with shift+f5 after clearing the list. After everything is loaded on the networks list. I would sort the list by type. You can intuitively see which images are larger by eye and also by the size of the content. I would click through the generally bigger images and click on the preview tab to see the dimensions.
* Test the www.ticketswizard.com website with google's [PageSpeed Insights](http://www.ticketswizard.com/).  (You can also download the chrome plugin).  What is the lowest hanging fruit to optimize the website?  How many kilobytes of data can be eliminated? 
<br>- We can minify the payload to the webpage. Minifying http://www.ticketswizard.com/.../InteractiveMaps.css could save 2.3KiB.
