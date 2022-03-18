export default function SetColors({color,listColors, setlistColors, id}) {

    function changeColor(e) {
        color.code = e.target.value;
        let newlist = listColors.map(e => {
            if(e.id == id) {
                return {...e, code:color.code}
            }
            return e;
        })

        setlistColors(newlist);
    }

    return (
        <div className="form-group align-items-center justify-content-center gap-3 mb-3">
            <label htmlFor="head" className="text-warning" style={{fontWeight:"bold",fontSize:"1.5em"}}>Breackpoint {color.id}</label>
            <input type="text" className="form-control" id="head" name="head" value={color.code} onChange={changeColor}/>
            <input type="color" className="form-control" id="head" name="head" value={color.code} onChange={changeColor}/>
        </div>
    )
}