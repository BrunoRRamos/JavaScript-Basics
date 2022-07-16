function digital_root(n) {

    n = String(n)
    let acumulator = 0
    let aux = 0

    for (let i = 0; i < n.length; i++) {
        const element = n[i];
        acumulator += Number(element)
      }
    
      if (String(acumulator).length > 1) {

        while (String(acumulator).length > 1) {
            aux = acumulator
            acumulator = 0

            for (let i = 0; i< String(aux).length; i++) {
                const element = String(aux)[i];
                acumulator += Number(element)
            }
            
        }

    }
    return acumulator
}

let a = digital_root(132189)

console.log(a)