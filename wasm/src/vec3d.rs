use num_traits::Num;

pub struct Vec3d<T: Num + Copy> {
    pub x: T,
    pub y: T,
    pub z: T
}

impl<T: Num + Copy> Vec3d<T> {

    pub fn map<U: Num + Copy>(&self, f: fn(T) -> U) -> Vec3d<U> {
        Vec3d { x: f(self.x), y: f(self.y), z: f(self.z) }
    }

    pub fn add(&self, other: &Vec3d<T>) -> Vec3d<T> {
        Vec3d {
            x: self.x + other.x,
            y: self.y + other.y,
            z: self.z + other.z
        }
    }
}

pub fn vec3d<T: Num + Copy>(x: T, y: T, z: T)  -> Vec3d<T> {
    Vec3d {x, y, z}
}
