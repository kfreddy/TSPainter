export class Vec3 {
    constructor(_x = 0.0, _y = 0.0, _z = 0.0) {
        this._x = _x;
        this._y = _y;
        this._z = _z;
        Object.freeze(this);
    }
    get x() { return this._x; }
    get y() { return this._y; }
    get z() { return this._z; }
    static create(x, y, z) {
        if ([x, y, z].every(x => x === 0)) {
            return Vec3.default;
        }
        return new Vec3(x, y, z);
    }
    default() {
        return Vec3.default;
    }
    isDefault() {
        return this === Vec3.default;
    }
    withX(n) { Vec3.create(this.x + n, this.y, this.z); }
    withY(n) { Vec3.create(this.x, this.y + n, this.z); }
    withZ(n) { Vec3.create(this.x, this.y, this.z + n); }
    add(rhs) {
        return Vec3.create(this._x + rhs._x, this._y + rhs._y, this._z + rhs._z);
    }
    subtract(rhs) {
        return Vec3.create(this._x - rhs._x, this._y - rhs._y, this._z - rhs._z);
    }
    multiply(rhs) {
        return Vec3.create(this._x * rhs._x, this._y * rhs._y, this._z * rhs._z);
    }
    divide(rhs) {
        return Vec3.create(this._x / rhs._x, this._y / rhs._y, this._z / rhs._z);
    }
    addScalar(n) {
        return Vec3.create(this._x + n, this._y + n, this._z + n);
    }
    subtractScalar(n) {
        return Vec3.create(this._x - n, this._y - n, this._z - n);
    }
    multiplyScalar(n) {
        return Vec3.create(this._x * n, this._y * n, this._z * n);
    }
    divideScalar(n) {
        return Vec3.create(this._x / n, this._y / n, this._z / n);
    }
    powScalar(n) {
        return Vec3.create(Math.pow(this.x, n), Math.pow(this.y, n), Math.pow(this.z, n));
    }
    round() {
        return Vec3.create(this.x + .5 | 0, this.y + .5 | 0, this.z + .5 | 0);
    }
}
Vec3.default = new Vec3(0, 0, 0);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVmVjMy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9FbmdpbmUvTWF0aC9WZWMzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBLE1BQU07SUFHTCxZQUNTLEtBQUssR0FBRyxFQUNSLEtBQUssR0FBRyxFQUNSLEtBQUssR0FBRztRQUZSLE9BQUUsR0FBRixFQUFFLENBQU07UUFDUixPQUFFLEdBQUYsRUFBRSxDQUFNO1FBQ1IsT0FBRSxHQUFGLEVBQUUsQ0FBTTtRQUVoQixNQUFNLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ3JCLENBQUM7SUFFRCxJQUFXLENBQUMsS0FBSyxNQUFNLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7SUFDbEMsSUFBVyxDQUFDLEtBQUssTUFBTSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO0lBQ2xDLElBQVcsQ0FBQyxLQUFLLE1BQU0sQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztJQUUzQixNQUFNLENBQUMsTUFBTSxDQUFDLENBQVMsRUFBRSxDQUFTLEVBQUUsQ0FBUztRQUNuRCxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ25DLE1BQU0sQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDO1FBQ3JCLENBQUM7UUFDRCxNQUFNLENBQUMsSUFBSSxJQUFJLENBQUMsQ0FBQyxFQUFDLENBQUMsRUFBQyxDQUFDLENBQUMsQ0FBQztJQUN4QixDQUFDO0lBQ00sT0FBTztRQUNiLE1BQU0sQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDO0lBQ3JCLENBQUM7SUFDTSxTQUFTO1FBQ2YsTUFBTSxDQUFDLElBQUksS0FBSyxJQUFJLENBQUMsT0FBTyxDQUFDO0lBQzlCLENBQUM7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