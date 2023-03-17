export default function Ganjil (input, setResult){
    let temp = [];

    if (input <= 0){
        const value = {
            id: 0,
            nilai: "Hasil tidak ditemukan"
        }
        temp.push(value)
    }

    for (let i = 0 ; i <= input; i++){
        if (i % 2 !== 0){
            const value = {
                id: i+1,
                nilai: i
            }
            temp.push(value)
        }
    }

    setResult(JSON.stringify(temp))

}