## Some of my thoughts on react-table integration

### The good

It appears to be pretty flexible, after all it mostly forces us to build the structure of the table ourselves and only 
offers a few functions which help achieve certain functionality (like pagination). It comes with predefined mechanisms for 
filtering and sorting etc.

I was able to do pagination and reproduce on hove overlay with dropdown in it. Filtering and sorting should not create any issue either.

### The not so good

At some point you begin to wonder what exactly does this library do for your case as you find yourself writing quite a bit of code 
to make it all work. If I have to provide all the structure and all the display logic (when cell overlay/subrows are displayed for example) 
and all the library is doing is supplying me with "a way to do things" it starts to feel like the lib is supplying a little too little.

Some components/functionality bits are not well designed. For example, the proposed way to do pagination forces you to rerender 
your component twice. Because pagination functions (goToPreviousPage etc.) alter pageIndex directly in the table state you need to 
react to changes to pageIndex (done via useEffect) to load your data instead of being able to supply a callback which could receive pageIndex as parameter 
so that your program could fetch needed data and then trigger rerender only once.

API feels a bit bloated and confused. For example, instead of keeping a separate pagination object everything related to pagination, including page count, 
page index and functions, is added to table instance directly. Similar thing happens when you use other hooks/plugin. At the end your table instance 
has everything on it.

The "row expansion" mechanism appears to be able to handle only one level of expansion. As rows are not added to the main data structure 
calling expand row function (yes, it's added to the table as well) changes the "expanded" object in the state but doesn't actually expand the row. The row is 
no where at this point it's displayed directly from your data (if you follow their advanced lazy loading example). There is a subRows array on the row 
but I did not find a documented way to use it; there is a documented getter for it but no setter. The fact that they do not maintain one unified data structure 
for all rows, in form of a tree or in normalized form for added efficiency, represents a problem for me.

Finally, something that I took note of personally, as you play with it you almost get the feeling of being at a hook festival where the main idea is to turn everything into a hook. Even the table, which they 
refer to as instance, is not instantiated from a class.

### Overall opinion

I think we would not lose much if we implemented some or even all of that functionality ourselves. In fact I can see clear advantage of doing so as 
we would be focused on solving specific problems applicable to our case instead of all the problems in the world. Filtering, sorting, pagination, subrows all of that 
is not that difficult to do (maybe that's why material ui table gives you only components and expects you to do your own logic). While react-table does offer some 
mechanisms for solving these problems it still left me feeling that I had to do too much additional work and that what they offered is somehow half way done.

Feel free to reach out to me if you wan to discuss or want additional info. 
