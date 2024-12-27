const GRADIENT: &str = "$@B%8&WM#*oahkbdpqwmZO0QLCJUYXzcvunxrjft/|()1{}[]?-_+~<>i!lI;:,^`'. ";

pub fn from_brightness(brightness: f64) -> char {
    // Assumes brightness is normalised between 0 and 1.
    let n = brightness * (GRADIENT.len() as f64);
    let n = n as usize;

    GRADIENT.chars().nth(n).unwrap_or(' ')
}
