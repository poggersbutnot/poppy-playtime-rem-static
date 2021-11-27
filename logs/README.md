# Logs
Gets Data of when the Cameras are updated.

# Questions
> Ok... So cant you just edit the document.querySelector("#camera-name").textContent to have the Last Modified Date?
- <p>That's a great idea! But... sadly "impossible". Since you need to wait for the camera element to be availible. Which is possible, but it will freeze the screen for around 5-10 seconds because the website is quite slow. As an example, switch cameras to CAM 08, then CAM 27. There's a big chance the camera won't change once you set it back to CAM01 (it will show after 5-10 seconds). Point is, it just makes the script "sluggish" if I would've added that.</p> 

> Can i view the code for the script to get the Last-Modified Date?
- Yes! It's open source.
