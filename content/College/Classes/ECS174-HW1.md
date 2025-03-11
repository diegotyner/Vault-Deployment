

> [!info] I attached helper functions and other work on my Jupyter Notebook file to support the written portion 


## Section 2: Written Assignment
### Question 1:
What is the best amount of blur to apply when down-sampling Moire.jpg by 8x (pressing  “Half Size” 3 times)? Does down-sampling “Seattle.jpg” require the same amount of blur? You may  use different amounts of “sigma” for each image and report your observation.
> Since the Moire image has a more complex pattern, having a sigma too large can lead to loss of image features (becoming a single blurry mass instead of rings or mixing different ring layers). I found that a small sigma like 1 worked well.
>
> The Seattle picture does not have this same property, and you can apply a high amount of blur without losing image features. I used a sigma of 4.0.

### Question 2:
 If you rotate the image 20 times by 2 degrees, does it produce the same result as rotating the image by 40 degrees? If not, why? You may use built-in function rotate() to rotate the image
> They do not produce the same result. Repeated small rotations produce artifacts that are not present in one big rotation. This is because each small rotation changes the pixel values slightly, making a small interpolation from the image it rotated. This interpolation compounds on itself, leading to errors from edges and badly interpolated pixels.
> 
> The single rotation will not introduce as many artifacts as the 20 small rotations, due to making the calculation once and only based on the original image.
