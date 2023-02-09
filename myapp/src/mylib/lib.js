/**
 * @param {Number[][]} square
 * @param {Number} i
 */
export function check_win(square, i) {
    if (square[0][0] === i && square[0][1] === i && square[0][2] === i)
        return true;
    if (square[1][0] === i && square[1][1] === i && square[1][2] === i)
        return true;
    if (square[2][0] === i && square[2][1] === i && square[2][2] === i)
        return true;
    if (square[0][0] === i && square[0][1] === i && square[0][2] === i)
        return true;
    if (square[1][0] === i && square[1][1] === i && square[1][2] === i)
        return true;
    if (square[2][0] === i && square[2][1] === i && square[2][2] === i)
        return true;
    if (square[0][0] === i && square[1][1] === i && square[2][2] === i)
        return true;
}