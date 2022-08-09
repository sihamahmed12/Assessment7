//1 - Sum Zero 

function addToZero (arr){
    let result = false
    
      for(let i = 0; i<arr.length; i++){
          for(let j =arr.length; j>-1; j--){
             if (arr[i] + arr[j] === 0){
              result = true
             }
          }
        
      }  
    console.log(result)
  }

  //   Time complexity: O(n^2)
// space complexity: O(n)

  addToZero([1]);
// // -> False

//2 - Unique Characters 
function hasUniqueCharacters(word) {
    console.log(new Set(word).size == word.length);
  }

//  time complexity: O(1)
// space complexity: O(n)

hasUniqueChars("Moonday");
// // -> False

//3 - Pangram Sentence 
function isPangram(text){

    let alpha = /[abcdefghijklmnopqrstuvwxyz]/gi;
    let word = text.toLowerCase().match(alpha);
  let set = new Set(word);
  let arr = [...set];
  
  
    if(arr.length === 26){
       console.log(true)      
    }else{
        console.log(false)
    }

}
// Time complexity: O(n)
// Space complexity O(n)

//4 - Longest Word 
function findLongestWord(arr){
    let longestWord = ""
     for(word in arr){
         if(arr[word].length >= word.length){
         longestWord = arr[word]
         }
     }
     return longestWord.length 
 }
 
 findLongestWord(["hi", "hello"]);
 // -> 5

// space complexity: O(n)