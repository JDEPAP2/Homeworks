
//Length: Corresponde al tamaño del arreglo
var arr = [1,2,3,4,5]
console.log(`Lenght/ El arreglo tiene ${arr.length} elementos`)

//At:
arr = ["Pancho","Sandra","Maria","Ana","Alba"]
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

arr = [1,1,1,1,1,1]
arr.forEach((v,i)=>arr[i]= v+i)
console.log(`La lista resultante es ${arr}`)