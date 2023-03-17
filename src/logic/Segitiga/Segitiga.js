export default function Segitiga(input, setResult){
    let temp = []
    for (let i = 0; i < input.length; i++){
        const value = {
            id:i+1,
            nilai: input[i]+zeroHandle(i)
        }
        temp.push(value)
    }
    setResult(JSON.stringify(temp));
}


function zeroHandle(indeks){
    let temp = "";
    for (let i = 0; i <= indeks; i++){
        temp = temp + '0';
    }

    return temp
}