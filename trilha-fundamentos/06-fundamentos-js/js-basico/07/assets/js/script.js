
function addSquares( a, b ) {
    const square = ( x ) => x * x // Arrow function

    let sqrA = square( a )
    let sqrB = square( b )
    return sqrA + sqrB
}

console.log( addSquares( 2, 3 ) )
