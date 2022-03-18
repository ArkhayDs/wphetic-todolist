export default function Randomizer({listColors, setlistColors}) {

    function colorRandomizer(e) {
        console.log(listColors);
        e.preventDefault();
        let id = 0;
        while (id < 3) {
            console.log(id);
            let value = "#"+Math.floor(Math.random()*16777215).toString(16);
            console.log(value);
            listColors.map(e => {
                if(e.id == id) {
                    return {
                        ...e, code: value
                    }
                    return e;
                }
            });
            id++;
            setlistColors(newlist);
        }
    }

    return (
        <div className="text-center">
            <button className="btn btn-warning " onClick={colorRandomizer}>Randomizer</button>
        </div>
    )
}