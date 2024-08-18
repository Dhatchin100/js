let arr = [
  { id: 1, name: "john", age: "18", profession: "developer" },
  { id: 2, name: "jack", age: "20", profession: "developer" },
  { id: 3, name: "karen", age: "19", profession: "admin" },
];

function PrintDeveloperbyMap() {
  arr.map(newArr => {
  if (newArr.profession === "developer") {
    console.log(newArr.name);
  }
});
  
}

function PrintDeveloperbyForEach() {
 arr.forEach(newArr => {
  if (newArr.profession === "developer") {
    console.log(newArr.name);
  }
});
}

function addData() {
  arr.push( {id:4,name:"susan",age:"20",profession:"intern"});
  console.log(arr)
}

function removeAdmin() {
 const newArr = arr.filter(arrs => arrs.profession !== "admin");

console.log(newArr);
}

function concatenateArray() {
  let arrs = [
  { id: 5, name: "john1", age: "18", profession: "developer1" },
  { id: 6, name: "jack1", age: "20", profession: "developer1" },
  { id: 7, name: "kare1n", age: "19", profession: "admin1" },
];
  const newArr = arr.concat(arrs);

console.log(newArr);
}
