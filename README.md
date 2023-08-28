E-Commerce :- DesignoWeb task
---------------------------------------------------------------------------------------------------------
Tailwind CSS is used for styling.
Material UI is used for Making Cards.
Redux toolkit is used for central state management.
JWT token is used for session management.
bcrypt is used to encrypt the password before storing in DB.
axios is used to making request from frontend to server.
Mongoose is used for interation with MongoDB.

All the APIs is tested using Postman.
All the credentials are saved in ".env" file. (Not uploading in git)
---------------------------------------------------------------------------------------------------------

User can Signup and Login if already have an account.
Signup data will be saved in the MongoDB. Which will be further varified during Login.
Password is encrypted using bcrypt before saving in DB.

Once user Logged/signed in. A JWT token will be saved in local storage of browser for further saving logged in info.

Now User can see all the products.
User have option to filter out the products with 'Category'

On click of 'Add to Cart',count of the cart is increased and product saved in cart (redux).

User can go to his 'Cart' and can see all the products added.
Before checkout user have option to remove the product from cart.
Total amout to be paid is shown in the bottom of the products in 'Cart'.

---------------------------------------------------------------------------------------------------------
To make someone admin we have to ask Database Admin to give the permision for admin roles.

Admin have his own 'Admin Dashboard' in profile section.
In 'Admin Dashboard' admin can 'Add', 'Update' or can 'Delete' any product.

On logout all the tokens from the 'local storage' of browser is deleted.