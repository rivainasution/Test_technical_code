export default function Prima (input, setResult){
    let temp = []

    for (let i = 0; i <= input; i++){
        if (IsPrima(i)){
            const value = {
                id: i+1,
                nilai: i
            }
            temp.push(value);
        }
    }

    setResult(JSON.stringify(temp));

}

function IsPrima(indeks){
    // if(indeks <= 1){
    //     return false;
    // }

    for (let i = 2 ; i < indeks; i++){
        if (indeks % i === 0){
            return false;
        }
    }

    return true;
}