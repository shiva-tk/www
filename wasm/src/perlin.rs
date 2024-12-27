use crate::vec3d::{ vec3d, Vec3d };
use rand::seq::SliceRandom;
use rand::{ SeedableRng, rngs::StdRng };

pub struct Perlin {
    permutation_table: Vec<usize>
}

impl Perlin {
    pub fn new() -> Perlin {
        let mut p: Vec<_> = (0..=255).collect();
        // Create a seeded RNG
        let seed: u64 = 42; // Replace 42 with your desired seed value
        let mut rng = StdRng::seed_from_u64(seed);

        // Shuffle using the seeded RNG
        p.shuffle(&mut rng);

        // Duplicate the permutation table to make it 512 in length
        let mut permutation_table = p.clone();
        permutation_table.extend_from_slice(&p);

        Perlin { permutation_table }
    }

    pub fn noise(&self, p: &Vec3d<f64>) -> f64 {

        // Cube corner closest to (0, 0, 0)
        // mod 256 to avoid overflow in our permutation table
        let pi: Vec3d<usize> = p.map(|u| (u as usize) % 256);

        // Vector from that cube corner to our point p
        let pf: Vec3d<f64> = p.map(|u| u - u.floor());
        // Smoothed to give weighting of corner pi
        let u: Vec3d<f64> = pf.map(fade);

        // Generate the different corners of the cube.

        let aaa = self.hash(&pi);
        let aab = self.hash(&pi.add(&vec3d(0, 0, 1)));
        let aba = self.hash(&pi.add(&vec3d(0, 1, 0)));
        let abb = self.hash(&pi.add(&vec3d(0, 1, 1)));
        let baa = self.hash(&pi.add(&vec3d(1, 0, 0)));
        let bab = self.hash(&pi.add(&vec3d(1, 0, 1)));
        let bba = self.hash(&pi.add(&vec3d(1, 1, 0)));
        let bbb = self.hash(&pi.add(&vec3d(1, 1, 1)));

        let x1 = lerp(
            grad(aaa, &pf),
            grad(baa, &pf.add(&vec3d(-1.0, 0.0, 0.0))),
            u.x
        );

        let x2 = lerp(
            grad(aba, &pf.add(&vec3d(0.0, -1.0, 0.0))),
            grad(bba, &pf.add(&vec3d(-1.0, -1.0, 0.0))),
            u.x
        );

        let y1 = lerp(x1, x2, u.y);

        let x1 = lerp(
            grad(aab, &pf.add(&vec3d(0.0, 0.0, -1.0))),
            grad(bab, &pf.add(&vec3d(-1.0, 0.0, -1.0))),
            u.x
        );

        let x2 = lerp(
            grad(abb, &pf.add(&vec3d(0.0, -1.0, -1.0))),
            grad(bbb, &pf.add(&vec3d(-1.0, -1.0, -1.0))),
            u.x
        );

        let y2 = lerp(x1, x2, u.y);

        let z = lerp(y1, y2, u.z);

        // Increase the contrast
        (sigmoid(z) + 1.0) / 2.0
    }

    // Hash function used for each corner of the cube.
    fn hash(&self, p: &Vec3d<usize>) -> usize {
        let pt = &self.permutation_table;
        let hash_x = pt[p.x];
        let hash_y = pt[hash_x + p.y];

        pt[hash_y + p.z]
    }
}

fn fade(t: f64) -> f64 {
    t * t * t * (t * (t * 6.0 - 15.0) + 10.0)
}

fn sigmoid(x: f64) -> f64 {
   1.0 / (1.0 + (-x).exp())
}

// Source: http://riven8192.blogspot.com/2010/08/calculate-perlinnoise-twice-as-fast.html
fn grad(hash: usize, p: &Vec3d<f64>) -> f64 {
    let k = hash & 0xF;

    if k == 0x0 {
        p.x + p.y
    } else if k == 0x1 {
        - p.x + p.y
    } else if k == 0x2 {
        p.x - p.y
    } else if k == 0x3 {
        - p.x - p.y
    } else if k == 0x4 {
        p.x + p.z
    } else if k == 0x5 {
        - p.x + p.z
    } else if k == 0x6 {
        p.x - p.z
    } else if k == 0x7 {
        - p.x - p.z
    } else if k == 0x8 {
        p.y + p.z
    } else if k == 0x9 {
        - p.y + p.z
    } else if k == 0xA {
        p.y - p.z
    } else if k == 0xB {
        - p.y - p.z
    } else if k == 0xC {
        p.y + p.x
    } else if k == 0xD {
        - p.y + p.x
    } else if k == 0xE {
        p.y - p.x
    } else if k == 0xF {
        - p.y - p.x
    } else {
        0.0
    }
}

fn lerp(a: f64, b: f64, x: f64) -> f64 {
    a + x * (b - a)
}

#[cfg(test)]
mod tests {
    use super::*; // Import the Perlin struct and any other necessary dependencies
    use std::collections::HashMap;

    #[test]
    fn test_perlin_new() {
        let perlin = Perlin::new();

        // Ensure the permutation table is 512 elements long
        assert_eq!(perlin.permutation_table.len(), 512);

        // Count occurrences of each element in the permutation table
        let mut counts = HashMap::new();
        for &item in &perlin.permutation_table {
            *counts.entry(item).or_insert(0) += 1;
        }

        // Ensure each element appears exactly twice
        for (&item, &count) in counts.iter() {
            assert_eq!(count, 2, "Element {} appears {} times, expected 2", item, count);
        }
    }

    #[test]
    fn test_perlin_noise() {
        let perlin = Perlin::new();

        // Assert that the output is between 0 and 1
        for i in 0..500 {
            for j in 0..500 {
                for k in 0..10 {
                    let x = 5.0 * (i as f64 / 500.0);
                    let y = 5.0 * (j as f64 / 500.0);
                    let z = 5.0 * (k as f64 / 500.0);
                    let point = vec3d(x, y, z);
                    let noise_value = perlin.noise(&point);
                    assert!(noise_value >= 0.0 && noise_value <= 1.0,
                        "Noise value {} is out of bounds, expected between 0 and 1", noise_value);
                }
            }
        }
    }
}
