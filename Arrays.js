//At:
var arr = ["Pancho","Sandra","Maria","Ana","Alba"]
console.log()

//Concat:
arr = ["Pancho","Sandra"]
var arr2 = ["Maria","Ana","Alba"]
var arr3 = arr.concat(arr2)
console.log(`Concat/ Al concaternar los dos primeros arreglos se da como resultado ${arr3}`)

//Constructor:
arr = new Array("Maria","Ana","Alba")
console.log(`Constructor/ El arreglo creado desde el constructor es ${arr}`)

//CopyWithin:
arr = ["Se copia", "Se copia too", "Este no", "Empieza", "Termina"]
console.log(`CopyWithin/ El arreglo resultante es ${arr.copyWithin(3,0,2)}`)

//Entries:
arr = ["Pancho","Sandra","Maria","Ana","Alba"]
arrIterator = arr.entries()
console.log(arrIterator.next())

//Every:
arr = ["Ana","Anabel","Anabelo","AlbA"]
cond1 = arr.every((v)=> v.includes("a"))
console.log(`En la lista ${cond1?"":"no "}todas las palabras tienen la letra a`)
cond2 = arr.every((v)=> v.includes("A"))
console.log(`En la lista ${cond2?"":"no "}todas las palabras tienen la letra a`)

//Fill:
arr = ["hay","hay","vacio","vacio","vacio","hay tambien"]
console.log(`La lista rellena es ${arr.fill("hay",2,5)}`)

//Filter:
arr = ["Armando", "Fernando", "Orlando", "Amanda"]
console.log(`En la lista los elementos que terminan en ando son ${arr.filter((v)=> v.includes("ando"))}`)

//Find:
arr = [3,1,4,1,5,9,2,6,3,5]
console.log(`La primer valor mayor a 5 encontrado es ${arr.find(v=> v > 5)}`)

//FindLast:
// arr = [3,1,4,1,5,9,2,6,3,5,9]
// console.log(`La ultimo valor mayor a 5 encontrado es ${arr.findLast(v=> v > 5)}`)

//FindIndex:
arr = [3,1,4,1,5,9,2,6,3,5]
console.log(`El primer 9 se encuentra en la posicion ${arr.findIndex(v=> v===9)}`)

//FindLastIndex:
// arr = [3,1,4,1,5,9,2,6,3,5,9]
// console.log(`El ultimo 9 se encuentra en la posicion ${arr.findLastIndex(v=> v===9)}`)

//Flat:
arr = [1,2,3,4,[[2,[3,4]]]]
console.log(`La lista resultante es ${arr.flat()}`)

//FlatMap:
arr = ["Aqui no", "Aqui tampoco", "Aqui menos","Insertar Aqui", "Ni aqui"]
console.log(`La lista resultante es ${arr.flatMap((v)=>v=="Insertar Aqui"?["se inserto este", "este tambien"]:v)}`)

//ForEach:
arr = [1,1,1,1,1,1]
arr.forEach((v,i)=>arr[i]= v+i)
console.log(`La lista resultante es ${arr}`)

//Includes:
arr = ["Camila","Camilo","Catalino","Victorino"]
console.log(arr.includes("Camila"))
console.log(arr.includes("Cam"))

//IndexOf:
arr = [1,2,1,3,4,5,6,1]
console.log(arr.indexOf(1))
console.log(arr.indexOf(1,3))

//IsArray:
arr = [1,2,3,4,5]
test = {1:"",2:""}
console.log(Array.isArray(arr))
console.log(Array.isArray(test))

//Join
arr = ["Hola", "como", "estas"]
console.log(arr.join())
console.log(arr.join(" "))

//Keys
arr = ["pos0","pos1","pos2"]
for (const key of arr.keys()) {
  console.log(key);
}

//LastIndexOf
arr = ["este","no","este no","este"]
console.log(arr.lastIndexOf("este"))

//Length: Corresponde al tamaño del arreglo
arr = [1,2,3,4,5]
console.log(`El arreglo tiene ${arr.length} elementos`)

//Map
arr = [2,3,4,5,6]
console.log(arr.map((v)=>v%2 == 0?"Es par":"Es impar"))

//Pop
arr = [2,3,4,5,6]
console.log(arr.pop())
console.log(arr)

//Push
arr = ["Hola", "que"]
arr.push("Mas")
console.log(arr)

//Reduce
arr = ["h","o","l","a"]
console.log(arr.reduce((a,b)=>a+b))

//ReduceRight
arr = ["a","l","o","h"]
console.log(arr.reduceRight((a,b)=>a+b))

//Reverse
arr = [5,4,3,2,1]
console.log(arr.reverse())

//Shift
arr = ["JKGBH","Hola","como","estas"]
console.log(arr.shift())
console.log(arr)

//Slice
arr = [3,2,1,0,1,2]
console.log(arr.slice(0,3))

//Some
arr = ["Pedro","Anastasio","Patroclo"]
console.log(arr.some(v=>v.includes("e"))?"Si hay palabras con el":"No hay palabras con e")

//Sort
arr = ["Dante","Anabel","Brayan","Camilo"]
console.log(arr.sort())

//Splice
arr = ["Falta","an","elemento","aqui"]
console.log(arr.splice(5,0,"xd"))
console.log(arr.splice(1,1,"un"))
console.log(arr)

//ToLocaleString
arr = [Date("15/08/2023")]
console.log(arr.toLocaleString('es',{timeZone:"UTC"}))
console.log(arr.toLocaleString('en',{timeZone:"UTC"}))
console.log(arr.toLocaleString('fr',{timeZone:"UTC"}))
// toReversed
// : 
// ƒ toReversed()
// toSorted
// : 
// ƒ toSorted()
// toSpliced
// : 
// ƒ toSpliced()
// toString
// : 
// ƒ toString()
// unshift
// : 
// ƒ unshift()
// values
// : 
// ƒ values()
// with
// : 
// ƒ with()