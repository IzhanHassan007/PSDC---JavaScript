let library = [
    {title: "Izhan", author: "izhan", yearPublish: "2001"},
    {title: "Izhan", author: "anas", yearPublish: "2005"},
    {title: "Izhan", author: "arham", yearPublish: "2008"}
]

library.push({title: "system design", author: "john doe", yearPublish: "2021"})

for(let i = 0; i<library.length; i++){
    if(library[i].title == 'system design'){
        console.log(library[i]);
        
    }
}