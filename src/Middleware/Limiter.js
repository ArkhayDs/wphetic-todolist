import {useEffect} from "react";

export default function Limiter({cards,setLimiter}) {

    // todo : "export" const limiter to parent in order tu use in Form (update button onClick function)
    useEffect(() => {
        // ce que je veux : map cards -> count++ si status === 0. Si count > 10 -> STOP
        let count = cards.filter(e => e.status == false).length;

        if(count >= 10) {
            setLimiter(true);
        } else {
            setLimiter(false);
        }
    }, [cards]);

    return (
        <></>
    )
}