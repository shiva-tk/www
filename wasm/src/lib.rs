mod vec3d;
mod perlin;
mod ascii;

use wasm_bindgen::prelude::*;
use perlin::Perlin;
use vec3d::vec3d;
use std::cell::RefCell;
use std::rc::Rc;

#[wasm_bindgen]
extern "C" {
    pub fn alert(s: &str);
}

fn window() -> web_sys::Window {
    web_sys::window().expect("No global window exists")
}

fn document() -> web_sys::Document {
    window().document().expect("No document in window")
}

fn terminal(terminal_id: &str) -> web_sys::Element {
    document().get_element_by_id(terminal_id).unwrap()
}

fn request_animation_frame(f: &Closure<dyn FnMut()>) {
    window()
        .request_animation_frame(f.as_ref().unchecked_ref())
        .expect("should register `requestAnimationFrame` OK");
}

#[wasm_bindgen]
pub fn perlin_animation(terminal_id: &str, width_chars: u32, height_chars: u32) {
    let terminal = terminal(terminal_id);

    let start_time = window().performance().unwrap().now();

    let perlin = Perlin::new();

    let f = Rc::new(RefCell::new(None));
    let g = f.clone();

    *g.borrow_mut() = Some(Closure::new(move || {
        let current_time = window().performance().unwrap().now();

        let elapsed = current_time - start_time;

        let mut result = String::with_capacity((height_chars * (width_chars + 1)) as usize);

        for i in 0..height_chars {
            for j in 0..width_chars {
                let x = (i as f64 / width_chars as f64) * 7.0;
                let y = (j as f64 / width_chars as f64) * 7.0;
                let brightness = perlin.noise(&vec3d(x, y, elapsed / 1500.0));

                result.push(ascii::from_brightness(brightness));
            }
            result.push('\n');
        }

        terminal.set_text_content(Some(&result));

        request_animation_frame(f.borrow().as_ref().unwrap());

    }));

    request_animation_frame(g.borrow().as_ref().unwrap());
}
