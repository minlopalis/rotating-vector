export default class Vector{
    constructor(x, y){
        this.x = x;
        this.y = y;
        this.magnitude = Math.sqrt(x * x + y * y)
        this.rotate = 0;
    }


}