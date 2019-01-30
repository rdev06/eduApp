# eduApp
a site like udemy
//use POSTMAN

1) COURSES

a) For addition of Course~
'POST' route: 'add_course
  body(Parameter): course:'Name of course'<String>.
                   description:'Description of course'<String>.
                   nov        :'No. of Video'.
                   
b) For viewing courses.
'GET' route:'/courses'

c) For deleting courses
'DELETE' route:'/delete_course/:id'
        :id of course

2) USERS

a) To see all users.
'GET' route:'/users'

b) To add user
'POST' route:'/add_uses'
body(Parameter) => email:
                   password:
                   
                   
                   
c) To get details of individuals user
'Get' route:'/user/:id'
                :id of user
                
d) To update user details.
'POST' route:'/update_user/:id'
              :id of user
     body(Parameter)=>name:<String>
                      age:<Number>
                      
e) To get info about orders done by user
'GET' route:'/user/order/:id'
            :id of user
            
f) To delete user
'DELETE' route:'/user/:id'
              :id of user
              
              
              
              
3) ORDERS

a) To get details about all the order
'GET' route '/order'

b) To add order given by user.
'POST' route 'add_order/:id'
      :id of user
body(Parameter) courseID:<id of course>
                quantity:<Number>
                
                
c) To delete orders
'DELETE' route:'delete_order/:id'
          :id of order
