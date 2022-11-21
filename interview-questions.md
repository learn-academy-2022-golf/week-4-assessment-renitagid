# ASSESSMENT 4: Interview Practice Questions

Answer the following questions.

First, without external resources. Challenge yourself to answer from memory.

Then, research the question to expand on your answer. Even if you feel you have answered the question completely on your own, there is always something more to learn. Write your researched answer in your OWN WORDS.

1. What is object-oriented programming? How is it different than functional programming?

Your answer: Object oriented programming is a way of approaching code to organize a program using objects. Ruby is an example of an object oriented language, because all of the data structures that exist within it are objects, even basic data types such as numbers and strings. Javascript is a language which can be written in an object oriented way, or a more functional way. In functional program, a function might be something that is used across many different objects, or even just as a core part of a program. However, in an object oriented language such as Ruby, all functions belong to objects, making them methods. This makes it more encapsulated so that objects can be moved about and reused, and the whole program does not have access to functions or other variables that it does not need.

Researched answer: More specifically, object oriented programming (OOP) is a paradigm which provides rules and structure to follow when writing code to solve a certain problem. It is often descrbed as four pillars: abstraction, encapsulation, inheritance, and polymorphism. Abstraction refers to the concept of making code easier to reuse by removing as much of the inner logic as possible and reducing the code down to a simple function. Encapsulation refers to keeping data confined within the object it is needed in, with each object controlling, accessing its own state, and only outputting what other items will necessarily need to access. Inheritance refers to a way of reusing code by passing down most of the same functionality form a parent element to a child element except minor change which are more specific instances of the parent element. Last, polymorphism refers to using the same method to perform same logic even if it is on different items, and especially on items that have the same inheritance, rather than having to write more similar code.

2. What is the difference between a Float and an Integer in Ruby?

Your answer: Integers in Ruby are only single integers, which can make doing math with them a little odd. For example, if dividing an odd integer by two, it will not return a value with .5 at the end, but rather round it down to the nearest integer, e.g. 5/2 = 2. This can be accounted for by writing this equation in floats, 
e.g. 5.0/2.0 = 2.5. Floats are numbers with decimal points and can be used to do more exact math. 

Researched answer: When doing math with an integer and a float, a float will be returned. For example, 3 + 3.5 will return 6.5. Some languages differentiate even further between float, and another data type called decimal, in which floats are less precise and round at some point, whereas decimals are more accurate and have an extremely high degree of accuracy. Using decimals can be important in complex and precise applications such as financial calculations.

3. Ruby has an implicit return. What does that mean?

Your answer: An implicit return is one that does not need to be stated for example in Javascript, we use the keyword "return." In ruby, the last line of code within a block will implicitly be read as the return.

Researched answer: it is often considered preferred stylistically to leave off the explicit return, both for ease of reading as well as the fact that within a loop, the word return will stop the method from executing, which is often not what is intended. In addition, calling return explicitly overrides any lines of code further down that would have otherwise implicitly returned, since the word "return" stops the code from running.

4. What is a block in Ruby? 

Your answer: A block is a group of lines of code that is started with the use of a certain keyword such as do, if, or def, and ends with the word end. Essentially is is a block of logic that you want the program to perform.

Researched answer: A block is essentially the same thing as a method, however it does not implicitly belong to an object, and they are not named. They can also be defined between curly braces if the code is one line only.

1. How do you extract a value in a Ruby hash?

Your answer: The syntax for extracting a value involves using the key for that value, which is a data type of symbol. You would use the name of the hash, then the name of the value in square brackets with a colon in front, like so: person[:name]

Researched answer: Another syntax you can use to extract a value from a Ruby has would be person.fetch(:name)
the difference between these two methods is that .fetch will return an error message letting you know that the key was not found if you try to use a key that is not there, whereas [:key] will return nil. If you need to access all the values in a hash you can use person.values, and receive an array with all the values.


## Looking Ahead: Terms for Next Week

1. Class Inheritance: Class inheritance is a way to pass down shared information to more specific instances of a class. For example, Flower is a class that has some shared things like petals, leaves, stem, roots, stamen etc. It also has behavior such as the growth life cycle. However, individual flowers look at behaivor differently from each other. So Rose, Tulip, Daffodil, etc would be subclasses of Flower, and flower can pass to them whatever commonalities they have through an initialize method

2. RSpec: RSpec is a domain specific language. This means that it is a language used only for one specific task, rather than for general use. The specific task it is used for is testing object behavior in Ruby.

3. CRUD: CRUD stands for create, react, update, delete. These are the four main actions that can be done with a given data set such as an array, or a hash.

4. Test-driven development: A testing paradigm that involves setting up a test, checking to see it fail, then wrting the code which will make it pass, watching it pass, and refactoring the code as needed. This is similar to another concept called behavior driven development, which involves a similar testing process, but focuses on how a user will encounter and use the application.

5. HTTP: stands for hypertext transfer protocol. It is the way that devices load information stored on other servers, by making requests to those servers and receiving information back.
