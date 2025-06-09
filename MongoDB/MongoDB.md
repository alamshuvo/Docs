 # MongoDb basic to Advance
 db.users.insertOne() dyea amra ekta user create korte pari .ekhane _id feild ta mongodb automatic dyea de.
 amra caile insertMany() use korte pari tokhn amra ekta array insert korte pari multiple object create use korte pari .jkn amra ekta single data create kori tahole amra insertOne() use kore takhi .
 # some code added  some code added 

# User find kore dekha some code added 
db.users.findOne() eta dyea amra kono ekta feild er upor depends kore kono data k find korte pari . amra jodi kkn o mongodb er id dyea kono kisu get kore takhi tahole amra ensure korte pari j ObjectId ta deya ache kina .
- find one korle first e j data ta asbe ota dyea dibe shudu .

find()dyea amra multiple data get korte pari .
shudu find dile oi feild e joto data ache sob gula data cole asbe 

- $gt and $lt = grater then and lt holo less then
- $gte and $lte= grater then or equal and lte holo less then or equal 

# kono kisu update korte hole amra 
db.user.updateOne() function use kore takhi 
db.users.updateOne({
    email:"asdf@gmail.com"
},
{
    $inc:{
        age:1
    }
}
)

# countsDocuments function 
countDocuments dyea amra kono feild dyea amra oi document e amra dekhte pari j koto gula data ache 

# kono ekta array tekhe multiple data ache kina kivavbe check korbo ?
$in use kore amra check korte pari
db.products.find({
    $in:["non","lorem"]
})
ei queary er maddhome amra jkn kono ekta data match kore seta amdr k dekhabe 

- ekta array k kivabe update korbo ?
- $addToSet dya amra kono array te kisu update kore dite parbo 
# $push $pop $pull $addToSet egula dyea kono array k modify kora hoyea tahke 


# Aggretation start here
- aggreatation kn lage amdr ?
real world  er porject gula to normally eto choto hoina - jokhn huje collection hoi tkn relational vabe amra queary gula kivabe korbo ? ei complex jinis gula tikh korar jonno mongodb amader jonno aggreatation nyea asche .ekhane pipeline akare sob kisu dewa takhe .

$match- korate hobe different condition er maddhome--basic aggretation filtering


$project - project er maddhome amra  fix kore dite pari j kon kon data gulo k amra dekhabo ba frontend e pathabo - amra abr kono feild er nam o change kore dite pari project er maddhome .

$group - 

$facet - 