// 1. Create an empty array to use as a shopping list.
const sList = []
// 2. Add Milk, Bread, and Apples to your list.
sList.push('Milk', 'Bread', 'Apples')
// 3. Update "Bread" with Bananas and Eggs.
sList.splice(1, 1, 'Bananas', 'Eggs')
// 4. Remove the last item from the array and output it into the console.
const lastItem = sList.pop()
// 5. Sort the list alphabetically.
sList.sort()
// 6. Find and output the index value of Milk.
const find = sList.find(e => e === 'Milk')
const index = sList.indexOf('Milk')
// 7. After Bananas, add Carrots and Lettuce.
sList.splice(1,0,'Carrots', 'Lettuce')
// 8. Create a new list containing Juice and Pop.
const newList = ['Juice', 'Pop']
// 9. Combine both lists, adding the new list twice to the end of the first list.
const bigList = sList.concat(newList, newList)
// 10. Get the last index value of Pop and output it to the console.
const lastIndex = bigList.lastIndexOf('Pop')
// 11. Your final list should look like this:
console.log(bigList);


