use wasm_bindgen::prelude::*;

pub type AtomicAmount = u64;

/// Defines the depth of the two pools that are part of the swap
#[wasm_bindgen]
pub struct Pools {
    depth_x: AtomicAmount,
    depth_y: AtomicAmount,
}

#[wasm_bindgen]
impl Pools {
    pub fn new(depth_x: AtomicAmount, depth_y: AtomicAmount) -> Self {
        Pools { depth_x, depth_y }
    }
}

/// Constant product swap formula without fees
#[wasm_bindgen]
pub fn swap(input_amount: AtomicAmount, pools: Pools) -> f64 {
    let k = pools.depth_x * pools.depth_y;
    let how_much_to_remove_to_keep_constant = k as f64 / (input_amount + pools.depth_x) as f64;
    let output = pools.depth_y as f64 - how_much_to_remove_to_keep_constant;
    output
}

#[cfg(test)]
mod tests {
    // Note this useful idiom: importing names from outer (for mod tests) scope.
    use super::*;

    #[test]
    fn test1() {
        let pools = Pools {
            depth_x: 10,
            depth_y: 500,
        };

        let input_amount = 1;
        let output_amount = swap(input_amount, pools);
        assert_eq!(output_amount, 45.45454545454544);
    }

    // TODO: More tests
    #[test]
    fn test2() {}
}
