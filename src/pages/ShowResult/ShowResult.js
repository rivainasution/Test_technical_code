export default function ShowResult(props){
    const result = props.result;

    return (
        <div className="bg-white border p-3">
            {result.map(data=>(
                <h6 className="text-start" key={data.id}>{data.nilai}</h6>
            ))}
        </div>
    );
}