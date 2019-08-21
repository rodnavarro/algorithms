function cellCompete(states, days)
{
    
    for(d = 0; d < days;d++){
        states = calcstate(states);
    }

    return states;
}

function calcstate(states){
    prevstates = states.slice(0);
    
    for(var x = 0;x<states.length;x++){
        let prev = x - 1 < 0 ? 0 : prevstates[x-1];
        let next = x + 1 > prevstates.length - 1 ? 0 : prevstates[x + 1];
        console.log("Iteration",x, "\ncurrent",prevstates[x],"previous", prev, "next", next,"\n\n");
        states[x] = prev != next ? 1 : 0 ; //if equal, then inactive
    }
    
    return states.slice(0);
}

//onsole.log(cellCompete([1,0,0,0,0,1,0,0],1))

console.log(cellCompete([1,1,1,0,1,1,1,1],2))