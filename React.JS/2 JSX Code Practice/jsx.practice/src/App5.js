var numbers = [3, 56, 2, 48, 5];

var numbersDoubled = numbers.map(function (x) {
    return x * 2;
    
});

var evenNumbers = numbers.filter(function(num){
    return num % 2 === 0;
});

var sum = numbers.reduce(function (accumulator, currentNumber) {
    return accumulator + currentNumber;
});

function App5 () {
    return (
        <div>
            <h2>Original array</h2>
            {numbers.join(', ')}
            <p style={{fontSize:"25px"}}>Map -Create a new array by doing something with each item in an array. (e.g double)</p>
            {numbersDoubled.join(', ')}
            <p style={{fontSize:"25px"}}>Filter - Create a new array by keeping the items that return true. (e.g even)</p>
            {evenNumbers.join(', ')}
            <p style={{fontSize:"25px"}}>Reduce - Accumulate a value by doing something to each item in an array. (e.g sum)</p>
            {sum}
            <p style={{fontSize:"25px"}}>Find - find the first item that matches from an array. (e.g greater than 10)</p>
            {numbers.find(function(num){
                return num > 10;
            })}
            <p style={{fontSize:"25px"}}>FindIndex - find the index of the first item that matches. (e.g greater than 10)</p>
            {numbers.findIndex(function(num){
                return num > 10;
            })}

            <p style={{fontSize:"25px"}}>Arrow Function -allows us to write shorter function syntax: (e.g triple) </p>
            {numbers.map((num) => num * 3).join(', ')}
        </div>
    )
}

export default App5;