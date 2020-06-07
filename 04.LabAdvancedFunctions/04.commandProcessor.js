function solution() {
    let text = "";

    function append(string){
        text += string;
    }

    function removeStart(countToRemove){
        text = text.substring(countToRemove);
    }

    function removeEnd(countToRemove){
        text = text.substring(0, text.length - countToRemove);
    }

    function print(){
        console.log(text);
    }

    return {
        append,
        removeStart,
        removeEnd,
        print,
    }
}

let firstZeroTest = solution();

firstZeroTest.append('hello');
firstZeroTest.append('again');
firstZeroTest.removeStart(3);
firstZeroTest.removeEnd(4);

